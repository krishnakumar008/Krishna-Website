import Image from "next/image";

export function Card({title, content, image} : {title: string, content: string, image: string}){
    return (
        <div className="m-10 max-h-56 flex flex-col md:flex-row" key={title}>
            <div className="md:w-3/5">
                <div className="text-2xl font-semibold mb-5">
                    {title}
                </div>
                <div className="px-10">
                    {content}
                </div>
            </div>
            <div className="md:w-2/5">
                <Image src={image} className="h-full" height={350} width={500} alt="image" />
            </div>
        </div>
    )
} 