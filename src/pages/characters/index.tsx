import axios from 'axios'
import {useEffect, useState} from 'react'
import { Character } from '@/types/Character'
import CharacterCard from '@/components/Characters/CharacterCard'
import style from '@/components/Main/Card/Card.module.css'

export default function CharactersPage () {


    const [characters , setCharacters] = useState<Character[]>() //poichè non c'è valore iniziale la variabile potrebbe essere "undefined"
    const [isLoading, setIsLoading] = useState<boolean>(false) //Esempio di gestione async della chiamata impostando un'azione durante il tempo di risposta
    const [isError, setIsError] = useState<boolean>(false)
    useEffect(() => {
        setIsLoading(true);
        axios.get('https://rickandmortyapi.com/api/character')
        .then(response => setCharacters(response.data.results)) 
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    },[])

    return <>
        {isLoading && <p>Caricamento dati</p>}
        <p> Pagin di prova per API con AXIOS</p>  
        {characters?.map(character => <li className={`${style.li}`}><CharacterCard character={character}/></li>)}
        {/* Questo "?" indica un controllo condizionale tipo if che comporta la possibilità che la mia variabile potrebbe essere undefined */}
        {isError && <p>Errore nel Caricamento dati</p>}
    </>
}

// Per installare AXIOS sul terminale (dentro la cartella del progetto) si usa "npm install axios" )

//Da considerare che nella chiamata .then gestisce il caso in cui la chiamata va a buon fine e .catch invece gestisce il caso in cui ci siano errori

/**
 * Il meccanismo alla base della gestione della "response" è una Promise suddivisa dei due casi .then e .catch
 * 
 * La response è un oggetto che ha una proprietà data la quale ha altre proprietà , "info" & "results" che solitamente è l'array che interessa con tutti i dati
 * axios.get è il metodo per effettuare la chiamta e si utilizza in uno useEffect con array di dipendenze vuoto per ottenere i dati al reload della pagina 
 * 
 * 
 * SE CI FOSSE UN CAMBIO DI STATO ricordati di passare anche il valore precedente nella setter (prev => prev+1)
 */