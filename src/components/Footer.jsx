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
                                Email:
                                <a href="mailto: sample@gmail.com"> sample@gmail.com</a>
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
                                <a href="/store">Store</a>
                            </div>
                            <div>
                                <a href="/card">Cards</a>
                            </div>
                            <div>
                                <a href="/Order">Orders</a>
                            </div>
                            <div>
                                <a href="/contac-us">Contact Us</a>
                            </div>
                            <div>
                                <a href="/about-us">about us</a>
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