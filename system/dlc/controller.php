<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "autosalon"
	#  file: controller.php
	#  date: 05.02.2022
	#  author: Medvedev Alexandr
	#
	*/
	
	class Controller
	{
		
		public static function init()
		{

            if (Main :: $obj -> data)
            {
               
                if (is_object(Main :: $obj -> data))
                {
                    foreach (Main :: $obj -> data as $key => $value)
                    {
                        Main :: factory('controller', $key) -> action($value);
                    }
                }
                else
                {
                    (new self) -> alert('data incorrect '.serialize(Main :: $obj -> data));
                }
            }
            else
            {
                $page = count(Main :: $obj -> url) > 0 ? Main :: $obj -> url[0] : 'base';

                Main :: $obj -> page() -> action($page);
            }

		}

        public function __call($f, $arg)
        {
            return Main :: classload('model', $f) ? $f :: init($arg) : FALSE;
        }

        public function cout($data, $reset = FALSE)
        {
            
            if (is_object($data)) $data = (array)$data;

            if (is_string($data) OR is_numeric($data) OR is_bool($data) OR $data == '') $data = [0 => $data];

            if (!is_array($data)) $data = array(); 

            if ($reset) Main :: $obj -> buffer = [];

            Main :: $obj -> buffer[$this :: class] = $data;
            
            return $this;

        }

        public function alert($msg, $type = 'error', $exit = TRUE)
        {

            $controller = $this :: class;

            Main :: $obj -> loger() -> write($type, $this :: class.": ".$msg);

            $this -> cout($msg, TRUE);

            if ($exit) exit();

        }

	}
	
?>
