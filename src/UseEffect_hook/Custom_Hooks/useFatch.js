import React, { useEffect, useState }  from 'react'

export default function useFatch(url) {

    const [data,setData] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    
    
        useEffect(()=>{
          fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error("facthing is not successfull");
                }
                return res.json();
            }).then((data)=>{
                setData(data);
                setLoading(false);
                setError(null);
                
            }).catch((e)=>{
                setError(e.message);
                setLoading(false);
            })
        },[url]);
  
        return {data,isLoading,error}
}
