
import style from "@/components/Main/Card/CardInfo.module.css"
type Props = {
    id: number,
    name:string,
    species:string,
    status:string
}

export default function CharacterInfo(props:Props) {

    return <div className="flexCol">
        <p>{props.id}</p>
        <h1 className={`${style.h1}`}>{props.name}</h1>
        <h2>Species : {props.species}</h2>
        <h4 className={`${style.h4}`}>Status: {props.status}</h4>
        <a className={`${style.a}`} href={`/characters/${props.id}`}>
            {props.name === 'Morty Smith' ? 
            <p>Ciao {props.name} </p> : 
            <p>Visualizza Dettagli</p> 
            }
        </a>
    </div>

}