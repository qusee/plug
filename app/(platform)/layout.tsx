import React from "react";
import {Sidenav} from "@/components/sidenav";

export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main className="flex w-full h-screen">
            <section className={'flex flex-col items-center w-[15%] bg-accent-foreground'}>

                <h1 className="text-2xl text-white font-black p-5">PLUG</h1>
                <Sidenav />
            </section>
            <section className={'flex w-[85%]'}>
                {children}
            </section>
        </main>
    );
}
