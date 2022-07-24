import { useState, useRef } from "react";
import UploadImages from "../../uploadImages/uploadImages";
import useConnectServer from "../../../services/connect/connect";
import { Spinner } from "../../spinner/spinner";
import CatalogList from "../catalogList/catalogList";
import SetsList from "./setsList";


import './productAdd.scss';

const catalogs=[
    {
        name:'1',
        id:1,
        items:[
            {
                id:1,
                name:'1-1'
            },
            {
                id:2,
                name:'1-2'
            },
            {
                id:3,
                name:'1-3'
            }
        ]
    },    
    {
        name:'2',
        id:2,
        items:[
            {
                id:4,
                name:'2-1'
            },
            {
                id:5,
                name:'2-2'
            },
            {
                id:6,
                name:'2-3'
            }
        ]
    }
],
      sets=[
        {
            id:1,
            name:'кухня'
        },
        {
            id:2,
            name:'Спальня'
        },
        {
            id:3,
            name:'Прихожая'
        },
        {
            id:4,
            name:'Гостинная'
        },
      ]
const ProductAdd=({langs})=>{
    const [areaClass, setAreaClass]=useState(false),
          [files, setFiles]=useState(null),
          nameInput=useRef([]),
          descrInput=useRef([]),
          {postData, clearError, postFiles, loading, error}=useConnectServer();

    const listLangsName=(type)=>{
        if (type==='names'){
            nameInput.current=[];
        } else{ descrInput.current=[];}
        const res=langs.map(item=>{            
            const Elem=()=>{ 
                const [value, setValue]=useState('');
                const onInput=(e)=>{
                    setValue(e.target.value);
                }
                const setInputList=(input)=>{
                    if (input){
                        if (type==='names'){
                            nameInput.current.push(input)
                        } else{
                            descrInput.current.push(input);
                        }
                        
                    }
                }
                return (
                    type==='names'? 
                    <input  type="text" 
                            key={`input${item}`} 
                            placeholder={item} 
                            data-name={item} 
                            value={value} 
                            onChange={onInput} 
                            ref={(input)=>setInputList(input)}/> :
                    <textarea name={`descr-${item}`} 
                              key={`txtArea${item}`} 
                              placeholder={item} 
                              data-name={item} 
                              value={value} 
                              cols="30" rows="10"
                              className="descr-txtArea"
                              onChange={onInput} 
                              ref={(input)=>setInputList(input)}>
                    </textarea>
                    // id={`descr-${item}`}
                    )       
                }
            return Elem();
        });
        return res;
    }
    const showAddArea=areaClass?'add-area':'add-area add-area_hide';
    const test=new FormData();
    const names={}, descr={};
    const submitForm=()=>{
        nameInput.current.forEach(item=>{
            names[item.getAttribute('data-name')]= item.getAttribute('value');
        })
        descrInput.current.forEach(item=>{
            descr[item.getAttribute('data-name')]= item.textContent;
        })
        files.forEach((item,i)=>{ 
            test.append(`product_img${i}`, item);
        })
        clearError();
        
        const checksSets= getCheckSets(document.querySelector('.admin_add_sets_list').getElementsByTagName('input'));

        const checksCats=getCheckCats(document.querySelector('.admin_add_catalogs').querySelectorAll('.cats_items'));
        
        console.log(checksCats, checksSets);


        // postData({parts:{data:{
        //     name:{...names},
        //     descr:{...descr},
        //     set:[...checksSets.sets],
        //     cat:[...checksCats.cats],
        //     subCat:[...checksCats.subCat]
        // }}})
        //     .then(data=>{
        //         console.log(data);
        //         console.log(files.length);
        //         const id=1;
        //         if(files.length){
        //             postFiles(test,`http://ebel.lc/upload/${id}`)
        //                     .then(data=>{console.log(data)})
        //                     .catch(e=>console.log(`error request in add files: ${e}`));
        //         }
                
        //     })
        //     .catch(e=>console.log(`error request in add information: ${e}`))

    }
    const getFiles=(files, formData)=>{        
        setFiles(files);
    }
    const ShowLoad=()=>{
        return(
            <div className="show-spiner">
                <Spinner/>
            </div>
        )
    }
    const catalogList=!catalogs?null:catalogs.map(item=>{
        return (
            <li key={`add_cats-${item.id}`}>
               <div className="cats_items">
               <CatalogList data={item}/>
               </div>
            </li>
        )
    })
    return(
        <div className="product_add">
            <div className="label" onClick={()=>setAreaClass(areaClass=>!areaClass)}>------Добавить------</div>
            <div className="container">
                <div className={showAddArea}>
                    {loading && !error ? <ShowLoad/> : null}
                    <div className="des">Заполните все поля ниже:</div> 
                    <div className="names">Введите название:</div>                   
                        {listLangsName('names')}
                    <div className="names">Введите описание:</div>
                        {listLangsName('txtArea')}
                    <div className="names">Укажите каталоги и подкаталоги</div>
                        <ul className="admin_add_catalogs">
                           {catalogList} 
                        </ul>
                    <div className="names">Укажите в какие коллекции входит товар:</div>
                        <ul className="admin_add_sets">
                            <SetsList data={sets}/>
                        </ul>
                        <UploadImages getFiles={(files, formData)=>getFiles(files, formData)}/>
                    <button onClick={submitForm}>Отправить</button>                    
                </div>
            </div>
        </div>
    )
}

function getCheckCats(catsFind){
    const checks={cats:[], subCats:[]};
    catsFind.forEach(item=>{
        
        const elems=item.getElementsByTagName('ul');
        if (item.querySelector("input[who='cats']").checked){
            checks.cats.push(item.querySelector("input[who='cats']").getAttribute('catid'));
            for (let i=0; i<elems[0].children.length; i++){
                const elem=elems[0].children[i].querySelector('input');
                if (elem.checked){
                    checks.subCats.push(elem.getAttribute('subcatsid'));
                }
            }
        }
    })
    return checks;
}
function getCheckSets(sets){
    const checks={sets:[]};
    for (let i=0;i<sets.length;i++){
        if (sets[i].checked){
            checks.sets.push(sets[i].getAttribute('setiD'))
        }
    }
    return checks;
}

export default ProductAdd;