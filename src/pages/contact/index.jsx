
import useValidation from '../../hooks/useValidation';
import './style.scss'

const Contact = () => {
    const [name,setName] = useValidation()
    const [mail,setMail] = useValidation()
    const [num,setNum] = useValidation()
    return (
        <section className='contact-page' id='contact'> 
            <div className='contact-row'>
                <div className='input-contact-box'>
                    <h1>Contact Us</h1>
                    <p>
                        <input 
                            type="text" 
                            onChange={setName}
                            placeholder='Name' required/><br/>
                        <span>{name}</span>
                    </p>
                    <p>
                        <input 
                            type="email" 
                            onChange={setMail}
                            placeholder='Email' required/><br/>
                        <span>{mail}</span>
                    </p>
                    <p>
                        <input 
                            type="number" 
                            onChange={setNum}
                            min='0'
                            placeholder='Phone Number' required/><br/>
                        <span>{num}</span>
                    </p>
                    <p><textarea placeholder='Message' required/></p>
                    <p><button onClick={()=>{

                    }}>Send</button></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;