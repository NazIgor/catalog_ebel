<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: base.php
	#  date: 06.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Base extends Page
	{

        public function content()
        {
            $this -> cout(Main :: $obj -> files);
        }

	}	
?>
