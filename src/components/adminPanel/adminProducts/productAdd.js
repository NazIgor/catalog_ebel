import { useState, useRef, useCallback } from "react";
import UploadImages from "../../uploadImages/uploadImages";
import useConnectServer from "../../../services/connect/connect";


import './productAdd.scss';

const ProductAdd=({langs})=>{
    const [areaClass, setAreaClass]=useState(false),
          [files, setFiles]=useState(null),
          [formData, setFormData]=useState(null),
          nameInput=useRef([]),
          {postData, clearError, postFiles}=useConnectServer();

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
    const submitForm=()=>{
        nameInput.current.forEach(item=>{
            console.log(item.getAttribute('data-name'), item.getAttribute('value'));
           // test.append(item.getAttribute('data-name'), item.getAttribute('value'));

        })
    
    files.forEach((item,i)=>{ 
        test.append(`product_img${i}`, item);
    })
    console.log(test);
    test.forEach(item=>{
        console.log(item);
    })
        postFiles(test,'http://ebel.lc/upload')
                .then(data=>{console.log(data)})
                .catch(e=>console.log(`error: ${e}`));
        // postData(test)
        //     .then(data=>{console.log(data)})
        //     .catch(e=>console.log(`error: ${e}`));
    // test.forEach(item=>{
    //     console.log(item);
    // })
    
    // files.forEach((file,i)=>{
        
    //     let reader=new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload= function() {            
    //         clearError();
    //         postData({parts:{data:reader.result}})
    //                 .then(data=>{console.log(data)})
    //                 .catch(e=>console.log(`error: ${e}`));
    //     }

    // })
    
    // clearError();
    // postData({parts:{data:fileList}})
    //         .then(data=>{console.log(data)})
    //         .catch(e=>console.log(`error: ${e}`));


        // clearError();
        // console.log(fileList);
        // postData({parts:{data:files.map(file=>{
        //     let reader=new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload= function() {
        //         return reader.result;
                
        //     }
        // })}})
        //         .then(data=>{
        //             console.log(fileList, data)
        //         })
        //         .catch(e=>{
        //             console.log(fileList);
        //             console.log('error:  ', e);
        //         })
        
        
    }
    const getFiles=(files, formData)=>{        
        setFiles(files);
        setFormData(formData);
    }
    return(
        <div className="product_add">
            <div className="label" onClick={()=>setAreaClass(areaClass=>!areaClass)}>------Добавить------</div>
            <div className="container">
                <div className={showAddArea}>
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