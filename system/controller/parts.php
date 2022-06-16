<?php defined('DOCROOT') OR die('No direct script access.');
	/*
	#  project: "ebel"
	#  date: 03.06.2022
	#  author: Medvedev Alexandr
	*/
	
	class Parts extends Controller
	{

		public static function init()
		{
			return new self;
		}

        public function action($data)
        {
            $data = (array)$data;
            $product = [];
            $product['price']    = empty($data['price']) ? 0 : $data['price'];
            $product['discount'] = empty($data['discount']) ? 0 : $data['discount'];
            $product['quantity'] = empty($data['quantity']) ? 0 : $data['quantity'];
            $product['sort']     = empty($data['sort']) ? 0 : $data['sort'];
            
            $product_id = Main :: $obj -> db()
                                       -> write('products', $product)
                                       -> execute();

            if ($product_id['write'] === 'error') $this -> alert('error write product');
            $this -> cout(['id' => $product_id['write']]);
        }
	}	
?>
