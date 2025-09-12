"use client"

import type React from "react"

import Link from "next/link"
import { Star, ShoppingCart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviewCount: number
  isOnSale?: boolean
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  isOnSale = false,
}: ProductCardProps) {
  const { dispatch } = useCart()

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id,
        name,
        price,
        image: image || "/placeholder.svg",
      },
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-border/50 hover:border-primary/20">
      <Link href={`/produit/${id}`}>
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {isOnSale && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">Promo</Badge>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Button
              variant="secondary"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Eye className="h-4 w-4 mr-2" />
              Aperçu rapide
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors">{name}</h3>

          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">({reviewCount})</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">{price.toFixed(2)} €</span>
            {originalPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through">{originalPrice.toFixed(2)} €</span>
                <Badge variant="destructive" className="text-xs">
                  -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
                </Badge>
              </>
            )}
          </div>
        </CardContent>
      </Link>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full" size="sm" onClick={addToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Ajouter au panier
        </Button>
      </CardFooter>
    </Card>
  )
}
