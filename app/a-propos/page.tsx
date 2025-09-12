export default function AProposPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-black text-primary mb-4">À propos de ShopPro</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'histoire et les valeurs qui font de ShopPro votre destination shopping premium
          </p>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Notre Histoire</h2>
            <p className="text-lg leading-relaxed">
              Fondée en 2020, ShopPro est née de la passion de créer une expérience d'achat en ligne exceptionnelle.
              Notre équipe de passionnés s'est donnée pour mission de démocratiser l'accès aux produits premium tout en
              maintenant les plus hauts standards de qualité et de service client.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Notre Mission</h2>
            <div className="bg-primary/5 p-8 rounded-lg border border-primary/20">
              <p className="text-lg font-medium text-center mb-0">
                "Offrir à nos clients une sélection rigoureuse de produits premium, accompagnée d'un service client
                d'exception et d'une expérience d'achat fluide et sécurisée."
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Qualité</h3>
                <p>
                  Nous sélectionnons rigoureusement chaque produit pour garantir la meilleure qualité à nos clients.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
                <p>
                  Nous investissons constamment dans les dernières technologies pour améliorer votre expérience d'achat.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Transparence</h3>
                <p>
                  Nous croyons en une communication claire et honnête avec nos clients sur nos produits et services.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-3 text-primary">Durabilité</h3>
                <p>Nous nous engageons pour un commerce plus responsable et respectueux de l'environnement.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Nos Engagements</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Livraison rapide et sécurisée :</strong> Expédition sous 24h et livraison gratuite dès 50€
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Satisfaction garantie :</strong> 30 jours pour changer d'avis, satisfait ou remboursé
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Service client réactif :</strong> Une équipe dédiée disponible 6j/7 pour vous accompagner
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <strong>Paiement sécurisé :</strong> Transactions protégées par cryptage SSL et 3D Secure
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">L'Équipe ShopPro</h2>
            <p className="text-lg leading-relaxed mb-6">
              Notre équipe de 25 collaborateurs passionnés travaille chaque jour pour vous offrir la meilleure
              expérience d'achat possible. De la sélection des produits au service après-vente, chaque membre de
              l'équipe contribue à notre mission commune.
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-center font-medium">
                "Chez ShopPro, chaque client est unique et mérite une attention particulière. C'est cette philosophie
                qui guide toutes nos actions."
              </p>
              <p className="text-center text-sm text-muted-foreground mt-2">- Jean Dupont, Fondateur & CEO</p>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">Rejoignez l'Aventure</h2>
            <p className="text-lg leading-relaxed mb-6">
              Découvrez dès maintenant notre sélection de produits premium et rejoignez les milliers de clients qui nous
              font confiance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Découvrir nos produits
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
