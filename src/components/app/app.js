import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { useEffect, useState } from "react";
import AdminPanel from "../adminPanel/adminPanel";
import MainPage from "../mainPage/mainPage";
import Header from "../header/header";
import { Spinner } from "../spinner/spinner";
import LangPanel from "../langPanel/langPanel";
import useConnectServer from "../../services/connect/connect";
import AddPage from "../addPage/addPage";

import './app.scss';

const App=()=>{
    const [lang, setLang]=useState('ru'),
          [uiData, setUIdata]=useState(null),
          [langs, setLangs]=useState(['ru']);
    const {loading, clearError, error, postData}=useConnectServer();


    useEffect(()=>{  
        clearError();
        postData({getlocale:''})
                .then(data=>{
                    setUIdata(data);

                    setLangs(data.Getlocale.languages);
                })
                .catch((e)=>{
                    console.log(`state error: ${error}`);
                    console.log(`request error: ${e}`);
                })
                // eslint-disable-next-line
    },[])

    const changeLang=(lang)=>{
        setLang(lang);
    }
    //const loadContent=loading && !error? <Spinner/>:null;

    return(
        <div className="container">
            <Router>
                <main>
                    <Header/>
                    <LangPanel langs={langs} changeLang={changeLang}/>
                        <Routes>
                            <Route and path="/" 
                                   element={<MainPage lang={lang} langs={langs} uiData={uiData}/>}/>
                            <Route and path="/admin-panel" 
                                   element={<AdminPanel lang={lang} langs={langs} uiData={uiData}/>}/>
                            <Route and path="/add-page" 
                                   element={<AddPage lang={lang} langs={langs} uiData={uiData}/>}/>
                        </Routes>
                </main>
            </Router>
        </div>
    )
}

export default App;