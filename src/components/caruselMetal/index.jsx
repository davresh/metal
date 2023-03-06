
import { useEffect, useState } from 'react'
import './style.scss'
//
export default function Caurusel(){
    const [slide,setSlide] = useState('')
    const [slideR,setSlideR] = useState('')
    useEffect(()=>{
        setInterval(() => {
            setSlide('slide-left')
        }, 5000);
    },[])
    return (
        <>
            <div className={`metal-carousel ${slide} ${slideR}`} onTransitionEnd={()=>{
                setSlide('')
                setSlideR('')

            }}> 
                <div className='metal-carusel'>
                    <h1>
                        Welcome <br/>
                        <span className='text-metal'>Metals Factory</span>
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <div className="button-data">
                        <button>contact now</button>
                        <button>about factory</button>
                    </div>
                    <strong>BEST</strong>
                </div>
                <div className='metal-carusel'>
                    <h1>
                        Welcome <br/>
                        <span className='text-metal'>Metals Factory</span>
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <div className="button-data">
                        <button>contact now</button>
                        <button>about factory</button>
                    </div>
                    <strong>BEST</strong>
                </div>
                <div className='metal-carusel'>
                    <h1>
                        Welcome <br/>
                        <span className='text-metal'>Metals Factory</span>
                    </h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <div className="button-data">
                        <button>contact now</button>
                        <button>about factory</button>
                    </div>
                    <strong>BEST</strong>
                </div>
            </div>
            <div className="button-slider">
                <span className="icon-chevron-left-solid"
                    onClick={()=>{setSlide('slide-left')}}
                />
                <span className="icon-chevron-right-solid"  
                    onClick={()=>{setSlideR('slide-right')}}
                />
            </div>
        </>
    )
}