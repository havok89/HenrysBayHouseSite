import React from 'react'
import { Helmet } from "react-helmet"

interface propTypes {
    title?: string; 
    desc?: string;
    image?: string;
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
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.desc} />
            {props.image &&
            <meta property="og:image" content={props.image} />}
        </Helmet>
    );
}
