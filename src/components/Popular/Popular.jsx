import './Popular.css'
import {assets} from '../../assets/images'

const Popular = () => {
  return (
    <>
      <section className='popular_section'>
        <div className="popular_container">
            <div className="heading">
                <h2>DristiHotel Popular Categories</h2>
            </div>
            <div className="item_card">
                <div className="card">
                    <img src={assets.momo} alt="" />
                    <small>Chicken Momo</small>
                </div>
                <div className="card">
                    <img src={assets.chowmein} alt="" />
                    <small>Veg Chowmein</small>
                </div>
                <div className="card">
                    <img src={assets.vegkhana} alt="" />
                    <small>Thakali Khana</small>
                </div>
                <div className="card">
                    <img src={assets.masu} alt="" />
                    <small>Khukhura Masu</small>
                </div>
                <div className="card">
                    <img src={assets.momo} alt="" />
                    <small>Chicken Momo</small>
                </div>
                <div className="card">
                    <img src={assets.chowmein} alt="" />
                    <small>Veg Chowmein</small>
                </div>
                <div className="card">
                    <img src={assets.vegkhana} alt="" />
                    <small>Thakali Khana</small>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Popular
