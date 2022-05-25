<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 24.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Synchronize extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            if (empty($data -> action)) $this -> alert('error data');
            $action = $data -> action;
            $this -> cout($this -> $action());

        }

        private function load()
        {
            $data = Main :: $obj -> db()
                                 -> read('locale')
                                 -> execute();

            return Main :: $obj -> filec(Main :: $obj -> tmppath.'locale')
                                -> write(json_encode($data), 'w')
                                -> execute();
        }

        private function synch()
        {
            $old_data = Main :: $obj -> db()
                                     -> read('locale')
                                     -> execute();

            $file_data = json_decode(Main :: $obj -> filec(Main :: $obj -> tmppath.'locale')
                                                  -> read('r')
                                                  -> execute());

            $new_data = array();
            $count_line = 0;
            $error_line = 0;
            foreach((array)$file_data as $item)
            {
                $item = (array)$item;
                $search = FALSE;
                foreach($old_data as $row)
                    if($row['name'] == $item['name']) $search = TRUE;

                if (!$search)
                {
                    unset($item['id']);
                    $new_data[] = $item;
                    
                    $res = Main :: $obj -> db()
                                        -> write('locale', $item)
                                        -> execute();

                    if (@$res['write'] === 'error')
                    {
                        $error_line++;
                    }
                    else
                    {
                        $count_line++;
                    }
                }
            }
            
            if (count($new_data) == 0) return 'no ads found';
        
            $new_data[] = 'write line: '.$count_line.'; error write: '.$error_line;

            if (@$res['write'] === 'error') $this -> alert('error write data');
            return $new_data;
        }
	}	
?>
