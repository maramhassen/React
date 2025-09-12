"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Search, Package, CreditCard, Truck, RotateCcw, HelpCircle } from "lucide-react"

const faqCategories = [
  {
    id: "commandes",
    name: "Commandes",
    icon: Package,
    color: "bg-blue-500",
    questions: [
      {
        question: "Comment passer une commande ?",
        answer:
          "Pour passer une commande, ajoutez simplement les produits souhaités à votre panier, puis cliquez sur 'Procéder au paiement'. Suivez ensuite les étapes pour renseigner vos informations de livraison et de paiement.",
      },
      {
        question: "Puis-je modifier ma commande après l'avoir passée ?",
        answer:
          "Vous pouvez modifier votre commande dans les 2 heures suivant sa validation, à condition qu'elle n'ait pas encore été expédiée. Contactez notre service client pour toute modification.",
      },
      {
        question: "Comment annuler ma commande ?",
        answer:
          "Vous pouvez annuler votre commande gratuitement tant qu'elle n'a pas été expédiée. Rendez-vous dans votre espace client ou contactez-nous directement.",
      },
    ],
  },
  {
    id: "paiement",
    name: "Paiement",
    icon: CreditCard,
    color: "bg-green-500",
    questions: [
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer:
          "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express), PayPal, et les virements bancaires. Tous les paiements sont sécurisés par SSL.",
      },
      {
        question: "Le paiement est-il sécurisé ?",
        answer:
          "Oui, tous nos paiements sont sécurisés par cryptage SSL 256 bits et nous utilisons le protocole 3D Secure pour une sécurité renforcée.",
      },
      {
        question: "Puis-je payer en plusieurs fois ?",
        answer:
          "Oui, nous proposons le paiement en 3 ou 4 fois sans frais pour les commandes supérieures à 100€, via notre partenaire Klarna.",
      },
    ],
  },
  {
    id: "livraison",
    name: "Livraison",
    icon: Truck,
    color: "bg-orange-500",
    questions: [
      {
        question: "Quels sont les délais de livraison ?",
        answer:
          "Livraison standard : 3-5 jours ouvrés. Livraison express : 24-48h. Les commandes passées avant 14h sont expédiées le jour même.",
      },
      {
        question: "La livraison est-elle gratuite ?",
        answer:
          "Oui, la livraison est gratuite pour toute commande supérieure à 50€. En dessous, les frais de port sont de 5,99€.",
      },
      {
        question: "Livrez-vous à l'international ?",
        answer:
          "Actuellement, nous livrons uniquement en France métropolitaine et en Corse. L'extension internationale est prévue prochainement.",
      },
    ],
  },
  {
    id: "retours",
    name: "Retours",
    icon: RotateCcw,
    color: "bg-purple-500",
    questions: [
      {
        question: "Comment retourner un produit ?",
        answer:
          "Vous avez 30 jours pour retourner un produit. Connectez-vous à votre compte, sélectionnez la commande concernée et suivez la procédure de retour.",
      },
      {
        question: "Qui paie les frais de retour ?",
        answer: "Les frais de retour sont à votre charge, sauf en cas de produit défectueux ou d'erreur de notre part.",
      },
      {
        question: "Quand serai-je remboursé ?",
        answer:
          "Le remboursement est effectué sous 5-7 jours ouvrés après réception et vérification du produit retourné.",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-black text-primary mb-4">Questions Fréquentes</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez rapidement les réponses à vos questions les plus courantes
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Rechercher dans la FAQ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 py-3 text-lg"
          />
        </div>

        {/* Catégories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {faqCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4 text-center">
                <div
                  className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-2`}
                >
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-medium">{category.name}</h3>
                <Badge variant="secondary" className="mt-1">
                  {category.questions.length}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Questions et réponses */}
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {category.questions.map((faq, index) => {
                  const itemId = `${category.id}-${index}`
                  return (
                    <Collapsible key={itemId}>
                      <CollapsibleTrigger
                        onClick={() => toggleItem(itemId)}
                        className="flex items-center justify-between w-full p-4 text-left bg-muted/30 hover:bg-muted/50 rounded-lg transition-colors"
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openItems.includes(itemId) ? "rotate-180" : ""}`}
                        />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-4 py-3 text-muted-foreground">{faq.answer}</CollapsibleContent>
                    </Collapsible>
                  )
                })}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact si pas de réponse */}
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6 text-center">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Vous ne trouvez pas votre réponse ?</h3>
            <p className="text-muted-foreground mb-4">Notre équipe de support est là pour vous aider</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="mailto:support@shoppro.fr"
                className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
              >
                support@shoppro.fr
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
