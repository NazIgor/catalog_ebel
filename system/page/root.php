<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 24.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Root extends Page
	{

        public function content()
        {
            $this -> head();
            ?>
                <link rel="stylesheet" href="/system/root/root.css">
                <script src="/system/root/root.js"></script>
            <?php
            $this -> close_tag();
        }

	}	
?>
