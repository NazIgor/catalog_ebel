<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  site: "autosalon"
	#  file: get_data.php
	#  date: 22.01.2022
	#  autor: Medvedev Alexandr
	#
	*/
	
	class Get_data
	{
		
		public static function init()
		{
            //return @json_decode(Main :: $obj -> sanitize(base64_decode(file_get_contents("php://input"))));
            return @json_decode(Main :: $obj -> sanitize(file_get_contents("php://input")));
		}
		
	}
	
?>
