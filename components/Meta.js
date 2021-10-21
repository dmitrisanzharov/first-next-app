import React from 'react'
import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Dmitri Page',
    keywords: 'web dev, front end, next.js',
    description: 'learn how to build next.js pages and reusable Meta/Head'
}

export default Meta;
