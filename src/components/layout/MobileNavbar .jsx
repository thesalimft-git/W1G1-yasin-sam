import { Link } from 'react-router-dom';

function MobileNavbar() {
  return (
    <>
      <div className="mobile-navbar-area d-sm-block d-lg-none">
        <div>
          <Link to="/store">
          <i class="bi bi-house-door-fill"></i>
            {/* Store */}
          </Link>
        </div>
        <div>
          <Link to="/card">
          <i class="bi bi-cart-fill"></i>
            {/* Cards */}
          </Link>
        </div>
        <div>
          <Link to="/order">
          <i class="bi bi-card-checklist"></i>
            {/* Orders */}
          </Link>
        </div>
        <div>
          <Link to="/contact-us">
          <i class="bi bi-telephone-outbound-fill"></i>
            {/* Contact Us */}
          </Link>
        </div>
        <div>
          <Link to="/about-us">
          <i class="bi bi-person-bounding-box"></i>
            {/* About Us */}
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar 
