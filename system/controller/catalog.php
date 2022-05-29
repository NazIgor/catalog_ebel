<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 25.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Catalog extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $action = $data -> action ? $data -> action : 'catch_block';
            if ($action == 'action') $data -> action = 'catch_block';
            $this -> $action($data);
        }

        private function catch_block($data)
        {
            $this -> alert('error query: '.serialize($data));
        }

        private function read($data)
        {
            if (@$data -> id)
            {
                $res = Main :: $obj -> db()
                                    -> read('sub_catalog')
                                    -> where('catalog='.$data -> id)
                                    -> execute();
            }
            else
            {
                $res = Main :: $obj -> db()
                                    -> read('catalogs')
                                    -> execute();
            }

            if (@$res['read'] === 'error') $this -> alert('catalog read error');
            
            $this -> cout($res);
        }

        private function write($data)
        {
            $query = (array)$data;
            unset($query['action']);
            unset($query['id']);

            if (@$data -> id)
            {
                $query['catalog'] = $data -> id;
                $table = 'sub_catalog';
            }
            else
            {
                $table = 'catalogs';
            }

            $res = Main :: $obj -> db()
                                -> write($table, $query)
                                -> execute();

            if (@$res['write'] === 'error') $this -> alert('data write error');

            $this -> read($data);
        }

        private function del($data)
        {
            if (empty($data -> id)) $this -> alert('id is empty');
            $id = $data -> id;
            if (empty($data -> target)) $this -> alert('target is empty');
            switch($data -> target)
            {
                case "cat":
                    Main :: $obj -> db()
                                 -> clear('sub_catalog')
                                 -> where('catalog='.$id)
                                 -> execute();
                    $res = Main :: $obj -> db()
                                        -> clear('catalogs')
                                        -> where($id)
                                        -> execute();

                    unset($data -> id);
                break;
                case "subCat":
                    $data -> id = @Main :: $obj -> db()
                                                -> read('sub_catalog')
                                                -> where($id)
                                                -> execute()[0]['catalog'];
                    $res = Main :: $obj -> db()
                                        -> clear('sub_catalog')
                                        -> where($id)
                                        -> execute();
                break;
                default:
                    $this -> alert('target error');
                break;
            }

            if (@$res['clear'] === 'error') $this -> alert('delete error');

            $this -> read($data);

        }
	}	
?>
