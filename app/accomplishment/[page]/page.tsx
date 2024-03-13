import { certificates, projects } from "@/app/lib/data";
import { Card } from "@/app/ui/utility/card";

export default function Page({ params } : {params : any}){
    var data = params.page == 'projects' ? projects : certificates
    return(
        <div className="max-w-7xl min-h-screen mx-auto">
            <div className="capitalize text-5xl pt-20 font-bold mb-20">{params.page}</div>
           {
            data.map((data) => {
                return (
                    <div key={data.title}>
                        <Card title={data.title} content={data.content} image={data.image} />
                    </div>
                )
            })
           }
        </div>
    )
}