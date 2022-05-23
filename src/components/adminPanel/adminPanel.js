import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import useConnectServer from "../../services/connect/connect";
import ErrorLoading from "../errorLoading/errorLoading";
import { Spinner } from "../spinner/spinner";
import AdminSide from "./adminSide/adminSide";
import AddPage from "../addPage/addPage";
import AdminCatalog from "./adminCatalog/adminCatalog";

import './adminPanel.scss';

const AdminPanel=(props)=>{
    
    const [lang, setLang]=useState(props.lang),
          [target, setTarget]=useState('start'),
          {postData, clearError, error, loading}=useConnectServer(),
          [uidata, setUIData]=useState(null);

    useEffect(()=>{
        setLang(lang=>props.lang);
        console.log('change lang to: ', lang);
         // eslint-disable-next-line
    },[props.lang])

    useEffect(()=>{
        initUIdata();
         // eslint-disable-next-line
    },[])

    const initUIdata=()=>{
        clearError();
        postData({getlocale:''})
                .then(data=>{ 
                    setUIData(data.Getlocale);
                })
                .catch(e=>console.log('error get data from server: ',e));
    }
    const setContent=()=>{
        switch (target){
            case 'ui':
                return (
                    <div className="admin-container">
                        <AddPage lang={props.lang} langs={props.langs} uiData={props.uiData.Getlocale}/>
                    </div>
                );
            case 'catalog':
                return (
                    <div className="admin-container">
                        <AdminCatalog/>
                    </div>
                )
            case 'start':
                return <StartContent/>;
            default: return (<div className="admin-container"> <h4>Ничего нет:)))</h4></div>);
        }
    }
    const StartContent=()=>{
        return (
            <div className="admin-container">
                <h3>Админ панель!</h3>
                <p>.........................</p>
                <NavLink to="/">Перейти на главную страницу  {uidata.button_send[lang]}</NavLink>
            </div>
        )
    }
    const contentChange=(e)=>{
        const target=e.target.getAttribute('data-target');
        setTarget(target);
    }
    const errorContent=error?<ErrorLoading/>:null,
          loadinContet=loading && !error?<Spinner/>:null,
          content=!loading && !error && uidata ? setContent():null;
    return(
        <div className="admin-panel">
           {loading? null: <AdminSide uiData={uidata} loading={loading} lang={lang} contentChange={contentChange}/>}
           {errorContent}
           {loadinContet}
           {content}
        </div>
    )
}

export default AdminPanel;