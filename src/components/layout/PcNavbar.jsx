import { Link } from 'react-router-dom';


function PcNavbar() {
  return (
    <div className='d-flex justify-content-between topbar item-center'>
      <div>
        <img src="/vite.svg" alt="" />
      </div>
      <div className="top-navbar-area d-lg-blcok d-sm-none">
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
          <Link to="/about-us">About Us</Link>
        </div>
        <div>
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className='me-4 d-flex'>
        <Link to="/login" className='btn btn-wrning' style={{color:'black'}}>login</Link>
      </div>
    </div>
  )
}

export default PcNavbar
