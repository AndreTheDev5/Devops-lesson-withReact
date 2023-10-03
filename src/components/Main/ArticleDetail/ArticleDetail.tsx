import Img from "@/components/Based/Img"
import { Article } from "@/types/Article"
import CardInfo from "../Card/CardInfo"
import style from "./ArticleDetail.module.css"

type Prop = {
    article:Article
}

export default function ArticleDetail (prop: Prop) {
    return <>
    <div className={`${style.articleDetailStyle}`}>
        <Img
          src= {prop.article.img.src}
          alt= {prop.article.img.alt}
        />
        <CardInfo 
                id={prop.article.id} 
                subtitle={prop.article.subtitle}  
                content={prop.article.content}
                displayAncor={false}
        />
 
        
    </div>
    </>
}
