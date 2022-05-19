<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "autosalon"
	#  file: testData.php
	#  date: 07.02.2022
	#  author: Medvedev Alexandr
	#
	*/
	
	class SecondTest extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $this -> cout($data);
        }
	}	
?>
