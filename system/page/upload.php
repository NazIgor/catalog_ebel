<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#
	#  project: "salon"
	#  file: base.php
	#  date: 06.12.2020
	#  author: Medvedev Alexandr
	#
	*/
	
	class Upload extends Page
	{

        /*public function content()
        {
            $mtd = Main :: $obj -> url[0];
            $this -> $mtd();
        }*/
        
        public function content()
        {
            $id    = Main :: $obj -> url[1];
            $files = Main :: $obj -> files;
            $msg   = [];
            $dir   = 'images/product_'.$id.'/';
            $path  = DOCROOT.DIRECTORY_SEPARATOR.$dir;

            @Main :: $obj -> dirc() -> open($path);
            
            foreach($files as $file)
            {
                $arr_name = explode('.', $file['name']);
                $pf = '.'.$arr_name[count($arr_name) -1];
                $name = implode('.', array_slice($arr_name, 0, count($arr_name) - 1)).'_'.time().$pf;
                if ($file['error'] === 0)
                {
                    if (move_uploaded_file($file['tmp_name'], $path.$name))
                    {
                        $url = $dir.$name;
                        $data = [
                            'product' => $id,
                            'img' => $url
                        ];
                        if (Main :: $obj -> db()
                                     -> write('product_images', $data)
                                     -> execute()['write'] !== 'error')
                        {
                            $msg += [$file['name'] => 1];
                        }
                        else
                        {
                            $msg += [$file['name'] => 0];
                        }

                    }
                }
                else
                {
                    $msg += [$file['name'] => 0];
                }
            }

            $this -> cout($msg);

        }

	}	
?>
