<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: cache.php
	#  date: 02.05.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Cache
	{
		
		private static $objects = array();
		
		
		public static function init()
		{
			
			return self :: get(__CLASS__);
			
		}
		
		public static function get($class)
		{
		
			if(isset(self :: $objects[$class]) and self :: $objects[$class] instanceof $class)
			{
				
				return self :: $objects[$class];
				
			}
			else
			{
				
				$obj = new $class;
				self :: $objects[$class] =  $obj;
				return $obj;
				
			}
		
		}
		
	}
	
	
?>
