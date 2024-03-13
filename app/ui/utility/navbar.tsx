"use client"
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [view, setView] = useState(false)

    function open() {
        view == true ? setView(false) : setView(true)
    }
    let img = view == true ? "/xmark-solid.svg" : "/bars-solid.svg"

    return (
        <div className="w-full px-2 h-26 bg-slate-100 py-3 md:px-16 border-b-slate-200 border-b">
            <div className="flex-col flex mx-auto justify-center h-full">
                <div className="hidden md:block">
                    <div className="flex justify-between align-center w-full">
                        <Link href={'/'} className="font-bold flex align-center text-xl p-6">
                            <div className="bg-yellow-500 w-8 h-8 rounded-full inline-block mr-3" />
                            <div className="inline-block">KRISHNA</div>
                        </Link>
                        <div className="flex text-lg md:text-xl align-center md:flex-row justify-between ">
                            <div className="align-center flex">
                                <Link href={'/'} className="pr-2 my-auto border-r-2 border-gray-300">Resume</Link>
                                <Link href={'/accomplishment/projects'} className="px-2 my-auto border-r-2 border-gray-300">Projects</Link>
                                <Link href={'/accomplishment/certificates'} className="px-2 border-r-2 border-gray-300 my-auto">Certificates</Link>
                                <Link href={'/contact'} className="px-2 my-auto">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block md:hidden h-full relative">
                    <div className="flex items-center justify-between px-10 h-full">
                        <Link href={'/'} className="font-bold flex align-center text-xl">
                            <div className="bg-yellow-500 w-8 h-8 rounded-full inline-block mr-3" />
                            <div className="inline-block">KRISHNA</div>
                        </Link>
                        <button onClick={open} className="bg-white p-2 rounded-lg"><Image src={img} height={25} width={25} alt={img} /></button>
                    </div>
                    <div className={clsx("text-white w-full h-screen absolute duration-500 backdrop-blur-sm bg-sky-200/30", { "-right-0": view == true }, { "-right-full": view == false })}>
                        <div className="p-5 text-xl w-full">
                            <Link href={'/'} >
                                <button onClick={open} className="text-center w-full mt-3 text-black rounded-lg p-4 hover:bg-slate-400" >
                                    Resume
                                </button>
                            </Link>
                            <Link href={'/accomplishments/projects'} >
                                <button onClick={open} className="text-center w-full mt-3 text-black rounded-lg p-4 hover:bg-slate-400" >
                                    Projects
                                </button>
                            </Link>
                            <Link href={'/accomplishments/certificates'} >
                                <button onClick={open} className="text-center w-full mt-3 text-black rounded-lg p-4 hover:bg-slate-400" >
                                    Certificates
                                </button>
                            </Link>
                            <Link href={'/contact'} >
                                <button onClick={open} className="text-center w-full mt-3 text-black rounded-lg p-4 hover:bg-slate-400" >
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}