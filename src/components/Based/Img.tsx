import Image from "next/image";

type MyProps = {
    src: string,
    alt: string
}

export default function Img (props: MyProps) {
    return <>
     <Image
       src = {props.src}
       alt = {props.alt}
       width={394}
       height={200}
     />
    </>
} 