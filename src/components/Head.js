import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>FizjosHemat</title>
            <meta name="description" content="Blog na temat fizjoterapi w hematologi." />
            <meta name="keywords" content="fizjoteratia, hematologia" />
        </Helmet>
    );
};

export default Head;
