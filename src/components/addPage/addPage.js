import useConnectServer from "../../services/connect/connect";
import { useEffect } from "react";

import './addPage.scss';

const AddPage=({langs})=>{
    const {postData}=useConnectServer();

    const sendData=()=>{
        let dataForPost={};
        langs.forEach(item=>{
            dataForPost[item]=document.getElementById(item).value;
        })
        dataForPost['name']=document.getElementById('lang-name').value;
        postData({addUI:dataForPost})
                .then(data=>{
                    console.log(data);
                })
                .catch(e=>console.log(e));
    }
    console.log(langs);
    const returnLangs=()=>{
        const lll= langs.map(item=>{
            return (
                <input type="text" key={item} id={item} placeholder={item}/>
            )
        });
        return lll;
    }
    return(
        <div className="add-ui">
            <h3>Добавляем!!! </h3>
            <input type="text" id="lang-name" placeholder="name"></input>
            {returnLangs()}
            <button onClick={()=>{sendData()}}>Исчо давай!!</button>
        </div>
    )
}
export default AddPage;