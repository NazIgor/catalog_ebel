<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class GetUI extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $ui = $this -> ui();
            
            $res = $ui -> get();

            $res['languages'] = $ui -> getLng();

            $res['language'] = Main :: $obj -> language ? 
                $ui -> getLng(Main :: $obj -> language) :
                $res['languages'][0];

            $this -> cout($res);

        }
	}	
?>
