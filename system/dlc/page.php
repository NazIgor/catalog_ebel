<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "ebel"
	#  file: page.php
	#  date: 07.02.2022
	#  author: Medvedev Alexandr
	#
	*/
	
	class Page extends Controller
	{
		
		public static function init()
		{
            return new static;
		}

        public function action($path)
        {
            $page = Main :: factory('page', $path);

            if (!$page)
            {
                $page = Main :: factory('page', 'base');
            }

            $page -> content();

        }

        protected function head()
        {
?>
<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <title>Catalog</title>
            <?php Main :: $obj -> autolink('css'); ?>
        </head>
        <body>
<?php
            return $this;
        }

        public function close_tag()
        {
            if ($this :: class == "Page") return;
?>

        </body>
    </html>
<?php
        }

	}
	
?>
