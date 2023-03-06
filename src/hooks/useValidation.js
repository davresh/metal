import { useState } from "react"

export default function (){
    const [erorr,setErorr] = useState('')

    function checkInpVal(valInp){
        const val = valInp.target
        const mail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const name = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/
        const num = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        if(!name.test(val.value) && val.type == 'text'){
            setErorr("Text don't match")
        }else if(name.test(val.value) && val.type == 'text'){
            setErorr('')
        }
        if(!mail.test(val.value) && val.type == 'email'){
            setErorr("Text don't match")
        }else if(mail.test(val.value) && val.type == 'email'){
            setErorr('')
        }
        if(!num.test(val.value) && val.type == 'number'){
            setErorr("Text don't match")
        }else if(num.test(val.value) && val.type == 'number'){
            setErorr('')
        }
        if(val.value == ''){
            setErorr('')
        }
    }
    return [erorr,checkInpVal]
}