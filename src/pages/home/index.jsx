
import { useContext } from 'react'
import Caurusel from '../../components/caruselMetal'
import { myContext } from '../../router'
import './style.scss'

export default function Home(){
    const context = useContext(myContext)
   
    return (
        <section 
            id='home'
            className='home-page'
            style={{backgroundImage:`url(${context.banner})`}}>
            <div className='slider'>
                <Caurusel/>
            </div>
        </section>
    )
}