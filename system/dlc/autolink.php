<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  site: "ebel"
	#  date: 19.05.2022
	#  author: Medvedev Alexandr
	*/
	
	
	class Autolink
	{
		public static function init($type)
		{
			$list_file = Main :: $obj -> dirc()
                                      -> open(Main :: $obj -> {$type[0]})
                                      -> read()
                                      -> execute();
            foreach($list_file as $path)
            {
                switch($type[0])
                {
                    case "css":
                        echo '<link href="build/static/css/'.$path.'" rel="stylesheet">';
                    break;
                    case "js":
                        echo '<script src="build/static/js/'.$path.'" crossorigin></script>';
                    break;
                }
            }
		}
	}
	
	
?>
