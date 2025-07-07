import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export const Room =()=>{
    const [searchParams,setSearchParams]=useSearchParams();
    const name=searchParams.get('name');  

    useEffect(() => {

    },[name])
    
    return(
        <div>
            hii{name}
        </div>
     )
}