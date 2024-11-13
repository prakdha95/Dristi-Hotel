import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer_left">
          <h2>Dristi<span>Hotel</span></h2>
        </div>
        {/* <div className="footer_center">
          <h4>Get Exclusive Deals in your inbox</h4>
          <div className='email_subscribe'>
           <div>
           <input type="text" placeholder='youremail@gmail.com' />
           <button>Subscribe</button>
           </div>
          </div>
          <small>We won't spam, read our <span>email policy</span></small>
          <div className="social_links">
          </div>
        </div> */}
        {/* <div className="footer_right">
          <h4>Legal Pages</h4>
          <div>
            <ul>
              <li>Term & conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Modern Slavery Statement</li>
            </ul>
          </div>
        </div> */}
        {/* <div className="footer_end">
          <h4>Important Links</h4>
          <div>
            <ul>
              <li>Get help</li>
              <li>Add your restaurant</li>
              <li>Sign up</li>
              <li>Create account</li>
            </ul>
          </div>
        </div> */}
      </footer>
      <section className='footer_copyright'>
        <p>DristiHotel Copyright 2024, All Rights Reserved</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>Pricing</li>
          <li>Do not sell or share my personal information</li>
        </ul>
      </section>
    </>
  )
}

export default Footer
