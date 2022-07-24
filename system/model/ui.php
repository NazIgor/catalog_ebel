<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Ui
	{
        private $row;
        private $lng;

		public static function init()
		{
			$ui = new self;
            $ui -> row = Main :: $obj -> db()
                                      -> read('ui')
                                      -> execute();

            $languages = Main :: $obj -> db()
                                      -> read('languages')
                                      -> execute();
            $ui -> lng = [];

            foreach ($languages as $row)
            {
                $col = ['id'       => $row['id'],
                        'name'     => $row['name'],
                        'fullName' => $row['full_name']];

                $ui -> lng[$row['id']]   = $col;
                $ui -> lng[$row['name']] = $col;
                $ui -> lng['list'][] = $col;
            }
            return $ui;
		}

        public function getLng()
        {
            return $this -> lng['list'];
        }

        public function get($id = FALSE)
        {
            
            $res = [];

            foreach($this -> row as $item)
            {
                $locale = Main :: $obj -> db()
                                       -> read('locale')
                                       -> where("target_id=".$item['id']." AND target_table='ui'")
                                       -> execute();
                
                $res[$item['id']]['name'] = $item['name'];
                foreach($locale as $l)
                {
                    $res[$item['id']][$this -> lng[$l['language']]['name']] = $l['value'];
                }
            }

            return $id ? $res[$id] : $res;
        }

        public function set($data)
        {

            $id = Main :: $obj -> db()
                               -> write('ui', ['name' => $data['name']])
                               -> execute()['write'];
            
            foreach($data as $key => $value)
            {
                if ($key != 'name')
                {
                    $res = Main :: $obj -> db()
                                        -> write('locale', ['target_id'    => $id,
                                                            'target_table' => 'ui',
                                                            'language'     => $this -> lng[$key]['id'],
                                                            'value'        => $value])
                                        -> execute();
                }
            }

            return $res['write'] === 'error' ? $res : $this -> get();

        }

	}	
?>
