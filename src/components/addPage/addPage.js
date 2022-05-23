import useConnectServer from "../../services/connect/connect";

import './addPage.scss';

const AddPage=({lang, langs, uiData})=>{
    const {postData}=useConnectServer();
    console.log(uiData);
    const sendData=()=>{
        let dataForPost={};
        langs.forEach(item=>{
            dataForPost[item]=document.getElementById(item).value;
            document.getElementById(item).disabled=true;
        })
        dataForPost['name']=document.getElementById('lang-name').value;
        document.getElementById('lang-name').disabled=true;
        postData({addUI:dataForPost})
                .then(data=>{
                    langs.forEach(item=>{
                        document.getElementById(item).value='';
                        document.getElementById(item).disabled=false;
                    })
                    document.getElementById('lang-name').value='';
                    document.getElementById('lang-name').disabled=false;
                    alert('UI element added !!!');
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
            <h3>{uiData.lb_add[lang]} </h3>
            <input type="text" id="lang-name" placeholder="name"></input>
            {returnLangs()}
            <button onClick={()=>{sendData()}}>Исчо давай!!</button>
        </div>
    )
}
export default AddPage;