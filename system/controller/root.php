<?php defined('DOCROOT') OR die('No direct script access.');
    /*
	#  project: "ebel"
	#  date: 24.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Root extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $action = $data -> action;
            if ($action == 'action') $this -> alert("error param action", "rooterror");
            $this -> $action($data -> data);
            
        }

        private function ctrl($param)
        {
            if ($param == '') $this -> alert('controller undefined');
            $arr = explode(' ', $param);
            $data = count($arr) > 2 ? implode(' ', array_slice($arr, 1)) : array();
            $ctrl = Main :: factory('controller', $arr[0]);
            if (!$ctrl) $this -> alert('controller undefined');
            try {
                $ctrl -> action($data);
            } catch(Exception $e) {
                $this -> alert($e -> getMessage());
            }
        }

    }

