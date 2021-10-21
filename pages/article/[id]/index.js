import Link from 'next/link';
import {useRouter} from 'next/router';
// import {server} from '../../../config/index';
import Meta from '../../../components/Meta';

const article = ({articles}) => {

    return (
        <div>
            <Meta title={articles.title} />
            <h1>this is an article number {articles.id}</h1>
            <hr />
            <h3>{articles.title}</h3>
            <br />
            <p>{articles.body}</p>
            <button><Link href='/'>Back to home</Link></button>
        </div>
    )
}

export const getStaticProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`); 
    const articles = await res.json();
    return {
        props: {articles}
    }
}

export const getStaticPaths = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`); 
    const articles = await res.json();

    let ids = articles.map(value=> value.id);

    let paths = ids.map(value=> ({params: {id: value.toString()}}));

    return {
        paths,
        fallback: false,
    }


    // end of getStaticPaths
}


// export const getStaticProps = async (context) => {

//     const res = await fetch(`${server}/api/articles/${context.params.id}`); 
//     const articles = await res.json();
//     return {
//         props: {articles}
//     }
// }

// export const getStaticPaths = async () => {

//     const res = await fetch(`${server}/api/articles`); 
//     const articles = await res.json();

//     let ids = articles.map(value=> value.id);

//     let paths = ids.map(value=> ({params: {id: value.toString()}}));

//     return {
//         paths,
//         fallback: false,
//     }


//     // end of getStaticPaths
// }


export default article;
