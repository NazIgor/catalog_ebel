<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 03.06.2022
	#  author: Medvedev Alexandr
	*/
	
	class Parts extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            //$this -> cout($data);
            $obj = array();
            $obj['files'] = Main :: $obj -> files;
            $obj['data'] = $data;
            $this -> cout($obj);
        }
	}	
?>
