export default function ComptePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mon Compte</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Informations personnelles</h2>
            <div className="space-y-2">
              <p>
                <strong>Nom:</strong> John Doe
              </p>
              <p>
                <strong>Email:</strong> john.doe@example.com
              </p>
              <p>
                <strong>Téléphone:</strong> +33 1 23 45 67 89
              </p>
            </div>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Adresse de livraison</h2>
            <div className="space-y-2">
              <p>123 Rue de la Paix</p>
              <p>75001 Paris, France</p>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mes commandes</h2>
            <p className="text-muted-foreground">Aucune commande récente</p>
          </div>
          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Mes favoris</h2>
            <p className="text-muted-foreground">Aucun produit favori</p>
          </div>
        </div>
      </div>
    </div>
  )
}
