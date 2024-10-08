import Link from "next/link";
import React from "react";

export default function Home() {
  return (
      <main className="flex flex-col bg-accent-foreground items-center justify-center w-full gap-10 overflow-hidden">

          <h1 className="text-7xl text-white font-black p-5">PLUG</h1>
          <h2 className="text-primary-foreground text-4xl">Your One Stop Shop!</h2>


          <p className="w-[30%] max-md:w-[80%] text-primary-foreground text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
          </p>


          <Link href={"/stores"} className="bg-destructive-foreground px-20 py-5 rounded-2xl font-medium">
              Get Started
          </Link>
      </main>
  );
}
