import ContactForm from './ContactForm'

export default function Footer() {
    return (
        <footer>
            <div className="col-lg-2 col-sm-1 p-5">
                {/* address and menu */}
                <div className="col-2">
                    <div className="">
                        <h3>Address</h3>
                        <hr />
                        <div>
                            <p>
                                Email: sample@gmail.com
                            </p>
                            <p>
                                Tell: +98-933-3333-212
                            </p>
                            <p>
                                Mobile: +98-933-3333-323
                            </p>
                            <p>
                                Address: 63 No. A Ave. B street
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <h3>Menu</h3>
                        <hr />
                        <div>
                            <div>
                                <a href="#">Store</a>
                            </div>
                            <div>
                                <a href="#">Cards</a>
                            </div>
                            <div>
                                <a href="#">Orders</a>
                            </div>
                            <div>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* form */}
                <div className="">
                    <h3>Contact Us</h3>
                    <hr />
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </footer>
    )
}