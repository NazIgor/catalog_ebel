<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 23.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class SetLanguage extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            Main :: $obj -> language = $data -> language;
            if (Main :: $obj -> language == $data -> language) $this -> cout('ok');
        }
	}	
?>
