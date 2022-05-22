import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useConnectServer from "../../services/connect/connect";
import ErrorLoading from "../errorLoading/errorLoading";
import { Spinner } from "../spinner/spinner";

const AdminPanel=(props)=>{
    
    const [lang, setLang]=useState(props.lang),
          {postData, clearError, error, loading}=useConnectServer(),
          [uidata, setUIData]=useState(null);

    useEffect(()=>{
        setLang(lang=>props.lang);
        console.log('change lang to: ', lang);
    },[props.lang])

    useEffect(()=>{
        initUIdata();
    },[])

    const initUIdata=()=>{
        clearError();
        postData({getlocale:''})
                .then(data=>{ 
                    setUIData(data.Getlocale);
                })
                .catch(e=>console.log('error get data from server: ',e));
    }
    const View=()=>{
        if(uidata){
            return (
                <div className="admin-container">
                    <h3>Админ панель!</h3>
                    <h5>Сначала залогинься</h5>
                    <NavLink to="/">Перейти на главную страницу  {uidata.button_send[lang]}</NavLink>
                </div>
            )
        } else {return null}
    }
    const errorContent=error?<ErrorLoading/>:null,
          loadinContet=loading && !error?<Spinner/>:null,
          content=!loading && !error && uidata ? View():null;
    return(
        <div className="admin-panel">
           {errorContent}
           {loadinContet}
           {content}
        </div>
    )
}

export default AdminPanel;