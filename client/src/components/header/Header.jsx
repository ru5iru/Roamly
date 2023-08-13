import "./header.scss";
import logowb from '../../assets/images/logowb.png'

export const Header = () => {
    return(
        <section className="headerh">
            <div className="logoh">
            <img src={logowb} className="logow" alt=""/>
            </div>
            <div className="buttonh">
                <div className="signuph">
                    <a href="/signup" style={{ textDecoration: 'none' }}>
                    <button type="submit" className="button1">
                        SIGN UP
                    </button>
                    </a>
                </div>
                <div className="loginh">
                    <a href="/login" style={{ textDecoration: 'none' }}>
                    <button type="submit" className="button1">
                        LOGIN
                    </button>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Header