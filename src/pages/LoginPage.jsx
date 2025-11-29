export default function LoginPage() {
  return (
    <div className="">
        <div className="login-form">
          <div className="">
            <form>
              <div>
                <label className="form-label" htmlFor="username">Username</label>
                <input className="form-control" type="text" id="username" name="username" />
              </div>
              <div>
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-control" type="password" id="password" name="password" />
              </div>
              <div>
                <label className="form-label" htmlFor="remember">Remember me</label>
                <input className="form-control" type="remember" id="remember" name="remember" />
              </div>
              <div>
                <button className="btn btn-blue" type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}
