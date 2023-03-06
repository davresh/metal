
import './style.scss';

const CaruselProduct = ({box})=>{
    return (
        <div className='dishe-box'>
            <div className='dishe-img'>
                <img src={box.img} alt="" />
            </div>
            <div className='dish-text'>
                <h2>{box.name}</h2>
            </div>
        </div>
    )
}

export default CaruselProduct;