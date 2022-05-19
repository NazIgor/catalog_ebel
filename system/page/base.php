<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: base.php
	#  date: 06.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Base extends Page
	{

        public function content()
        {
            $this -> head();
            ?>
    <div id="root"></div>

    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
    <?php Main :: $obj -> autolink('js'); ?>
            <?php
            $this -> close_tag();
        }

	}	
?>
