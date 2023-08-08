import "./login.scss"

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World</h1>
                    <p>Lorem ipsum dkr ermgonreg oirnger
                        oiemotingoenr g tboerjnboer
                        tgohnrthoinrtoie oigetoihojht oignrg
                        ingiengne porejg oijrg 3oring noinoo.
                    </p>
                    <span>No Account?</span>
                    <button>Register</button>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>Login</button>
                        <span>Forgot Password?</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;