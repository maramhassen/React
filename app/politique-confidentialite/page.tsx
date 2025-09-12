export default function PolitiqueConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-serif font-black text-primary mb-8">Politique de Confidentialité</h1>

        <p className="text-muted-foreground mb-8">Dernière mise à jour : 15 janvier 2024</p>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">1. Introduction</h2>
          <p>
            ShopPro s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique
            comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre
            site web.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">2. Informations collectées</h2>
          <h3 className="text-xl font-semibold mb-2">Informations que vous nous fournissez</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Nom, prénom, adresse email</li>
            <li>Adresse de livraison et de facturation</li>
            <li>Numéro de téléphone</li>
            <li>Informations de paiement (traitées de manière sécurisée)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Informations collectées automatiquement</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Adresse IP</li>
            <li>Type de navigateur et version</li>
            <li>Pages visitées et temps passé sur le site</li>
            <li>Données de géolocalisation approximative</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Utilisation des données</h2>
          <p>Nous utilisons vos données personnelles pour :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Traiter et livrer vos commandes</li>
            <li>Gérer votre compte client</li>
            <li>Vous envoyer des communications marketing (avec votre consentement)</li>
            <li>Améliorer notre site web et nos services</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Partage des données</h2>
          <p>
            Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager
            vos données avec :
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nos prestataires de services (livraison, paiement)</li>
            <li>Les autorités légales si requis par la loi</li>
            <li>Nos partenaires commerciaux (avec votre consentement explicite)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Sécurité des données</h2>
          <p>
            Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos
            données personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Droit d'accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit à l'effacement de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit à la portabilité des données</li>
            <li>Droit d'opposition au traitement</li>
          </ul>
          <p>Pour exercer ces droits, contactez-nous à l'adresse : privacy@shoppro.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre
            navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Conservation des données</h2>
          <p>
            Nous conservons vos données personnelles aussi longtemps que nécessaire pour les finalités décrites dans
            cette politique, ou selon les exigences légales applicables.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité, contactez-nous à :</p>
          <ul className="list-none pl-0">
            <li>Email : privacy@shoppro.fr</li>
            <li>Adresse : 123 Avenue des Champs-Élysées, 75008 Paris</li>
            <li>Téléphone : 01 23 45 67 89</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
