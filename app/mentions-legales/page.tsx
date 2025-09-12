export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-serif font-black text-primary mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">1. Informations légales</h2>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">ShopPro</h3>
            <ul className="list-none space-y-2">
              <li>
                <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)
              </li>
              <li>
                <strong>Capital social :</strong> 100 000 euros
              </li>
              <li>
                <strong>RCS :</strong> Paris 123 456 789
              </li>
              <li>
                <strong>SIRET :</strong> 123 456 789 00012
              </li>
              <li>
                <strong>Code APE :</strong> 4791B
              </li>
              <li>
                <strong>TVA Intracommunautaire :</strong> FR12 123456789
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">2. Siège social</h2>
          <address className="not-italic">
            ShopPro
            <br />
            123 Avenue des Champs-Élysées
            <br />
            75008 Paris
            <br />
            France
          </address>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">3. Contact</h2>
          <ul className="list-none space-y-2">
            <li>
              <strong>Téléphone :</strong> 01 23 45 67 89
            </li>
            <li>
              <strong>Email :</strong> contact@shoppro.fr
            </li>
            <li>
              <strong>Horaires :</strong> Lundi au Vendredi, 9h-18h
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">4. Directeur de publication</h2>
          <p>
            <strong>Nom :</strong> Jean Dupont
            <br />
            <strong>Qualité :</strong> Président de la SAS ShopPro
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">5. Hébergement</h2>
          <div className="bg-muted/30 p-6 rounded-lg">
            <p>
              <strong>Hébergeur :</strong> Vercel Inc.
            </p>
            <p>
              <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
            <p>
              <strong>Site web :</strong>{" "}
              <a href="https://vercel.com" className="text-primary hover:underline">
                vercel.com
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">6. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la
            propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents
            téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement
            interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">7. Données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur la
            Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des
            données vous concernant.
          </p>
          <p>Pour exercer ce droit, contactez-nous à l'adresse : privacy@shoppro.fr</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">8. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites.
            En continuant votre navigation, vous acceptez l'utilisation de ces cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">9. Responsabilité</h2>
          <p>
            ShopPro ne pourra être tenue responsable des dommages directs et indirects causés au matériel de
            l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas
            aux spécifications techniques requises, soit de l'apparition d'un bug ou d'une incompatibilité.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-serif font-bold text-primary mb-4">10. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français
            seront seuls compétents.
          </p>
        </section>
      </div>
    </div>
  )
}
