<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: root.php
	#  date: 06.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Root extends Page
	{

        public function content()
        {
            $this -> head();
            ?>
                <script type="text/javascript" src="/js/test.js"></script>
                <script type="text/javascript" src="/js/listeners.js"></script>
                <button onclick="testEvent()">SEND</button>
            <?php
            $this -> close_tag();
        }

	}	
?>
