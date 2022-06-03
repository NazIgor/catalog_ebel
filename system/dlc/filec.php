<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  site: "rums"
	#  file: filec.php
	#  date: 09.12.2013
	#  author: Medvedev Alexandr
	#
	*/
	
	
	class Filec
	{
		
		private $file;
		public $path;
		private $value;
        private $rtn;
		
		public static function init($path)
		{
			$obj = Main :: $obj
				-> cache()
				-> get(__CLASS__);
				
			$obj -> path = $path[0];
			return $obj;
			
		}
		
		public function write($string, $param = 'a')
		{
			
			if($this -> open($param))
			{
				
				$this -> rtn = fwrite($this -> file, $string);
				
			}
			
			return $this;
			
		}
		
		public function read($param = 'rb')
		{
			
			if($this -> open($param))
			{
				
				while(($bufer = fgets($this -> file)) !== FALSE)
				{
					
					$this -> value .= $bufer;
					
				}
				
			}
			
			return $this;
			
		}
		
		private function open($param)
		{
			
			$this -> file = fopen($this -> path, $param);
			return $this -> file ? TRUE : FALSE;
			
		}
		
		public function execute()
		{
			
			@fclose($this -> file);
            @chmod($this -> path, 0755);
			$this -> path = NULL;
			$value = $this -> value;
			$this -> value = NULL;
			if($value)
            {
                return $value;
            }else return $this -> rtn;
			
		}
		
	}
	
	
?>
