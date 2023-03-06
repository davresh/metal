import { useEffect, useState } from "react";

export default function(){
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1200)
    },[])
    return {loading}
}