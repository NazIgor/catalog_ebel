<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class AddUI extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            /*$this -> cout(Main :: $obj -> db()
                                       -> write('local', $data)
                                       -> execute());*/
            $this -> add($data);

        }

        public function add($data)
        {
            if (empty($data)) return FALSE;

            $this -> cout($this -> ui() -> set((array)$data));
            
        }
	}	
?>
