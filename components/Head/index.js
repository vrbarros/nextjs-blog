import React from 'react';
import NextHead from 'next/head';
import PropTypes from 'prop-types';

function Head(props) {
    const { title, description } = props;

    return (
        <NextHead>
            <meta charSet="UTF-8" />
            <title>{title || ''}</title>
            <meta name="description" content={description || ''} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </NextHead>
    );
}

Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default Head;
