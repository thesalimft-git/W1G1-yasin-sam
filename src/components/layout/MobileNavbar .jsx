import { Link } from 'react-router-dom';

function MobileNavbar () {
  return (
    <>
      <div className="mobile-navbar-area d-sm-block d-lg-none">
        <div>
          <Link to="/store">Store</Link>
        </div>
        <div>
          <Link to="/card">Cards</Link>
        </div>
        <div>
          <Link to="/order">Orders</Link>
        </div>
        <div>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <div>
          <Link to="/about-us">About Us</Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar 
