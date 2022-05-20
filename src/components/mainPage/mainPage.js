import { useEffect } from "react";
import useConnectServer from "../../services/connect/connect";

const MainPage=()=>{
    const {error, postData}=useConnectServer();

    useEffect(()=>{
        postData({testData:{btn1:22, btn2:333}})
                .then(data=>{
                    console.log(data);
                })
                .catch((e)=>{
                    console.log(`state error: ${error}`);
                    console.log(`request error: ${e}`);
                })
                // eslint-disable-next-line
    },[])
    return (
        <div className="main-page">
            <h3>Основная страница</h3>
        </div>
    )
}

export default MainPage;