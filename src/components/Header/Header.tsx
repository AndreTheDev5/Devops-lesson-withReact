import { Article } from "@/types/Article"

type MyArr = {
    arr:Article[]
}

export default function Header (arr:MyArr) {
    return <>
        <header>
            <h1>Esempio di Blog v1 </h1>
            <h4>Chissà se riesco a farlo in meno di 247 ore</h4>
        
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    {
                        arr.arr.map((article,index) => <li><a href={`/article/${article.id}`}>Articolo {index+1}</a></li>)
                    }
                </ul>
            </nav>
        </header>
        
    </>
}


