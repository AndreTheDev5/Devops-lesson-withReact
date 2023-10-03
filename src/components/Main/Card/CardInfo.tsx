import style from "./CardInfo.module.css"


type MyProps = {
    id: string,
    subtitle: string,
    content: string,
    displayAncor: boolean
}

export default function CardInfo (prop: MyProps) {
    return <div className={`${style.articleInfoStyle}`}>
            <h4 className={`${style.h4}`}>{prop.subtitle}</h4>
            <p>{prop.content}</p>
            {prop.displayAncor && <a className={`${style.a}`} href={`/product/${prop.id}`}>Visualizza Dettagli</a>}
    </div>
}