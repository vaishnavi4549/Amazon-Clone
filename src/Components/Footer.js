import React from 'react'
import './footer.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div>
            <div className="footer_buttonbar">
                <Link to="/" className="footer_p"><p>Back to Top</p></Link>
            </div>
            <div className="footer_main">
                <div className="footer_allcol">
                    <div className="col">
                        <ul>
                            <Link to="/" className="link"><li className="footer_bold">Get to Know Us</li></Link>
                            <Link to="/" className="link"><li>Careers</li></Link>
                            <Link to="/" className="link"><li>Blog</li></Link>
                            <Link to="/" className="link"><li>About Amazon</li></Link>
                            <Link to="/" className="link"><li>Invester Relations</li></Link>
                            <Link to="/" className="link"><li>Amazon Devices</li></Link>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <Link to="/" className="link"><li className="footer_bold">
                                Make Money with Us</li></Link>
                            <Link to="/" className="link"><li>Sell products on Amazon</li></Link>
                            <Link to="/" className="link"><li>Sell on Amazon Business</li></Link>
                            <Link to="/" className="link"><li> Sell apps on Amazon</li></Link>
                            <Link to="/" className="link"><li> Become an Affiliate</li></Link>
                            <Link to="/" className="link"><li> Advertise Your Products</li></Link>
                            <Link to="/" className="link"><li>Self-Publish with Us</li></Link>
                            <Link to="/" className="link"><li>Host an Amazon Hub</li></Link>

                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <Link to="/" className="link"><li className="footer_bold">Amazon Payment Products</li></Link>
                            <Link to="/" className="link"><li>Amazon Business Card</li></Link>
                            <Link to="/" className="link"><li>Shop with Points</li></Link>
                            <Link to="/" className="link"><li>Reload Your Balance</li></Link>
                            <Link to="/" className="link"><li>Amazon Currency Converter</li></Link>
                        </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <Link to="/" className="link"><li className="footer_bold">Let Us Help You</li></Link>
                            <Link to="/" className="link"><li>Let Us Help You Amazon and COVID-19</li></Link>
                            <Link to="/" className="link"><li>Returns & Replacements</li></Link>
                            <Link to="/" className="link"><li>Manage Your Content and Devices</li></Link>
                            <Link to="/" className="link"><li>Amazon Assistant</li></Link>
                            <Link to="/" className="link"><li>Help</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
