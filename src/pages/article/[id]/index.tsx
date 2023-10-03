import { useRouter } from "next/router";
import { Article } from "@/types/Article";
import { articles } from "@/data/articles";
import Header from "@/components/Header/Header";
import ArticleDetail from "@/components/Main/ArticleDetail/ArticleDetail";
// import { Cardo } from "next/font/google";
export default function ArticlePage () {

    const router = useRouter()
    const filteredArticles: Article[] = articles.filter(article => article.id === router.query.id)

    return <>
        <Header arr={articles}/>
        {filteredArticles[0] !== undefined ?
            <ArticleDetail article={filteredArticles[0]}/>
            :
            <p>Articolo non Trovato</p>
        }
    </>
}