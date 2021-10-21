import {articles} from '../../../data'; 

export default function handler(req,res){

    const id = req.query.id; 

    const filteredArticle = articles.filter(value=> value.id === id);

    if(filteredArticle.length > 0){
        res.status(200).json(filteredArticle[0]);
    } else {
        res.status(404).json({message: `article with ID of ${id}, was not found`})
    }

    
}