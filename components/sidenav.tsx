import Link from "next/link";
import {House, ShoppingBag, ShoppingCart} from "lucide-react";

export function Sidenav(){
    return (
        <nav className="flex p-2 flex-col items-stretch text-primary-foreground w-full gap-1">
            <Link href="/" className={'flex items-center py-3 px-2 text-lg gap-2 hover:bg-muted-foreground rounded-lg'}> <House /> Home </Link>
            <Link href="/stores" className={'flex items-center py-3 px-2 text-lg gap-2 hover:bg-muted-foreground rounded-lg'}> <ShoppingBag /> Stores </Link>
            <Link href="/" className={'flex items-center py-3 px-2 text-lg gap-2 hover:bg-muted-foreground rounded-lg '}> <ShoppingCart /> Cart </Link>
        </nav>
    )
}