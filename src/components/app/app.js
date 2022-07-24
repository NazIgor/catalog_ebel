import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useEffect, useState,} from "react";


import Header from "../header/header";
import { Spinner } from "../spinner/spinner";
// import AdminPanel from "../adminPanel/adminPanel";
// import MainPage from '../mainPage/mainPage';
import LangPanel from "../langPanel/langPanel";
import useConnectServer from "../../services/connect/connect";
import AddPage from "../addPage/addPage";

import './app.scss';

const Page404=lazy(()=>import ("../pages/404Page"));
const AdminPanel=lazy(()=>import ("../adminPanel/adminPanel"));
const MainPage = lazy (()=>import ('../mainPage/mainPage'));

const App=()=>{
    const [lang, setLang]=useState('ru'),
          [uiData, setUIdata]=useState(null),
          [langs, setLangs]=useState([{id:null, name:'ru'}]);
    const {clearError, postData}=useConnectServer();


    useEffect(()=>{  
        clearError();
        postData({getUI:''})
                .then(data=>{
                    
                    setUIdata(data);
                    setLang(data.GetUI.language);
                    setLangs(data.GetUI.languages);
                })
                .catch((e)=>{
                    console.log(`request error: ${e}`);
                })
                // eslint-disable-next-line
    },[])

    const changeLang=(lang)=>{
        postData({setLanguage:{'language':lang}})
                .then(data=>{
                    setLang(lang);
                })
                .catch((e)=>{
                    console.log(`request error: ${e}`);
                })

    }

    return(
        <div className="container">
            <Router>
                <main>
                    <Header/>
                    <LangPanel langs={langs} changeLang={changeLang}/>
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route and path="/" 
                                    element={<MainPage lang={lang} langs={langs} uiData={uiData}/>}/>
                                <Route and path="/admin-panel" 
                                    element={<AdminPanel lang={lang} langs={langs} uiData={uiData}/>}/>
                                <Route and path="/add-page" 
                                    element={<AddPage lang={lang} langs={langs} uiData={uiData}/>}/>
                                <Route path="*" 
                                    element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                </main>
            </Router>
        </div>
    )
}

export default App;