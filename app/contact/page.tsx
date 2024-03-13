"use client"
import Link from "next/link";
import { Mail } from "../lib/mail";
import { useRouter } from "next/navigation";

export default function Contact() {
    const router = useRouter()

    function handle(){
        router.push('/')
    }

    return (
        <div className="max-w-7xl min-h-screen mx-auto">
            <div className="flex flex-col md:flex-row py-20">

                <div className="md:w-1/2 px-2 items-center justify-center flex">
                    <div className="w-full">
                        <div className="text-5xl font-bold mb-6">
                            Contact
                        </div>
                        <div className="text-xl">
                            Looking forward to hearing from you!
                        </div>
                        <div className="mt-12">
                            <div className="font-bold text-2xl">
                                Phone:
                            </div>
                            <div className="font-light text-lg">
                                +91 8838350418
                            </div>
                            <div className="font-bold text-2xl mt-10">
                                Email:
                            </div>
                            <div className="font-light text-lg">
                                <Link href={"mailto:krishnaaishu007@gmail.com"}>krishnaaishu007@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <form action={Mail} onSubmit={handle}>
                        <div className="flex flex-col md:flex-row my-5">
                            <input type="text" placeholder="First Name" required className="mx-4 border-2 border-slate-800 duration-300  w-full h-12 rounded-lg focus:border-sky-400 focus:border-2 p-3" name="firstName" id="FirstName" />
                            <input type="text" placeholder="Last Name" required className="mx-4 border-2 border-slate-800 duration-300  w-full h-12 rounded-lg focus:border-sky-400 focus:border-2 p-3" name="lastName" id="lastName" />
                        </div>
                        <div className="flex flex-col md:flex-row my-5">
                            <input type="email" placeholder="Your Email" required className="mx-4 border-2 border-slate-800 duration-300  w-full h-12 rounded-lg focus:border-sky-400 focus:border-2 p-3" name="email" id="email" />
                            <input type="text" placeholder="Subject" required className="mx-4 border-2 border-slate-800 duration-300  w-full h-12 rounded-lg focus:border-sky-400 focus:border-2 p-3" name="subject" id="subject" />
                        </div>
                        <div className="flex flex-col md:flex-row my-5 items-center justify-evenly">
                            <textarea name="message" id="message" rows={10} placeholder="Your Message" className="rounded-lg p-3 w-3/5 focus:border-sky-400 border-slate-800 border-2 mx-4"></textarea>
                            <button type="submit" className="inline-flex p-3 rounded-xl items-center justify-center text-gray-700 text-lg m-1 font-bold bg-sky-300 duration-300 border-2 hover:bg-sky-400 border-sky-500">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}