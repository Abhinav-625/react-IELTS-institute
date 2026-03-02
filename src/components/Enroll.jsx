import { lightBg, darkestBg, lightestFg } from "./Colors"

const Login = ({ role }) => {
    const isRegister = role === 'login' ? false : true
    return (
        <div className="d-flex justify-content-center align-items-center p-5 flex-grow-1">
            <form className="d-flex flex-column justify-content-between gap-2 rounded-3 p-5 h-75" style={darkestBg}>
                <h1 className="text-center" style={lightestFg}>{isRegister ? 'REGISTER' : 'LOGIN'}</h1>
                {isRegister ?
                    <div>
                        <label style={lightestFg} htmlFor='formName'>Enter Your Name</label>
                        <input type="text" className="w-100" placeholder="Name" id='formName'></input>
                    </div>
                    : null}
                <div>
                    <label style={lightestFg} htmlFor='formEmail'>Email</label>
                    <input className="w-100" type='email' id='formEmail' placeholder="Enter Email"></input>
                </div>
                <div>
                    <label style={lightestFg} htmlFor='formPass'>Password</label>
                    <input className="w-100" type='password' id='formPass' placeholder="Enter Password"></input>
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn rounded-5 enrollBtn" type="submit" style={lightBg}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</button>
                </div>
                {!isRegister ?
                    <div className="d-flex justify-content-center">
                        <a className="btn link-el" style={lightestFg}>Forget Password ?</a>
                    </div>
                    : null}
            </form>
        </div>
    )
}

export default Login