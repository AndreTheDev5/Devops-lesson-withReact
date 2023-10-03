import { Article } from "@/types/Article";

export const articles : Article[] = [
    {
        id: 'asd',
        title: 'Studying React',
        img: {
            src: '/blog/reactLogo.jpg',
            alt: 'React Logo'
        },
        subtitle: 'Migliore approcio per React',
        content: 'Quando cominci a studiare React devi avere conoscenze di JS e TS. Secondo alcuni studi anche se possiedi quelle competenze si deve comunque piangere in cinese per poter capire bene le cose'
    },
    {
        id: 'qwe',
        title: 'Love for Nature',
        img: {
            src: '/blog/landscapen.jpg',
            alt: 'Amazing nature landscape'
        },
        subtitle: "Coltivare l'amore per la natura",
        content: 'Il concetto di sublime è, filosoficamente parlando, ciò che ci fa rendere conto di quando siamo piccoli rispetto al mondo. La magnificenza di una montagna alla vista umana è un qualcosa tanto aspirabile quanto raggiungibile solo nello spirito'
    },
    {
        id: 'zxc',
        title: 'Crypto News',
        img: {
            src: '/blog/bitCoin.jpg',
            alt: 'A bitCoin'
        },
        subtitle: 'I rischi delle Crypto',
        content: "I rischi legati all'acquisto di cryptovalute sono sempre tanti. A prescindere da un attenta valutazione del mercato, anche i più esperti consigliano di investire ragionevolmente, soprattutto in realzione alle proprie disponibilità e possibilità"
    }
] 