import AdminProductsList from "./adminProductsList";


import './adminProducts.scss';


const AdminProducts=({lang})=>{
    const data=[
        {id:1,
        name:{
            en:'Chair',
            ru:'Стул',
            kz:'Корпе'
            },
        set:2,
        imgs:['/images/temp/temp.jpg', 'src/images/temp/temp2.jpg'],
        descr:{
            en:'Cool chair',
            ru: 'Хороший деревянный стул',
            kz: 'Жаксы екен корпе'
            },
        price: 200
        },
        {id:2,
            name:{
                en:'Table',
                ru:'Стoл',
                kz:'Корпе2'
                },
            set:2,
            imgs:['src/images/temp/temp.jpg', 'src/images/temp/temp2.jpg'],
            descr:{
                en:'Cool table',
                ru: 'Хороший деревянный стoл',
                kz: 'Жаксы екен корпе'
            },
            price: 3500
        }
    ]
    return (
        <div className="admin-container">
            <div className="products">
                <h3>Список товаров:</h3>
                <div className="items">
                    <ul>
                        <AdminProductsList lang={lang} data={data}/>
                    </ul>
            </div>
        </div>
        </div>
    )
}

export default AdminProducts;