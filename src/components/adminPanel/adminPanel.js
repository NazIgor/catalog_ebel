import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import useConnectServer from "../../services/connect/connect";
import ErrorLoading from "../errorLoading/errorLoading";
import { Spinner } from "../spinner/spinner";
import AdminSide from "./adminSide/adminSide";
import AddPage from "../addPage/addPage";
import AdminCatalog from "./adminCatalog/adminCatalog";
import AdminProducts from "./adminProducts/adminProducts";

import './adminPanel.scss';

const AdminPanel=(props)=>{
    console.log(props);
    const [lang, setLang]=useState('ru'),
          [target, setTarget]=useState('start'),
          {postData, clearError, error, loading}=useConnectServer(),
          [uidata, setUIData]=useState(props.uiData ? props.uiData.GetUI: null),
          {langs}=props;

    useEffect(()=>{
        setLang(lang=>props.lang);
        console.log('change lang to: ', lang.name);
         // eslint-disable-next-line
    },[props.lang])

    useEffect(()=>{
        if (!props.uiData){
            initUIdata();
        }
         // eslint-disable-next-line
    },[])

    const initUIdata=()=>{
        clearError();
        postData({getUI:''})
                .then(data=>{ 
                    setUIData(data.GetUI);
                })
                .catch(e=>console.log('error get data from server: ',e));
    }
    const setContent=()=>{
        switch (target){
            case 'ui':
                return (
                    <div className="admin-container">
                        <AddPage lang={props.lang} langs={props.langs} uIData={props.uiData.GetUI}/>
                    </div>
                );
            case 'catalog':
                return (
                    <div className="admin-container">
                        <AdminCatalog lang={lang} langs={langs}/>
                    </div>
                )
            case 'start':
                return <StartContent/>;
            case 'mebel':
                return <AdminProducts lang={lang} langs={langs}/>
            default: return (<div className="admin-container"> <h4>Ничего нет:)))</h4></div>);
        }
    }
    const StartContent=()=>{
        return (
            <div className="admin-container">
                <h3>Админ панель!</h3>
                <p>.........................</p>
                <NavLink to="/">Перейти на главную страницу  {uidata.button_send[lang.name]}</NavLink>
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