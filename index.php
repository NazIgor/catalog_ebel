<?php
	/*
	#
	#  project:  autosalon
	#  file:     index.php
	#  date:     23.01.2022
	#  author:   Medvedev Alexandr
	#
	*/
	
//define('DOCROOT', substr(realpath(dirname(__FILE__)), 0, strrpos(realpath(dirname(__FILE__)), DIRECTORY_SEPARATOR)));
define('DOCROOT', realpath(dirname(__FILE__)));
	
	class Main
	{
		
		private $prop = array(); // свойства объекта MAIN
		public static $obj;      // объект MAIN
        public $buffer = array();// буфер

		public function __construct()// конструктор
		{
            
		    $this -> syspath = DOCROOT.DIRECTORY_SEPARATOR.'system'.DIRECTORY_SEPARATOR;
            $this -> tmppath = DOCROOT.DIRECTORY_SEPARATOR.'tmp'.DIRECTORY_SEPARATOR;
            $this -> build   = DOCROOT.DIRECTORY_SEPARATOR."build".DIRECTORY_SEPARATOR."static".DIRECTORY_SEPARATOR;
            $this -> css     = $this -> build."css".DIRECTORY_SEPARATOR;
            $this -> js      = $this -> build."js".DIRECTORY_SEPARATOR;
            $this -> logpath = $this -> syspath."logdir".DIRECTORY_SEPARATOR;
            $this -> agent   = $_SERVER['HTTP_USER_AGENT'];
            $this -> ip      = $_SERVER['REMOTE_ADDR'];		
            
		}
		
		public static function init()// Инициализация main
		{
        
            session_start();
			
            if(@$_SESSION['main'])// Если объект main содержится в сессии
			{
				
				self :: $obj = $_SESSION['main'];// извлекаем его в переменную $obj

                if (self :: $obj -> agent !== $_SERVER['HTTP_USER_AGENT'] AND
                    self :: $obj -> ip    !== $_SERVER['REMOTE_ADDR'])
                {
                    self :: $obj -> flag    = TRUE;
                    exit();
                }
				
			}
			else// Если объект main не содержится в сессии
			{
				self :: $obj = new Main;// создаём объект main
			}

			self :: $obj -> url   = self :: $obj -> get_url(); // получение url
			self :: $obj -> data  = self :: $obj -> get_data(); // извлечение данных
            self :: $obj -> files = self :: $obj -> get_files(); //извлечение файлов
		    
            self :: clear_glob();// удаление глобальных переменных

			self :: factory('dlc', 'controller');// запуск основного контроллера
			
		}
		
		


		public function __get($name)// авто. вызываемый метод при обращении к несуществующему свойству
		{
			if(isset($this -> prop[$name]))
			{
				return $this -> prop[$name];
			}
			
			return NULL;
		}
		
		


		public function __set($name, $value)// авто. вызываемый метод при передачи значения несуществующему свойству
		{
			$this -> prop[$name] = $value;	
		}
		
		


		public function __call($func, $args)// авто. вызываемый метод при обращении к несуществующему методу
		{
			return self :: classload('dlc', $func) ? $func :: init($args) : FALSE;
		}
		



		public static function classload($type, $class_name)// функция загрузки классов
		{
			$path = (self :: $obj -> syspath).$type.DIRECTORY_SEPARATOR;

			if(is_file($path.$class_name.'.php'))
			{
				if(!class_exists($class_name)) require_once($path.$class_name.'.php');
			}
			
            return class_exists($class_name);
			
		}
		



		public static function factory($type, $name)
		{
			
			return main :: classload($type, $name) ? $name :: init() : FALSE;
			
		}
		



		private static function  clear_glob()// удаление всех глобальных переменных и переменных окружения
		{
            foreach ($GLOBALS as $key => $value)
                $GLOBALS[$key] = [];
		}
		



		public function __destruct()// деструктор
		{
			
            print count($this -> buffer) > 0 ? json_encode($this -> buffer) : '';
            $this -> buffer = [];
			
            if(!empty($_SESSION)) self :: clear_glob();
			
            if (isset($this -> data)) unset($this -> data);
            if (isset($this -> url))  unset($this -> url);

		    if(!Main :: $obj -> flag) @$_SESSION['main'] = $this;
			
		}
		
	}

	Main :: init();// Инициализация
	
?>
