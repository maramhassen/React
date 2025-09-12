export default function NouveautesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nouveautés</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Nouveau Produit 1</h3>
            <p className="text-muted-foreground mb-2">Description du produit</p>
            <p className="font-bold text-primary">99,99 €</p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Nouveau Produit 2</h3>
            <p className="text-muted-foreground mb-2">Description du produit</p>
            <p className="font-bold text-primary">149,99 €</p>
          </div>
        </div>
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Nouveau Produit 3</h3>
            <p className="text-muted-foreground mb-2">Description du produit</p>
            <p className="font-bold text-primary">79,99 €</p>
          </div>
        </div>
      </div>
    </div>
  )
}
