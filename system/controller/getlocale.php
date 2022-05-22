<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Getlocale extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $loc = Main :: $obj -> db()
                                -> read('locale')
                                -> execute();

            $res = Array();

            $res['languages'] = Array();

            $flag = TRUE;

            foreach ($loc as $el)
            {
                $res[$el['name']] = $el;
                unset($res[$el['name']]['id']);
                unset($res[$el['name']]['name']);
                if ($flag)
                {
                    foreach($res[$el['name']] as $key => $value)
                    {
                        $res['languages'][] = $key;
                    }
                    $flag = FALSE;
                }
            }

            $this -> cout($res);

        }
	}	
?>
