import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (body = null, url, method = 'GET',  headers = {'Content-Type': 'application/x-www-form-urlencoded'}) => {
       setLoading(true);
        try {
            const response = await fetch(url, {method, body: JSON.stringify(body), headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            
            const data = await response.json();

            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);
    const requestFormData=useCallback(async (body=null, url, method='POST')=>{
        setLoading(true);
        try{
            const response= await fetch(url, {method, body: body});
            if(!response.ok){
                throw new Error(`Could not fetch ${url}, status: ${response}`);
            }
            const data=await response.json();
            setLoading(false);
            return data;
        } catch(e){
            setLoading(false);
            setError(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError, requestFormData}
}