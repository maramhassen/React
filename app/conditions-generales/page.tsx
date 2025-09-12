export default function ConditionsGeneralesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-serif font-black text-primary mb-8">Conditions Générales de Vente</h1>

        <p className="text-muted-foreground mb-8">Dernière mise à jour : 15 janvier 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">1. Objet</h2>
          <p>
            Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre ShopPro,
            société par actions simplifiée au capital de 100 000 euros, immatriculée au RCS de Paris sous le numéro 123
            456 789, dont le siège social est situé 123 Avenue des Champs-Élysées, 75008 Paris, et toute personne
            physique ou morale souhaitant effectuer un achat via le site internet www.shoppro.fr.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">2. Produits</h2>
          <p>
            Les produits proposés sont ceux qui figurent dans le catalogue publié sur le site internet www.shoppro.fr.
            Ces produits sont proposés dans la limite des stocks disponibles.
          </p>
          <p>
            Chaque produit est accompagné d'un descriptif établi par nos soins. Les photographies illustrant les
            produits n'entrent pas dans le champ contractuel.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Prix</h2>
          <p>
            Les prix figurant dans le catalogue sont des prix TTC en euros, tenant compte de la TVA applicable au jour
            de la commande. Tout changement du taux de TVA sera automatiquement répercuté sur le prix des produits.
          </p>
          <p>
            Les prix indiqués ne comprennent pas les frais de livraison, facturés en supplément et indiqués avant la
            validation de la commande.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Commande</h2>
          <p>
            Les commandes sont passées exclusivement par l'intermédiaire du site internet www.shoppro.fr. Le processus
            de commande comprend plusieurs étapes :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Sélection des produits et ajout au panier</li>
            <li>Vérification du contenu du panier</li>
            <li>Identification ou création d'un compte client</li>
            <li>Saisie des adresses de facturation et de livraison</li>
            <li>Choix du mode de livraison</li>
            <li>Choix du mode de paiement et paiement</li>
            <li>Confirmation de la commande</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Paiement</h2>
          <p>
            Le paiement s'effectue comptant, par carte bancaire ou par PayPal. Les données de paiement sont échangées en
            mode crypté grâce au protocole défini par le prestataire de paiement agréé.
          </p>
          <p>La commande ne sera validée qu'après encaissement effectif du prix par ShopPro.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Livraison</h2>
          <p>
            Les produits sont livrés à l'adresse indiquée par l'acheteur lors de sa commande. Les délais de livraison
            sont donnés à titre indicatif et ne constituent pas un engagement ferme de la part de ShopPro.
          </p>
          <p>
            En cas de retard de livraison supérieur à 7 jours ouvrés, l'acheteur peut annuler sa commande et obtenir le
            remboursement des sommes versées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Droit de rétractation</h2>
          <p>
            Conformément aux dispositions du Code de la consommation, l'acheteur dispose d'un délai de 14 jours francs
            pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.
          </p>
          <p>
            Ce délai court à compter de la réception des produits. En cas d'exercice du droit de rétractation, les
            produits doivent être retournés dans leur état d'origine et complets.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Garanties</h2>
          <p>
            Tous nos produits bénéficient de la garantie légale de conformité et de la garantie contre les vices cachés,
            permettant à l'acheteur de renvoyer les produits livrés défectueux ou non conformes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Données personnelles</h2>
          <p>
            ShopPro s'engage à préserver la confidentialité des informations fournies par l'acheteur. Ces informations
            ne sont utilisées que pour le traitement des commandes et ne sont jamais cédées à des tiers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">10. Droit applicable</h2>
          <p>
            Les présentes conditions générales de vente sont soumises au droit français. En cas de litige, les tribunaux
            français seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  )
}
