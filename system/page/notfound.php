<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "autosalon"
	#  file: notfound.php
	#  date: 07.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Notfound extends Page
	{

        public function content()
        {
            $this -> head();
            ?>
                <div>404 NOT FOUND PAGE</div>
            <?php
            $this -> close_tag();
        }

	}	
?>
