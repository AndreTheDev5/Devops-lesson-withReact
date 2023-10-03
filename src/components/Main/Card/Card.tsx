import Img from "@/components/Based/Img"
import { Article } from "@/types/Article"
import style from "./Card.module.css"
import CardInfo from "./CardInfo"

type MyProps = {
    article: Article
}
export default function Card (prop: MyProps) {
    return <div className={`${style.cardStyle}`}>
        <h1 className="txtCenter">{`${prop.article.title}`}</h1>
        <Img
          src= {prop.article.img.src}
          alt= {prop.article.img.alt}
        />
        <CardInfo 
                id={prop.article.id} 
                subtitle={prop.article.subtitle}  
                content={prop.article.content}
                displayAncor={true}
        />
        
    </div>
}