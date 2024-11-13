import './Deals.css'
import {NavLink} from 'react-router-dom'
import {assets} from '../../assets/images'

const Deals = () => {
  return (
    <>
      <section className='deals_section'>
        <div className="deals_container">
            <div className="heading">
                <h2>Upto -40% off. DristiHotel exclusive deals</h2>
                <ul>
                    <NavLink to={'/veg'}><li>Veg</li></NavLink>
                    <NavLink to={'/momo'}><li>Momo</li></NavLink>
                    <NavLink to={'/chowmein'}><li>Chowmin</li></NavLink>
                    <NavLink to={'/others'}><li>Others</li></NavLink>
                </ul>
            </div>
            <div className="item_card">
                <div className="card">
                    <img src={assets.momo} alt="" />
                    <p>-40%</p>
                    <small>Chicken Momo</small>
                </div>
                <div className="card">
                    <img src={assets.chowmein} alt="" />
                    <p>-20%</p>
                    <small>Veg Chowmein</small>
                </div>
                <div className="card">
                    <img src={assets.vegkhana} alt="" />
                    <p>-40%</p>
                    <small>Thakali Khana</small>
                </div>
                <div className="card">
                    <img src={assets.masu} alt="" />
                    <p>-40%</p>
                    <small>Khukhura Masu</small>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Deals
