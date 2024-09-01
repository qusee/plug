import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search} from "lucide-react";
import {products} from "@/app/lib/data";
import Image from "next/image";

export function Storefront() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 shadow-md">
        <div className="container mx-auto flex items-center justify-end px-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full bg-primary-foreground text-primary px-10 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
            <section className="flex flex-col items-center">
                <div className="grid w-[90%] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-background rounded-md shadow-md overflow-hidden">
                            <Image
                                src="/placeholder.svg"
                                alt={product.name}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                                style={{aspectRatio: "400/300", objectFit: "cover"}}
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                                <p className="text-muted-foreground mb-4">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-primary font-bold">${product.price}</span>
                                    <Button size="sm">Add to Cart</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
      </main>
    </div>
  )
}

