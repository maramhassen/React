export default function PromotionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Promotions</h1>
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-2">Offres Spéciales</h2>
        <p>Jusqu'à -50% sur une sélection de produits</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow relative">
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">-30%</div>
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <h3 className="font-semibold mb-2">Produit en Promo 1</h3>
            <p className="text-muted-foreground mb-2">Description du produit</p>
            <div className="flex items-center space-x-2">
              <p className="font-bold text-primary">69,99 €</p>
              <p className="text-sm text-muted-foreground line-through">99,99 €</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
