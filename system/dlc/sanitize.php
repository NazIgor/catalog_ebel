<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  site: "kavaca"
	#  file: sanitize.php
	#  date: 02.05.2020
	#  autor: Medvedev Alexandr
	#
	*/
	
	class Sanitize
	{
		
		public static function init($string)
		{
            $string = is_array($string) ? $string[0] : $string;

			$filter = '/\bcout\b|\bdrop\b|\bselect\b|\bupdate\b|\bdelete\b|\bdie\b|\bexit\b|\bsystem\b|\bfopen\b|\binclude\b|\bvirtual\b|\brequire\b|\bvar_dump\b|\bprint\b|\becho\b|\bphpinfo\b|\bprint_r\b|\brequire_once\b|\binclude_once\b/is';
			
			$string = preg_replace('/(\.+)/s', '.', $string);
			$string = preg_replace('/({\.\/}+)/s', '/', $string);
			$string = preg_replace('/(\.php)+/i', '', $string);
			$string = preg_replace($filter, '', $string);

            			
			return $string;
			
		}
		
	}
	
?>
