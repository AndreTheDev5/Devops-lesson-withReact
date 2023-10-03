import Header from '@/components/Header/Header'
import Card from '@/components/Main/Card/Card'
import { articles } from '@/data/articles'
import style from '@/components/Main/Card/Card.module.css'

export default function Home() {
    return <>
    <Header arr={articles}/>
     <main>
        <div className='inFlex'>
          <ul>
            {
                articles.map((article) => <li className={`${style.li}`}><Card article={article}/></li>)
            }
          </ul>
        </div>
     </main>
    </>
}