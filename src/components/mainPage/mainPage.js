import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useConnectServer from "../../services/connect/connect";

import { Spinner } from "../spinner/spinner";
import ErrorLoading from "../errorLoading/errorLoading";

const MainPage=(props)=>{
    const {loading,error, clearError, postData}=useConnectServer(),
          [uiData, setUIData]=useState(null),
          [lang, setLang]=useState(props.lang);

    useEffect(()=>{  
        clearError();
        postData({getlocale:''})
                .then(data=>{
                    setUIData(uiData=>data);
                })
                .catch((e)=>{
                    console.log(`state error: ${error}`);
                    console.log(`request error: ${e}`);
                })
                // eslint-disable-next-line
    },[])
    const loadContent=loading? <Spinner/>:null,
          errorContent=error && !loading? <ErrorLoading/>:null,
          content=!loading && !error? View():null;

    return (
        <div className="main-page">
            {loadContent}
            {errorContent}
            {content}
        </div>
    )
}

const View=()=>{
    return(
        <div className="main-page">
            <h3>Основная страница</h3>
            <NavLink to="/admin-panel">Перейти в админ панель</NavLink>
        </div>
    )
}

export default MainPage;