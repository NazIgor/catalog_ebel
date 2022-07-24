import { useState } from "react";
import useConnectServer from "../../services/connect/connect";
import {Spinner} from '../spinner/spinner';

import './addPage.scss';

const AddPage=({lang, langs, uIData})=>{
    
    const {postData, loading}=useConnectServer(),
          [uiData, setUIData]= useState(uIData);
    
    const sendData=()=>{
        let dataForPost={};
        langs.forEach(item=>{
            dataForPost[item]=document.getElementById(item).value;
            document.getElementById(item).disabled=true;
        })
        dataForPost['name']=document.getElementById('lang-name').value;
        document.getElementById('lang-name').disabled=true;
        if (dataForPost.name==='' || dataForPost.ru===''){
            alert ('заполните обязательные поля NAME, RU');
            return;
        }
        postData({addUI:dataForPost})
                .then(data=>{
                    langs.forEach(item=>{
                        document.getElementById(item).value='';
                        document.getElementById(item).disabled=false;
                    })
                    document.getElementById('lang-name').value='';
                    document.getElementById('lang-name').disabled=false;
                    updateUIDate();
                    alert('UI element added !!!');
                })
                .catch(e=>console.log(e));
    }
    const updateUIDate=()=>{
        postData({getUI:''})
                .then(data=>{
                    setUIData(data.GetUI);
                }).catch(e=>console.log('error update UI Data, ',e));
    }
    const uploadData=()=>{
        postData({synchronize:{action:'load'}})
                .then(data=>{
                    alert ('data is uploading, ', JSON.stringify(data));
                }).catch(e=>console.log('error uploading data: ', e));
    }
    const syncData=()=>{
        postData({synchronize:{action:'synch'}})
                .then(data=>{
                    alert ('data is synchronize, ', JSON.stringify(data));
                }).catch(e=>console.log('error synchronize data: ', e));
    }
    const returnUI=()=>{
        const list=[]
        
        for (let key in uiData){
            list.push(
                <div className="listUI_items" key={key}>
                    <div className="keyUI">{key}</div>
                    <div className="valueUI">{JSON.stringify(uiData[key])}</div>
                </div>
            )
        }
        return list;
    }
    const returnLangs=()=>{
        const lll= langs.map(item=>{
            return (
                <input type="text" key={`addUI_${item.name}`} id={item.id} placeholder={item.fullName}/>
            )
        });
        return lll;
    }
    console.log(uiData);
    return(
        <div className="add-ui">
            <h3>{uiData.lb_add[lang]} </h3>
            <input type="text" id="lang-name" placeholder="name"></input>
            {returnLangs()}
            <button onClick={()=>{sendData()}}>Исчо давай!!</button>
            <div className="add-ui_divider"></div>
            <span>Таблица locale</span>
            {loading?<Spinner/>:null}
            <div className="sync-data">
                
                <button className="sync-data_btn" onClick={uploadData} >Upload</button>
                <button className="sync-data_btn" onClick={syncData} >Synchronize</button>
            </div>
            <div className="list">
                <strong>Данные таблицы locale: </strong><p>.......................................</p>
                {returnUI()}
            </div>
        </div>
    )
}
export default AddPage;