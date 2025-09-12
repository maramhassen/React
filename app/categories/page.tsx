export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Catégories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Électronique</h2>
          <p className="text-muted-foreground">Smartphones, ordinateurs, accessoires</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Vêtements</h2>
          <p className="text-muted-foreground">Mode homme, femme et enfant</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Maison & Jardin</h2>
          <p className="text-muted-foreground">Décoration, mobilier, jardinage</p>
        </div>
        <div className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Sports & Loisirs</h2>
          <p className="text-muted-foreground">Équipements sportifs et loisirs</p>
        </div>
      </div>
    </div>
  )
}
