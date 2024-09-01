import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";

export function SearchInput(){
    return (
        <div
            className="flex items-center w-full max-w-md bg-transparent rounded-xl border border-input px-3 py-2 shadow-sm">
            <Search className="size-5 text-muted-foreground mr-3"/>
            <Input
                type="search"
                placeholder="Search..."
                className="w-full border-0 text-primary-foreground bg-transparent"
            />
        </div>
    )
}