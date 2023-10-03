import { Character } from "@/types/Character"
import style from "@/components/Main/ArticleDetail/ArticleDetail.module.css" 
import CharacterInfo from "./CharacterInfo"


type Props = {
    character: Character
}


export default function CharacterCard(props: Props) {

    return <div className={`${style.articleDetailStyle}`}>
        <img src = {props.character.image} />   
        <CharacterInfo
            id = {props.character.id}
            name = {props.character.name}
            species = {props.character.species}
            status = { props.character.status}
        />
    </div>

}