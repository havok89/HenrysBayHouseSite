/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { jsx } from "theme-ui"
import { Navigation } from './navigation'
import logo from '../libs/svg/logo.svg';

interface propTypes {
    navItems?: any; 
    title?: any; 
}

export const Header: React.FunctionComponent<propTypes> = props => {
    return (
        <div sx={{
          color: "text.2",
          backgroundColor: "background.1",
          py: 3,
          px: 4,
          borderBottom: "5px solid",
          borderColor: "secondary"
        }}>
            <div className="header__container container container--text">
                <div className="f-item">
                <Link to={`/`}>
                    <img className="header__logo" src={logo}/>
                </Link>
                </div>
                <div className="f-item last">
                    <Navigation items={props.navItems} />
                </div>
            </div>
        </div>
    );
}
