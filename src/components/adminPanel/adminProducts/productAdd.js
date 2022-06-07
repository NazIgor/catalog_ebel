import { useState, useRef } from "react";
import UploadImages from "../../uploadImages/uploadImages";
import useConnectServer from "../../../services/connect/connect";
import { Spinner } from "../../spinner/spinner";


import './productAdd.scss';

const ProductAdd=({langs})=>{
    const [areaClass, setAreaClass]=useState(false),
          [files, setFiles]=useState(null),
          nameInput=useRef([]),
          {postData, clearError, postFiles, loading}=useConnectServer();

    const listLangsName=()=>{
        nameInput.current=[];
        const res=langs.map(item=>{            
            const Elem=()=>{ 
                const [value, setValue]=useState('');
                const onInput=(e)=>{
                    setValue(value=>e.target.value);
                }
                const setInputList=(input)=>{
                    if (input){
                        nameInput.current.push(input)
                    }
                }
                return (
                    <input  type="text" key={`input${item}`} placeholder={item} data-name={item} value={value} onChange={onInput} ref={(input)=>setInputList(input)}/>
                    )       
                }
            return Elem();
        });
        return res;
    }
    const showAddArea=areaClass?'add-area':'add-area add-area_hide';
    const test=new FormData();
    const names={};
    const submitForm=()=>{
        nameInput.current.forEach(item=>{
            names[item.getAttribute('data-name')]= item.getAttribute('value');
        })

        files.forEach((item,i)=>{ 
            test.append(`product_img${i}`, item);
        })
        clearError();
        postData({parts:{data:{
            name:{...names},
            descr:{
                en:'ssa',
                ru:'asda',
            },
            set:[],
            cat:[0],
            subCat:[0]
        }}})
            .then(data=>{
                console.log(data);
                const id=1;
                postFiles(test,`http://ebel.lc/upload/${id}`)
                .then(data=>{console.log(data)})
                .catch(e=>console.log(`error request in add files: ${e}`));
            })
            .catch(e=>console.log(`error request in add information: ${e}`))

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
    return(
        <div className="product_add">
            <div className="label" onClick={()=>setAreaClass(areaClass=>!areaClass)}>------Добавить------</div>
            <div className="container">
                <div className={showAddArea}>
                    {loading?<ShowLoad/>:null}
                    <div className="des">Заполните все поля ниже:</div>                    
                        {listLangsName()}
                        <UploadImages getFiles={(files, formData)=>getFiles(files, formData)}/>
                    <button onClick={submitForm}>Отправить</button>                    
                </div>
            </div>
        </div>
    )
}

export default ProductAdd;