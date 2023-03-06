import { useContext, useRef } from "react";
import { myContext } from "../../router";
import './style.scss'

function Header(){
    const context = useContext(myContext);
    const navRef = useRef()
    return (
        <>
            <header style={{backgroundImage:`url(${context.header})`}}>
                <div><img src={context.logo} alt="" /></div>
                <div 
                    className="nav-block" 
                    ref={navRef}
                    onClick={(e)=>{
                        e.target.classList.remove('hidden-nav')
                        e.stopPropagation()
                    }}
                    >
                    <nav className='links-page' >
                        <span onClick={()=>{
                            navRef.current.classList.remove('hidden-nav')
                        }}>X</span>
                        <p><a href="#home" onClick={()=>{
                            navRef.current.classList.remove('hidden-nav')
                        }}>Home</a></p>
                        <p><a href="#about" onClick={()=>{
                            navRef.current.classList.remove('hidden-nav')
                        }}>About</a></p>
                        <p><a href="#product" onClick={()=>{
                            navRef.current.classList.remove('hidden-nav')
                        }}>Products</a></p>
                        <p><a href="#contact" onClick={()=>{
                            navRef.current.classList.remove('hidden-nav')
                        }}>Contact</a></p>
                    </nav>
                </div>
                <div><span className="icon-bars-solid" onClick={()=>{
                    const hrefTag = navRef.current.classList.value
                    if(hrefTag.includes('hidden-nav')){
                        navRef.current.classList.remove('hidden-nav')
                    }else{
                        navRef.current.classList.add('hidden-nav')
                    }
                }}/></div>
            </header>
        </>
    )
}

export default Header;