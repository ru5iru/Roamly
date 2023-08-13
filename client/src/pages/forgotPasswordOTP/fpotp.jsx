import "./fpotp.scss"


const Forgotpwotp = () => {

    return(


        <div className="row-titlef">
            Enter the OTP<br/><br/>
            <input type="text" name="destination" className="form-inputf"/>
            <div className="btnf">
                <a href="/forgotpwotp" style={{ textDecoration: 'none' }}>
                <button type="submit" className="buttonlf">
                    Next
                </button>
                </a>
            </div>
        </div>

    )
}

export default Forgotpwotp;