/** @jsx jsx */
import React from 'react'
import { Link } from 'gatsby'
import { Styled, jsx } from "theme-ui"
import { Navigation } from './navigation'
import logo from '../libs/svg/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

interface propTypes {
    title?: any; 
}

export const Footer: React.FunctionComponent<propTypes> = props => {
    return (
        <div sx={{
          color: "text.2",
          backgroundColor: "background.1",
          py: 3,
          px: 4,
        }}>
            <div className="container container--text f-container">
                <div className="f-item">
                    <p><FontAwesomeIcon icon={faPhoneAlt} size="lg" sx={{color: "secondary", mr: 2}} /> <a href="tel:01776707388" sx={{color: "text.2"}}>01776 707 388</a></p>

                    <p><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" sx={{color: "secondary", mr: 2}} /> Henrys Bay House Restaurant<br/>
                    Cairnryan Rd, Stranraer, DG9 8AT</p>
                </div>
                <div className="f-item">
                    <p><FontAwesomeIcon icon={faEnvelope} size="lg" sx={{color: "secondary", mr: 2}} /> <a href="mailto:info@henrysbayhouse.co.uk"  sx={{color: "text.2"}}>info@henrysbayhouse.co.uk</a></p>
                    <p><a href="https://www.facebook.com/henrysbayhouserestaurant?ref=bookmarks"><FontAwesomeIcon icon={faFacebook} size="lg" sx={{color: "secondary"}} /></a></p>
                </div>
            </div>
            <div className="container container--text ta__center">
                <p>&copy; {props.title}</p>
            </div>
        </div>
    );
}
