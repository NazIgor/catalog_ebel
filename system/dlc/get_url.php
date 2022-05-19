<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  site: "kavaca"
	#  file: get_url.php
	#  date: 02.05.2020
	#  autor: Medvedev Alexandr
	#
	*/
	
	class Get_url
	{
		
		
		public static function init()
		{
			
            $url = explode('/', ltrim(Main :: $obj -> sanitize($_SERVER['REQUEST_URI']), '/'));

            if (count($url) == 1 AND $url[0] == '') $url = [];

            return $url;
			
		}
		
		
	}
	
	
?>
