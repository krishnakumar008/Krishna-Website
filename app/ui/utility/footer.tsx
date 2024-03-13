import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="h-40 py-10 px-8 bg-slate-100 border-t-2 border-slate-500">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full flex flex-col">
                    <span className="text-xl font-medium">Phone</span>
                    +91 8838350418
                </div>
                <div className="w-full flex flex-col">
                    <span className="text-xl font-medium">Email</span>
                    krishnaaishu007@gmail.com
                </div>
                <div className="w-full flex flex-col">
                    <span className="text-xl font-medium">Follow me!</span>
                    <div className="flex flex-row">
                        <Link target="_blank" href={"https://wa.me/qr/DLYVFQ3C5MD7H1"}>
                            <Image width={25} className="mx-1" height={25} src={"/wa.webp"} alt="Whatsapp" />
                        </Link>
                        <Link target="_blank" href={"https://www.snapchat.com/add/krishna07vk?share_id=AZR8V27lK9w&locale=en-IN"}>
                            <Image width={25} className="mx-1" height={25} src={"/sn.webp"} alt="snap" />
                        </Link>
                        <Link target="_blank" href={"https://www.facebook.com/share/mVBsR6nmiJppLskx/?mibextid=qi2Omg"}>
                            <Image width={25} className="mx-1" height={25} src={"/fa.webp"} alt="facebook" />
                        </Link>
                        <Link target="_blank" href={"https://www.instagram.com/invites/contact/?i=1hxgc4p6mrvi4&utm_content=gk4j6kk"}>
                            <Image width={25} className="mx-1" height={25} src={"/in.webp"} alt="Whatsapp" />
                        </Link>
                        <Link target="_blank" href={"https://www.linkedin.com/in/krishna-kumar-1626182b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                            <Image width={25} className="mx-1" height={25} src={"/li.webp"} alt="Whatsapp" />
                        </Link>
                        <Link target="_blank" href={"https://x.com/Krishna08VK?t=VohuSdGaBdESvwrV6_ZubA&s=08"}>
                            <Image width={25} className="mx-1" height={25} src={"/tw.webp"} alt="Whatsapp" />
                        </Link>
                    </div>
                </div>
                <div className="w-full text-sm font-thin">
                    © 2024 By <Link href={'https://meheer.vercel.app'}>Meheer</Link>.
                </div>
            </div>
        </div>
    )
}