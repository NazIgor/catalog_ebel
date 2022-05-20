import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async (body = null, url, method = 'GET',  headers = {'Content-Type': 'application/json'}) => {
        console.log('from HTTP ', url, method, body, headers);
        setLoading(true);

        try {
            console.log('try it!',url, {method, body, headers} );
            const response = await fetch(url, {method, body: JSON.stringify(body), headers, mode:'no-cors'});

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

    const clearError = useCallback(() => setError(null), []);

    return {loading, request, error, clearError}
}