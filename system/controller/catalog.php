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

        private function read($id = FALSE)
        {

            $catalogs = $this->catalogs()->get_catalog($id);
            $sub_catalogs = $this->catalogs()->get_sub_catalog($id);
            
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
            $data = (array)$data;

            if (empty($data)) {
                $this->alert('error data');
            }
            unset($data['action']);

            $query_add_catalog = [];

            if (empty($data['id']))
            {
                $table = 'catalogs';
                if (empty($data['image_cat'])) $data['image_cat'] = '';
                if (empty($data['sort_cat'])) $data['sort_cat'] = 1000;

                $query_add_catalog = [
                    'image_cat' => $data['image_cat'],
                    'sort_cat'  => $data['sort_cat']
                ];
            }
            else
            {
                $table = 'sub_catalog';
                if (empty($data['image_subcat'])) $data['image_subcat'] = '';
                if (empty($data['sort_surcat'])) $data['sort_subcat'] = 1000;

                $query_add_catalog = [
                    'image_subcat' => $data['image_subcat'],
                    'sort_subcat'  => $data['sort_subcat'],
                    'catalog'      => $data['id']
                ];
            }

            $id_catalog = Main :: $obj -> db()
                                       -> write($table, $query_add_catalog)
                                       -> execute()['write'];

            if ($id_catalog === 'error') $this->alert('error add catalog');

            foreach($data['langs'] as $lng)
            {
                $lng = (array)$lng;
                $query_language = [
                    'target_id'    => $id_catalog,
                    'target_table' => $table,
                    'language'     => $lng['id'],
                    'value'        => $lng['value']
                ];
                
                if (Main :: $obj -> db()
                                 -> write('locale', $query_language)
                                 -> execute()['write'] !== 'error') $this->read($id_catalog);

            }

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
