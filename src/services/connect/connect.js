import { useHttp } from "../useHTTP/http.hook";

const useConnectServer=()=>{
    const {loading, request, error, clearError, requestFormData}=useHttp();
    const _baseURL='http://ebel.lc/';

    const postData=async(body, url=_baseURL, method="POST",headers = {'Content-Type': 'application/x-www-form-urlencoded'}) => {
        
        const res= await request(body, url, method, headers);
        return res;

    }
    const postFiles=async(body, url=_baseURL)=>{
        
        const res= await requestFormData(body,url);
        return res;

    }
    const getData=async (url)=>{
        const res= await request(url);
        return res;
    }

    return {loading, error, clearError, postData, getData, postFiles};
}
export default useConnectServer;
