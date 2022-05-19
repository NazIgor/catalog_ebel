<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: dirc.php
	#  date: 28.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	
	class Dirc
	{
		
		private $mydir;
		private $valdir = array();
		
		public static function init()
		{
			
			return new self();
			
		}
		
		public function open($path)
		{
			
			if(is_dir($path))
			{
				
				$this -> mydir = opendir($path);
				
			}
			else
			{
				
				$this -> create($path);
				
			}
			
			return $this;
			
		}
		
		public function create($name, $perms = FALSE)
		{
			
			$perms = $perms ? $perms : 0777; 
			$this -> mydir = mkdir($name, $perms) ? opendir($name) : FALSE;
			return $this;
			
		}
		
		public static function deldir($path)
		{
			
			@chmod($path, 0777);
			@rmdir($path);
			
		}
		
		public function read($elimination = FALSE)
		{
			
			if(!$elimination) $elimination = array('.','..');
			
			while($d = readdir($this -> mydir))
			{
				
				if(array_search($d, $elimination) === FALSE) $this -> valdir[] = $d;
				
			}
			return $this;
			
		}
		
		public function execute()
		{
			
			@closedir($this -> mydir);
			return $this -> valdir;
			
		}
		
		
		
	}
	
	
?>
