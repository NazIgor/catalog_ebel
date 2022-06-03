import { useState, useRef } from "react";
import UploadImages from "../../uploadImages/uploadImages";
import useConnectServer from "../../../services/connect/connect";


import './productAdd.scss';

const ProductAdd=({langs})=>{
    const [areaClass, setAreaClass]=useState(false),
          [files, setFiles]=useState(null),
          nameInput=useRef([]),
          {postData, clearError}=useConnectServer();

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
    const submitForm=()=>{
        nameInput.current.forEach(item=>{
            console.log(item.getAttribute('data-name'), item.getAttribute('value'));

        })
        console.log(files);
        clearError();
        postData({parts:{data:files}})
                .then(data=>{
                    console.log(data)
                })
                .catch(e=>{
                    console.log('error:  ', e);
                })
        
        
    }
    const getFiles=(files)=>{
        
        setFiles(files);
    }
    return(
        <div className="product_add">
            <div className="label" onClick={()=>setAreaClass(areaClass=>!areaClass)}>------Добавить------</div>
            <div className="container">
                <div className={showAddArea}>
                    <div className="des">Заполните все поля ниже:</div>                    
                        {listLangsName()}
                        <UploadImages getFiles={(files)=>getFiles(files)}/>
                    <button onClick={submitForm}>Отправить</button>                    
                </div>
            </div>
        </div>
    )
}

export default ProductAdd;