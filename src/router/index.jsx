
import React from "react";
//components
import Header from "../pages/header";
import Footer from "../pages/footer";
//img
import logo from '../assets/image/logo.png'
import header from '../assets/image/header.jpg'
import banner from '../assets/image/banner1.jpg'
import banner2 from '../assets/image/bg_about.png'
import about from '../assets/image/about.jpg'
import pro1 from '../assets/image/pro1.png'
import pro2 from '../assets/image/pro2.png'

//components
import Home from "../pages/home";
import About from "../pages/about";
import useLoader from "../hooks/useLoader";
import Loader from "../loader";
import Products from "../pages/product";
import Contact from "../pages/contact";
export const myContext = React.createContext('')
function WebRouter(){
    const {loading} = useLoader()
    if(loading){
        return <Loader/>
    }
    return (
        <>
            <myContext.Provider value={{
                logo,header,banner,banner2,about,
                dishes:[
                    {
                        img:pro2,
                        name:'DISTRIBUTION'
                    },
                    {
                        img:pro1,
                        name:'DISTRIBUTION'
                    },
                    {
                        img:pro2,
                        name:'DISTRIBUTION'
                    },
                    {
                        img:pro1,
                        name:'DISTRIBUTION'
                    },
                    {
                        img:pro2,
                        name:'DISTRIBUTION'
                    },
                ]
            }}>
                <Header/>
                <Home/>
                <About/>
                <Products/>
                <Contact/>
                <Footer/>
            </myContext.Provider>
        </>
    )
}

export default WebRouter;