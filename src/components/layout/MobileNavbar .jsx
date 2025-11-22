import { Link } from 'react-router-dom';

function MobileNavbar() {
  return (
    <>
      <div className="mobile-navbar-area d-sm-block d-lg-none">
        <div>
          <Link to="/store">
            {/* Store */}
            <i class="bi bi-house-fill"></i>
          </Link>
        </div>
        <div>
          <Link to="/card">
            {/* Cards */}
            <i class="bi bi-basket-fill"></i>
          </Link>
        </div>
        <div>
          <Link to="/order">
            {/* Orders */}
            <i class="bi bi-card-checklist"></i>
          </Link>
        </div>
        <div>
          <Link to="/contact-us">
            {/* Contact Us */}
            <i class="bi bi-telephone-outbound-fill"></i>
          </Link>
        </div>
        <div>
          <Link to="/about-us">
            {/* About Us */}
            <i class="bi bi-person-bounding-box"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MobileNavbar 
