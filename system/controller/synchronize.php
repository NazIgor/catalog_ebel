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
                                -> write(json_encode($data))
                                -> execute();
        }

        private function synch()
        {
            $old_data = Main :: $obj -> db()
                                     -> read('locale')
                                     -> execute();

            $file_data = json_decode(Main :: $obj -> filec(Main :: $obj -> tmppath.'locale')
                                                  -> read()
                                                  -> execute());

            $new_data = array();
            foreach((array)$file_data as $item)
            {
                $item = (array)$item;
                if (array_search($item, $old_data) === FALSE)
                {
                    $new_data[] = $item;
                }
            }
            if (count($new_data) == 0) return 'no ads found';
        
            $res = Main :: $obj -> db()
                                -> write('locale', $new_data)
                                -> execute();

            if (@$res['write'] === 'error') $this -> alert('error write data');
            return $new_data;
        }
	}	
?>
