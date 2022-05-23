import { useRef } from 'react';
import deleteImg from '/OpenServer/domains/catalog/src/images/icons/delete.png';

import './adminCatalog.scss';

const AdminCatalog=()=>{
    let mainCatalog=useRef(),
        subCatalog=useRef();

    const setMainCatalog=(e, catalogElement)=>{
        console.log(e.target);
        if (catalogElement.current){
            catalogElement.current.classList.remove('active');
        }
        catalogElement.current=e.target;
        catalogElement.current.classList.add('active');
    }
    return(
        <div className="admin-catalog">
            <h4>Настройка каталога</h4>
            <div className="admin-catalog-data">
                <div className="admin-catalog-data_right">
                    <h4>Основной каталог:</h4>
                    <ul className="items" onClick={e=>{setMainCatalog(e, mainCatalog)}}>
                        <li>
                            <div className="item">Прихожая <img src={deleteImg} alt="delete" /></div>
                        </li>
                        <li>
                            <div className="item">Спальня <img src={deleteImg} alt="delete" /></div>
                        </li>
                        <li>
                            <div className="item">Детская <img src={deleteImg} alt="delete" /></div>
                        </li>
                        <li>
                            <div className="item">Соседская <img src={deleteImg} alt="delete" /></div>
                        </li>
                    </ul>
                    <div className="addCat right">
                        <input type="text" placeholder='Input Catalog' className='addCat-input'/>
                        <button className='addCat-btn'>Add Catalog</button>
                    </div>
                </div>
                <div className="admin-catalog-data_left">
                    <h4>Подкаталоги:</h4>
                    <ul className="items" onClick={e=>{setMainCatalog(e, subCatalog)}}>
                        <li className="items-elem">
                            <div className="item">Диван <img src={deleteImg} alt="delete" /></div>
                        </li>
                        <li className="items-elem">
                            <div className="item">Кровать <img src={deleteImg} alt="delete" /></div>
                        </li>
                        <li className="items-elem">
                            <div className="item">Тумбочка <img src={deleteImg} alt="delete" /></div>
                        </li>
                    </ul>
                    <div className="addCat left">
                        <input type="text" placeholder='Input Sub Catalog' className='addCat-input'/>
                        <button className='addCat-btn'>Add subCatalog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCatalog;