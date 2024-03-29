<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 22.05.2022
	#  author: Medvedev Alexandr
	*/
	
	class Catalogs
	{

		public static function init()
		{
			$obj = Main :: $obj -> cache() -> get(__CLASS__);
            return $obj;
		}

        public function get_catalog($id)
        {
            if (is_object($id)) $id = FALSE;
            $sql = "SELECT c.id_cat, c.image_cat, c.sort_cat, l.id_locale, l.language, l.value
                FROM `catalogs` c 
                RIGHT JOIN `locale` l ON c.id_cat = l.target_id 
                WHERE l.target_table = 'catalogs'";

            if ($id) $sql .= " AND c.id_cat = " . $id;

            return Main :: $obj -> db() -> sql($sql);

        }

        public function get_sub_catalog($id)
        {
            if (is_object($id)) $id = FALSE;
            $sql = "SELECT c.id_subcat, c.image_subcat, c.catalog, c.sort_subcat, l.id_locale, l.language, l.value 
                FROM `sub_catalog` c 
                RIGHT JOIN `locale` l ON c.id_subcat = l.target_id 
                WHERE l.target_table = 'sub_catalog'";

            if ($id) $sql .= " AND c.id_subcat = " . $id;

            return Main :: $obj -> db() -> sql($sql);
        }

        public function add_catalog($data)
        {
            $sql = "";
            return Main :: $obj -> db() -> sql($sql);
        }

	}	
?>
