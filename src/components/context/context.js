import { useState } from "react";
import { createContext } from "react";
import useConnectServer from "../../services/connect/connect";

export const useData=()=>{
    const [data, setData]=useState({}),
          {postData, clearError}=useConnectServer(),
          context=createContext(data);

    clearError();
    postData({getLocale:''})
            .then(data=>{
                setData(data);
            })
            .catch(e=>{
                alert ('Error get UI data: ',e);
                console.log(e);
            });
    return context;
}