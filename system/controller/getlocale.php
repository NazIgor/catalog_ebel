<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Getlocale extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $this -> cout(Main :: $obj -> db()
                                       -> read('locale')
                                       -> execute());
        }
	}	
?>
