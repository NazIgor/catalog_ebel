<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: loger.php
	#  date: 27.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	
	class Loger
	{
		
		public static function init()
		{
			
			return Main :: $obj
				-> cache()
				-> get(__CLASS__);
			
		}
		
		public function write($type, $string)
		{
			
			$dir_date = date('m_Y', time());
			$date = date('d_m_Y', time());
			$time = date('H:i:s', time());
			
			$log_string = $time.' '.$this -> prefix().' '.$string."\n";
			
			Main :: $obj -> dirc()
				-> open(Main :: $obj -> logpath.$dir_date)
				-> execute();
				
			$log_file = Main :: $obj -> filec(Main :: $obj -> logpath.$dir_date.DIRECTORY_SEPARATOR.$type.'_'.$date.'.log')
				-> write($log_string)
				-> execute();
            
            if (!is_array(Main :: $obj -> buffer_log)) Main :: $obj -> buffer_log = array();

            $buffer_log = Main :: $obj -> buffer_log;

            $buffer_log[] = $time . "_" . $string;

            if (count($buffer_log) > 5)
            {
                foreach ($buffer_log as $key => $value)
                {
                    if ($key > 0 AND $key < 6) $buffer_log[$key - 1] = $value;
                    if ($key > 4) unset($buffer_log[$key]); 
                }
            }

            Main :: $obj -> buffer_log = array_values($buffer_log);

            $bufferLog = implode("\n#__",$buffer_log);

            if ($type == "error" OR $type == "rooterror" OR $type == "serverror" OR $type == "warning")
            {
                $query = json_encode(Main :: $obj -> post);
                
                $text = 'autoclub' . "\n"
                    . $type . "\n"
                    . date('d.m.Y', time()) . "\n"
                    . $time . "\n"
                    . $this -> prefix() . "\n"
                    . $string . "\n\nQuery:\n"
                    . $query . "\n\nBuffer log:\n#__"
                    . $bufferLog;

                $botApiToken = '1944305696:AAFaZI_dZuDFaZyL-0i5TBPxOUvQFpvupb0';

                $data = [
                    'chat_id' => '-1001562852966',
                    'text' => $text
                ];

                $toTelegram = "https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data);
                
                /*if (!Main :: $obj -> filec(Main :: $obj -> tmppath.'telega')
                    -> write($toTelegram, 'w')
                    -> execute()) Main :: $obj
                        -> filec(Main :: $obj -> logpath.$dir_date.DIRECTORY_SEPARATOR.'logerror_'.$date.'.log')
                        -> write($time."_write string for telegram\n")
                        -> execute();*/

                //exec("php -f".DOCROOT.DIRECTORY_SEPARATOR."tgbot.php>/dev/null &");               
                //file_get_contents("https://api.telegram.org/bot{$botApiToken}/sendMessage?" . http_build_query($data));
            }

            return $log_file;
			
		}
		
		private function prefix()
		{
			
			$string = 'ip: '.Main :: $obj -> ip;
			$string .= ' | uid: '.@Main :: $obj -> uid;

			return $string;
			
		}
		
	}
	
	
?>
