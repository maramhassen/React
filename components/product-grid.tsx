import { ProductCard } from "./product-card"
import { products } from "@/data/products"

export function ProductGrid() {
  const featuredProducts = products.slice(0, 6)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-black text-primary mb-4">Produits Populaires</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits premium les plus appréciés par nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.images[0]}
              rating={product.rating}
              reviewCount={product.reviewCount}
              isOnSale={product.isOnSale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
