import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Découvrez nos
              <span className="text-primary block">Produits Exceptionnels</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Une sélection premium de produits de qualité à des prix imbattables. Livraison gratuite dès 50€ d'achat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Découvrir
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Voir les promotions
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-shopping-bags-and-products-display.png"
              alt="Produits en vedette"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}