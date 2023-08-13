import "./resetpw.scss"
// import img1 from '../../images/img1.jpg';



const ResetPW = () => {



    return (

            <section className="containerr">
                <div className="titler">
                    Reset Password
                </div>
                <div className="inputr">
                    <div className="row-titler">
                        Enter new password<br/><br/>
                        <input type="text" name="destination" className="form-inputr"/>
                    </div>
                    <div className="row-titler">
                        Re-enter new password<br/><br/>
                        <input type="text" name="destination" className="form-inputr"/>
                        
                    </div>
                    <div className="btnr">
                            <a href="/forgotpwotp" style={{ textDecoration: 'none' }}>
                            <button type="submit" className="buttonr">
                                Reset
                            </button>
                            </a>
                    </div>
                </div>
            </section>

      );
}

export default ResetPW