
export default function LoginPage() {
    return (
        <div className="">
            <div className="login-form">
                <div className="">
                    <form>
                        <div>
                            <label className="form-label" htmlFor="username">username</label>
                            <input className="form-control" type="text" id="username" name="username" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="Password">Password</label>
                            <input className="form-control" type="text" id="Password" name="Password" />
                        </div>
                        <div>
                            <label className="form-label" htmlFor="remember">remember</label>
                            <input className="form-control" type="text" id="remember" name="remember" />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-blue">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
