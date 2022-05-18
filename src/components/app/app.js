import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import AdminPanel from "../adminPanel/adminPanel";
import MainPage from "../mainPage/mainPage";
import Header from "../header/header";


import './app.scss';

const App=()=>{

    return(
    <Router>
        <main>

            <Header/>
                <Routes>
                    <Route and path="/" element={<MainPage/>}/>
                    <Route and path="/admin-panel" element={<AdminPanel/>}/>
                </Routes>


        </main>
    </Router>
    )
}

export default App;