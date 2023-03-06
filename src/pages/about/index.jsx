
import { useContext } from 'react';
import { myContext } from '../../router';
import './style.scss';

export default function About(){
    const context = useContext(myContext)
    return (
        <section 
            id='about'
            className='about-page'
            style={{backgroundImage:`url(${context.banner2})`}}
        >
            <div className='about-set'>
                <div className='about-img'>
                    <img src={context.about} alt="" />
                </div>
                <div className='about-text'>
                    <h1>About of Factory</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur. natoque penatibus et magnis dis parturient montes, nascetur.</p>
                    <button>about us</button>
                </div>
            </div>
        </section>
    )
}