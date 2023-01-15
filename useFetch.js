import { useState, useEffect } from 'react';



const useFetch = (url) => {


   
    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    const [pending, setPending] = useState(true);

    useEffect(() => {

        const abortCont = new AbortController();
        
        setTimeout(() => {

            fetch(url, {signal: abortCont.signal})
        .then(res => {
            // console.log(res);
            if (!res.ok) {
                throw Error('cannot find the db');
            }
            return res.json();
        })
        .then(data => {
           // console.log(data);
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {
                setPending(false);
                setError(err.message);
            }
            
        })

        }, 1000);

        return () => abortCont.abort();
    }, [url]);

    return {data, pending, error };
}

export default useFetch;
