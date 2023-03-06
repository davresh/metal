
import { useContext, useEffect, useRef, useState } from 'react';
import CaruselProduct from '../../components/caruselProduct';
import { myContext } from '../../router';
import './style.scss';

const Products = () => {
    const context = useContext(myContext)
    const prRef = useRef()
    const [direction,setDirection] = useState('')
    const [slideClass,setSlideClass] = useState('')
    useEffect(()=>{
        setInterval(() => {
            setSlideClass('pro-anim-left')
            setDirection(true)
        }, 4000);
    },[])
    return (
        <section className='product-page'>
            <div className='product-set'>
                <h1>Metal Products</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <div className='product-container'>
                    <div 
                        className={`product-slider ${slideClass}`}
                        ref={prRef}
                        onTransitionEnd={()=>{
                            if(direction){
                                prRef.current.appendChild(prRef.current.firstElementChild)
                            }else{
                                prRef.current.prepend(prRef.current.lastElementChild)
                            }
                            setSlideClass('')
                            prRef.current.classList.remove('pr-anim-tras')
                            prRef.current.classList.remove('pro-anim-left')
                            prRef.current.classList.remove('pro-anim-right')
                            setTimeout(()=>{
                                prRef.current.classList.add('pr-anim-tras')
                            })
                        }}
                        >
                        {context.dishes.map((el,id )=> <CaruselProduct key={id} box={el} />)}
                    </div>
                </div>
                <span 
                    className='pr-control icon-arrow-left-solid'
                    onClick={()=>{
                        setDirection(true)
                        setSlideClass('pro-anim-left')
                    }}
                />
                <span 
                    className='pr-control icon-arrow-right-solid'
                    onClick={()=>{
                        setDirection(false)
                        setSlideClass('pro-anim-right')
                    }}
                />
            <button className='pr-btn'>See More</button>
            </div>
        </section>
    )
}

export default Products;