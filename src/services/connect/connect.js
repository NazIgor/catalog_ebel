import { useHttp } from "../useHTTP/http.hook";

const useConnectServer=()=>{
    const {loading, request, error, clearError}=useHttp();
    const _baseURL='http://catalog.ho.lc/index.php';

    const postData=async(body, url=_baseURL, method="POST",headers = {'Content-Type': 'application/json'})=>{
        console.log(body, url, method, headers);
        const res= await request(body, url, method, headers);
        return res;

    }

    const getData=async (url)=>{
        const res= await request(url);
        return res;
    }

    return {loading, error, clearError, postData, getData};
}
export default useConnectServer;