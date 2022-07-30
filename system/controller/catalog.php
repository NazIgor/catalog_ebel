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

        private function all()
        {
            $catalogs = $this->catalogs()->get_catalog();
            $sub_catalogs = $this->catalogs()->get_sub_catalog();
            
            $result = [];
            foreach($catalogs as $catalog)
            {
                if (empty($result[$catalog['id_cat']]))
                {
                    $result[$catalog['id_cat']] = [
                        'img'  => $catalog['image_cat'],
                        'sort' => $catalog['sort_cat'],
                        'lang' => [
                             0 => [
                                  'id'        => $catalog['language'],
                                  'id_locale' => $catalog['id_locale'],
                                  'value'     => $catalog['value']
                             ]
                        ],
                        'items' => []
                    ];
                }
                else
                {
                    $result[$catalog['id_cat']]['lang'][] = [
                        'id'        => $catalog['language'],
                        'id_locale' => $catalog['id_locale'],
                        'value'     => $catalog['value']
                    ];
                }
            }

            foreach($sub_catalogs as $sub_catalog)
            {
                if (!empty($result[$sub_catalog['catalog']]))
                {
                    if (empty($result[$sub_catalog['catalog']]['ites'][$sub_catalog['id_subcat']]))
                    {
                        $result[$sub_catalog['catalog']]['items'][$sub_catalog['id_subcat']] = [
                            'img'  => $sub_catalog['image_subcat'],
                            'sort' => $sub_catalog['sort_subcat'],
                            'lang' => [
                                 0 => [
                                     'id'        => $sub_catalog['language'],
                                     'id_locale' => $sub_catalog['id_locale'],
                                     'value'     => $sub_catalog['value']
                                 ]
                            ]
                        ];
                    }
                    else
                    {
                        $result[$sub_catalog['catalog']]['items'][$sub_catalog['idsubcat']]['lang'][] = [
                            'id'        => $sub_catalog['language'],
                            'id_locale' => $sub_catalog['id_locale'],
                            'value'     => $sub_catalog['value']
                        ];
                    }
                }
            }
            $this->cout($sub_catalogs);

            $this->cout($result);
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
