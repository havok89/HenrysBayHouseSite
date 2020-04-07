import React from 'react'
import { Helmet } from "react-helmet"

interface propTypes {
    title?: string; 
    desc?: string;
}

export const SEOBlock: React.FunctionComponent<propTypes> = props => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            {props.title &&
            <title>{props.title}</title>}
            {props.desc &&
            <meta name="description" content={props.desc} />}
            <meta name="theme-color" content="#252525" />
        </Helmet>
    );
}
