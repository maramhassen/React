"use client"

import { useCart } from "@/contexts/cart-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"

export default function PanierPage() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const subtotal = state.total
  const shippingCost = subtotal >= 50 ? 0 : 5.99
  const taxRate = 0.2 // TVA 20%
  const taxes = subtotal * taxRate
  const finalTotal = subtotal + shippingCost

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
          <h1 className="text-2xl font-serif font-black text-primary mb-2">Votre panier est vide</h1>
          <p className="text-muted-foreground mb-6">Découvrez nos produits premium et ajoutez-les à votre panier</p>
          <Link href="/">
            <Button size="lg">Découvrir nos produits</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-serif font-black text-primary">Mon Panier</h1>
        <Button variant="outline" onClick={clearCart}>
          <Trash2 className="h-4 w-4 mr-2" />
          Vider le panier
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articles du panier */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                    <p className="text-lg font-bold text-primary">{item.price.toFixed(2)} €</p>
                    <p className="text-sm text-muted-foreground">
                      Sous-total: {(item.price * item.quantity).toFixed(2)} €
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold bg-muted px-2 py-1 rounded">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeItem(item.id)}
                    className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-muted/30">
            <CardContent className="p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Truck className="h-6 w-6 text-primary mb-2" />
                  <p className="text-sm font-medium">Livraison gratuite</p>
                  <p className="text-xs text-muted-foreground">Dès 50€ d'achat</p>
                </div>
                <div className="flex flex-col items-center">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <p className="text-sm font-medium">Paiement sécurisé</p>
                  <p className="text-xs text-muted-foreground">SSL & 3D Secure</p>
                </div>
                <div className="flex flex-col items-center">
                  <RotateCcw className="h-6 w-6 text-primary mb-2" />
                  <p className="text-sm font-medium">Retour 30 jours</p>
                  <p className="text-xs text-muted-foreground">Satisfait ou remboursé</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Résumé de commande amélioré */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Résumé de commande
                <Badge variant="secondary">
                  {state.itemCount} article{state.itemCount > 1 ? "s" : ""}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>TVA (20%)</span>
                  <span>{taxes.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Livraison</span>
                  <div className="text-right">
                    {shippingCost === 0 ? (
                      <div>
                        <span className="text-primary font-medium">Gratuite</span>
                        <p className="text-xs text-muted-foreground">Économisez 5,99 €</p>
                      </div>
                    ) : (
                      <div>
                        <span>{shippingCost.toFixed(2)} €</span>
                        <p className="text-xs text-muted-foreground">Gratuite dès 50€</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total TTC</span>
                <span className="text-primary">{finalTotal.toFixed(2)} €</span>
              </div>

              {subtotal < 50 && (
                <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                  <p className="text-sm text-accent-foreground">
                    Ajoutez {(50 - subtotal).toFixed(2)} € pour bénéficier de la livraison gratuite
                  </p>
                </div>
              )}

              <Link href="/commande">
                <Button className="w-full" size="lg">
                  Procéder au paiement
                </Button>
              </Link>

              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Continuer mes achats
                </Button>
              </Link>

              <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground">Paiement 100% sécurisé par SSL</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
