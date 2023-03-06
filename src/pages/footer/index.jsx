
import useValidation from '../../hooks/useValidation';
import './style.scss'

 const Footer = ()=> {
    const [mail,setMail] = useValidation() 
    return (
        <footer id='footer'>    
            <div className="footer-box">
                <h2>Newsletter</h2>
                <form className='footer-box-mail'>
                    <input 
                        type="email"  
                        onChange={setMail}
                        placeholder='ENTER YOUR EMAIL' required/>
                    <button>SUBSCRIBE</button>
                </form>
                <h3>{mail}</h3>
                <div className='footer-box-about'>
                    <p><span className='icon-location-solid'/><a>Locations</a></p>
                    <p><span className='icon-phone-solid'/><a href="tel:+71 1234567890">+71 1234567890</a></p>
                    <p><span className='icon-envelope-solid'/><a href="mailto:demo@gmail.com">demo@gmail.com</a></p>
                </div>
                <div className='footer-box-soc'>
                    <span className='icon-square-facebook'/>
                    <span className='icon-twitter'/>
                    <span className='icon-linkedin-in'/>
                    <span className='icon-instagram'/>
                </div>
                <div className='footer-box-name'>
                    <p>Copyright 2020 All Right Reserved By Free Html Templates</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;