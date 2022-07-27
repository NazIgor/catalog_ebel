import { useRef, useState, useEffect } from 'react';
import useConnectServer from '../../../services/connect/connect';
import deleteImg from '/OpenServer/domains/catalog/src/images/icons/delete.png';
import { Spinner } from '../../spinner/spinner';

import './adminCatalog.scss';

const AdminCatalog=({lang,langs})=>{
    let mainCatalog=useRef(),
        subCatalog=useRef();
    const [mainCatId, setMainCatId]=useState(null),
          [subCatId, setSubCatId]=useState(null),
          [activeAddCat, setActiveCat]=useState(null),
          [activeAddSubCat, setActiveSubCat]=useState(null),
          [mainCatList, setMainCatList]=useState([]),
          [subCatList, setSubCatList]=useState([]),
          [subTrigger, setSubTrigger]=useState(false);

    const {loading, error, postData}=useConnectServer();
    
    useEffect(()=>{
        loadCatalogs();
                // eslint-disable-next-line
    },[])

    const loadCatalogs=(id=null)=>{
        const request={
            action:'read',
        }
        if (id){
            request['id']=id;
            setSubTrigger(true);
        }
        postData({catalog:request})
                .then(data=>{
                    updateCatList(id, data.Catalog);
                })
                .catch(e=>console.log('error read catalogs, ', e));
    }
    const updateCatList=(id, data)=>{
        if (id){
            setSubCatList(data);
            setSubTrigger(false);
        } else {
            setMainCatList(data);
        }
    }    
    const addCats=(type,id)=>{        
        const request={langs:[]};
        request.action='write';
        langs.forEach(item => {
            let langDescr={};
            langDescr.id=item.id
            langDescr.value=document.querySelector(`input[data-target=${type}-${item.name}]`).value;
            request.langs.push(langDescr);
            document.querySelector(`input[data-target=${type}-${item.name}]`).value='';
        });
        if (id){
            request.id=id;
            setSubTrigger(true);
        }
        postData({catalog:request})
                .then(data=>{
                    updateCatList(id, data.Catalog);
                })
                .catch (e=>{
                    console.log('error add catalog: ', request, ' error: ', e);
                    alert ('Error add to catalog, details in the console');
                })
        
    }
    const onDeleteCat=(e, target)=>{
        const elem=e.target.parentElement.getAttribute(target),
              request={
                  action:'del',
                  target: target==='data-mainid'? 'cat': 'subCat',
                  id: elem
              };
        postData({catalog:request})
                .then(data=>{
                    updateCatList(target==="data-subid", data.Catalog);
                })
                .catch(e=>{
                    console.log('error delete catalog: ', request, 'error: ', e);
                    alert ('Error delete, details in the console');
                });
        
    }
    const setMainCatalog=(e, catalogElement)=>{        
        if (e.target.getAttribute('data-subid')){
            setSubCatId(e.target.getAttribute('data-subid'));            
            // setMainCatId(e.target.getAttribute('data-mainid'));  
        }else {
                setSubCatId(null);
                setActiveSubCat(false);
                if (subCatalog.current) {subCatalog.current.classList.remove('active');}
                setMainCatId(e.target.getAttribute('data-mainid'));
                setSubCatList([]);
                loadCatalogs(e.target.getAttribute('data-mainid'));                
            }
                
        if (catalogElement.current){
            catalogElement.current.classList.remove('active');
        }
        catalogElement.current=e.target;
        catalogElement.current.classList.add('active');
    }
    const returnInputsName=(typeCatalog)=>{
        const res=langs.map((item,i)=>{
            return(
                <input type="text" className='addCat-input' data-lang={item.name} data-target={`${typeCatalog}-${item.name}`} placeholder={item.fullName} key={`${typeCatalog}-${item.name} ${i}`} />
            )
        })
        return res;
    }
    const changeActive=(type)=>{
        if (type==='main'){
            setActiveCat(activeAddCat=>!activeAddCat);
        }else{
            setActiveSubCat(activeAddSubCat=>!activeAddSubCat);
        }
    }

    const clasForSub=mainCatId? "addCat right ":"addCat right hide",
          clasForMain=activeAddCat? "add-area ":"add-area hide",
          clasForAddSub=activeAddSubCat && mainCatId? "add-area ":"add-area hide";

    const getMainList=(type)=>{
        const res=mainCatList.map(item=>{
            return (
                <li key={`${type}${item.id}`}>
                    <div className="item"  data-mainid={item.id}>{item[lang.name]} <img src={deleteImg} alt="delete" onClick={e=>onDeleteCat(e,'data-mainid')} /></div>
                </li>
            )
        })
        return res;
    }
    const getSubList=()=>{        
        const res=subCatList.map(item=>{
            return (
                <li className="items-elem" key={`sub${item.id}`}>
                    <div className="item" data-subid={item.id}>{item[lang.name]} <img src={deleteImg} alt="delete" onClick={e=>onDeleteCat(e,'data-subid')}/></div>
                </li>
            )
        })
        return res;
    }

    return(
        <div className="admin-catalog">
            <h4>Настройка каталога</h4>
            <div className="admin-catalog-data">
                <div className="admin-catalog-data_right">
                    <h4>Основной каталог:</h4>
                    <ul className="items" onClick={e=>{setMainCatalog(e, mainCatalog)}}>
                        {loading && !subTrigger ?<Spinner/>:getMainList('main')}
                    </ul>
                    <div className="addCat left">
                        <button className='addCat-btn'onClick={()=>changeActive('main')}>Add Catalog</button>
                        <div className={clasForMain}>
                            {returnInputsName('mainCatalog')}
                            <button className='addCat-btn'onClick={()=>addCats('mainCatalog', null)} >Ok</button>
                        </div>
                    </div>
                </div>
                <div className="admin-catalog-data_left">
                    <h4>Подкаталоги:</h4>
                    <ul className="items" onClick={e=>{setMainCatalog(e, subCatalog)}}>
                        {subTrigger? <Spinner/> : getSubList()}
                    </ul>
                    <div className={clasForSub}>
                        <button className='addCat-btn' onClick={()=>changeActive('sub')}>Add subCatalog</button>
                        <div className={clasForAddSub}>
                            {returnInputsName('subCatalog')}
                            <button className='addCat-btn' onClick={()=>addCats('subCatalog', mainCatId)}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCatalog;