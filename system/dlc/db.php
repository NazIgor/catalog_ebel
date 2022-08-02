<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class db
	{
		
		
		private $db;
		private $query_string;
        private $method;
        private $data;
        private $table;
		
		
		public static function init()
		{
	
            $obj = Main :: $obj
            -> cache()
            -> get(__CLASS__);

			$obj -> db = empty($obj -> db) ? $obj -> db : new mysqli('localhost',  'ebel',  'ebel', 'ebel');

            if ($obj -> db -> connect_error)
            {
                Main :: $obj -> loger() -> write("error", "Error connect db");
                die ('Error connect db');
            }
		    
			return $obj;
		
		}

        
        public function read($table)//______________________________READ_____________________________________
        {
           
            $this -> query_string = "SELECT * FROM `".$table."`";
            $this -> method = "read";
		    
			return $this;

        }

        
        public function where($to = FALSE)//____________________________WHERE______________________________
		{
        
            if ($to === FALSE OR $to === NULL) return $this;

            $to_arr = array();
            $str = '';
            
            if (is_numeric($to))
            {
                $to_arr[0] = "id";
                $to_arr[1] = $to;
                $str = 'id='.$to;
            }
            elseif (is_string($to))
            {
                if (strpos($to, '=') === FALSE) return $this;
                $to_arr = @explode("=", $to);
                $str = $to;
            }

            if ($this -> method == "write") $this -> query_string = $this -> query_update();

            /*$this -> query_string = isset($to_arr[1]) ?
                $this -> query_string." WHERE `".$to_arr[0]."` = '".$to_arr[1]."'" :
                "";*/
            $this -> query_string .= ' WHERE '.$str;
			
			return $this;
			
		}

        public function order($by, $desc = FALSE)
        {

            $desc = $desc ? "DESC" : "ASC";

            $this -> query_string .= " ORDER BY `".$by."` ".$desc;

            return $this;

        }

        public function clear($table)//______________________________________CLEAR___________________________
        {
            $this -> query_string = "DELETE FROM `".$table."` ";
            $this -> method = "clear";
            return $this;
        }

        public function write($table, $data)//______________________WRITE_________________
        {

            if (empty($data) OR empty($table)) return $this;
            $data = is_array($data) ? $data : (array)$data;

            if (isset($data['adding'])) unset($data['adding']);

            foreach($data as $key => $value)
            {
                //$value = preg_replace("/(`|\\\\|\/|\{|\}|\[|\]|%)+/", '', $value);

                foreach(array('"', '\'', ')', '(') as $char)
                {
                    $value = str_replace($char, '\\'.$char, $value);
                }
                $data[$key] = $value;
            }

            $data = (object)$data;

            $this -> data = $data;
            $this -> table = $table;

            $this -> query_string = $this -> query_insert();
            $this -> method = "write";
            return $this;

        }

        private function query_update()
        {
            
            if (!$this -> data) return FALSE;

            $string = "UPDATE `".$this -> table."` SET";

            foreach ($this -> data as $key => $value)
            {
                $string .= " `".$key."` = '".$value."',";
            }

            return substr($string, 0, -1);

        }

        private function query_insert()
        {
            
            $keys = ""; $values = "";

            $col_arr = $this 
                -> describe($this -> table)
                -> execute();

            if (@$col_arr["describe"] == "error") { return $col_arr; };

            foreach ($col_arr as $value)
            {
                if ($value["Field"] == "id")
                {
                    $keys .= "`id`,";
                    $values .= "NULL,";
                }
                else
                {
                    $field = $value['Field'];
                    $default_value = "''";
                    if (stripos($value["Type"], "int") !== FALSE)
                    {
                        $default_value = 0;
                        if (isset($this -> data -> $field)) $this -> data -> $field = intval($this -> data -> $field);
                    }
                    if (stripos($value["Type"], 'float') !== FALSE OR stripos($value["Type"], 'double') !== FALSE)
                    {
                        $default_value = 0;
                        if (isset($this -> data -> $field)) $this -> data -> $field = round($this -> data -> $field, 4);
                    }
                    
                    $keys .= "`".$field."`,";
                    
                    $values .= isset($this -> data -> $field) ? "'".($this -> data -> $field)."'," : $default_value.",";
                }
            }

            $keys = substr($keys, 0, -1); $values = substr($values, 0, -1);

            return "INSERT INTO `".$this -> table."` (".$keys.") VALUES (".$values.")";

        }

        public function describe($table)
        {
            $this -> query_string = "DESCRIBE `".$table."`";
            $this -> method = "discribe";
            return $this;
        }
	    
        public function sql($query)
        {
            $this -> query_string = $query;
            return $this -> execute();
        }
		
		public function execute()//___________________________________EXECUTE_____________________________
		{
			$arr_result = array();

            //var_dump($this -> query_string);

            if ($this -> method == "clear" OR $this -> method == "write")
            {
                Main :: $obj -> loger() -> write("mysql", $this -> query_string);
            }

			$result = @$this -> db -> query($this -> query_string);
            $method = $this -> method;
            $id = @$this -> db -> insert_id;
            
            if (is_bool($result) and $result == FALSE) Main :: $obj -> loger() -> write("error", "error db method: ".$method);
            if (is_bool($result)) return $result ? array($method=>$id) : array($method=>"error");
			
            if (!$result)
             {
                 Main :: $obj -> loger() -> write("error", "SQL error table name");
                 return array('error' => 'Error table name');
             }

            while ($row = $result -> fetch_assoc())
            {
                $arr_result[] = $row;
            }

            $this -> query_string = '';

            return $arr_result;
						
		}
		
		
	}
	
	


?>
