import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios'
import { Character } from "@/types/Character";
import CharacterCard from "@/components/Characters/CharacterCard";
export default function CharacterDetailPage () {

    const router = useRouter()
    const characterId = router.query.id
// Essendo la funzione useRouter() async bisonga inserirla nell'array di dipendenze dello useEffect assieme a un CONTROLLO IF 
// in cui si esplicita che la chiamata http avviene solo se il valore dell'id è diverso da undefined. Così non ci sono chiamate di errore 500 causate dall'undefined
// poichè se la query della useRouter() è undefined la funzione stessa non funziona.

    const [character, setCharacter] = useState<Character>()

    useEffect(() => {
        if(characterId!== undefined){
        axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => setCharacter(response.data))  //la differenza sta nel fatto che in questo caso la response è un oggetto di tipo character definito come data
        .catch(error => console.log(error))
        }
    },[characterId])

    return <>
    <h1><a className="link" href="/characters">HOME</a></h1>
    <p> Sei nella pagina del Character Selezionato </p>
    {character!==undefined && <CharacterCard character={character}/>}
    </>

}