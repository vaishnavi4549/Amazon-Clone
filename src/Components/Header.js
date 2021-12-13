import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
function Header() {
    const [{basket}] = useStateValue();
    
    return (
        <nav className="header">
            {/* Amazon logo on left */}
            <Link to="/login">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            {/* Search Bar */}
            <div className="header_searchcore">
                <input type="text" className="header_searchinput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            <div className="header_nav">
                {/* 1st link */}

                <Link to="/login" className="header_links">
                    <div className="header_option">
                        <span className="header_optionLineOne">Hello Vaishnavi!</span>
                        <span className="header_optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2st link */}
                <Link to="/" className="header_links">
                    <div className="header_option">
                        <span className="header_optionLineOne">Returns</span>
                        <span className="header_optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3st link */}
                <Link to="/" className="header_links">
                    <div className="header_option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*4th link */}
                <Link to="/checkout" className="header_links">
                    <div className="headerOptionBascket">
                        {/* Shopping basket  */}
                        <ShoppingCartIcon />
                        {/* number of items in bascket */}
                        <span className="header_optionLineTwo header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header