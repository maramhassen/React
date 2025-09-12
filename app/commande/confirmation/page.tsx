"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Package, Truck, Mail, Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  const [orderNumber] = useState(() => `CMD-${Date.now().toString().slice(-8)}`)
  const [estimatedDelivery] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 3)
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  })

  useEffect(() => {
    // Simulation d'envoi d'email de confirmation
    console.log("Email de confirmation envoyé")
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* En-tête de confirmation */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl font-serif font-black text-primary mb-2">Commande confirmée !</h1>
          <p className="text-muted-foreground">Merci pour votre achat. Votre commande a été traitée avec succès.</p>
        </div>

        {/* Détails de la commande */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Détails de votre commande
              <Badge variant="secondary">#{orderNumber}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <Package className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Numéro de commande</p>
                  <p className="text-sm text-muted-foreground">#{orderNumber}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Livraison estimée</p>
                  <p className="text-sm text-muted-foreground">{estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="font-medium">Email de confirmation envoyé</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Un email de confirmation avec les détails de votre commande et le suivi de livraison vous a été envoyé.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Étapes suivantes */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Que se passe-t-il maintenant ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-primary-foreground font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium">Préparation de votre commande</p>
                  <p className="text-sm text-muted-foreground">
                    Nous préparons soigneusement vos articles dans notre entrepôt.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-muted-foreground font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium">Expédition</p>
                  <p className="text-sm text-muted-foreground">
                    Votre commande sera expédiée et vous recevrez un numéro de suivi.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs text-muted-foreground font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium">Livraison</p>
                  <p className="text-sm text-muted-foreground">Réception de votre commande à l'adresse indiquée.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Download className="h-4 w-4 mr-2" />
            Télécharger la facture
          </Button>
          <Link href="/profil" className="flex-1">
            <Button variant="outline" className="w-full bg-transparent">
              Suivre ma commande
            </Button>
          </Link>
          <Link href="/" className="flex-1">
            <Button className="w-full">
              Continuer mes achats
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Support */}
        <div className="text-center mt-8 p-4 bg-muted/30 rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">Une question sur votre commande ?</p>
          <Link href="/contact" className="text-primary hover:underline font-medium">
            Contactez notre service client
          </Link>
        </div>
      </div>
    </div>
  )
}
