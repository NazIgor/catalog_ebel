<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: base.php
	#  date: 06.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Upload extends Page
	{

        public function content()
        {
            $obj = array();
            $obj['url'] = Main :: $obj -> url;
            $obj['files'] = Main :: $obj -> files;

            $this -> cout($obj);
        }

	}	
?>
