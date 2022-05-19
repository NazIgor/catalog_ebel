<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: headersend.php
	#  date: 05.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	
	class Headersend
	{
		
		private $headers = array();
		private $charset = ' charset=utf-8';
		
		
		public function init()
		{
			
			return Main :: $obj -> cache()
			-> get(__CLASS__);
			
		}
		
		
		public function mime_type($type)
		{
			
			$this -> headers[] = 'Content-Type: '.$type;
			return $this;
			
		}
		
		public function size($file)
		{
			
			$this -> headers[] = 'Content-Length: ' . filesize($file);
			return $this;
			
		}
		
		public function redirect($path)
		{
			
			$this -> headers = array();
			$this -> headers[] = 'Location: '.$path;
			$this -> execute();
			
		}
		
		public function no_cache()
		{
			
			$this -> headers[] = "Expires: Mon, 26 Jul 1997 05:00:00 GMT";
			$this -> headers[] = "Last-Modified: ".gmdate("D, d M Y H:i:s");
			$this -> headers[] = "Cache-Control: no-store, no-cache, must-revalidate";
			$this -> headers[] = '"Cache-Control: post-check=0, pre-check=0", FALSE';
			$this -> headers[] = "Pragma: no-cache";
				
				return $this;
		
		}
		
		public function charset($string)
		{
			
			$this -> charset = ' charset='.$string;
			return $this;
			
		}
		
		public function execute()
		{
			
			$uniq_header = count($this -> headers) > 0 ? array_unique($this -> headers) : FALSE;
			if(!headers_sent() and $uniq_header)
			{
				
				foreach($uniq_header as $string)
				{
					
					header($string);
					
				}
				
			}
			
		}
		
	}
	
	
?>
