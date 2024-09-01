import "./globals.css";
import React from "react";



export default function Layout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <main className="flex h-screen">
            <aside className={'w-[15%]  bg-accent-foreground'}>
                {/*    Side Navigation Bar   */}
            </aside>
            <section className={'w-[85%] bg-accent-foreground'}>
                {children}
            </section>
        </main>
    );
}
