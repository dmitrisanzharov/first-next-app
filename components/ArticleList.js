import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = (props) => {

    const {articles} = props;



    return (
        <div className={articleStyles.grid}>
            {articles.map((value, index) => <ArticleItem article={value} key={index}/>)}
        </div>
    )
}

export default ArticleList
