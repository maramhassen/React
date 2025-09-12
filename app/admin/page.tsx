"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Package, ShoppingCart, Users, TrendingUp, Eye, Plus, ArrowUpRight, ArrowDownRight } from "lucide-react"
import Link from "next/link"

// Données simulées
const stats = {
  totalProducts: 156,
  totalOrders: 1247,
  totalUsers: 3892,
  revenue: 45678.9,
  recentOrders: [
    { id: "CMD-12345", customer: "Marie Dubois", amount: 299.99, status: "completed" },
    { id: "CMD-12346", customer: "Pierre Martin", amount: 149.5, status: "processing" },
    { id: "CMD-12347", customer: "Sophie Laurent", amount: 89.99, status: "pending" },
    { id: "CMD-12348", customer: "Jean Dupont", amount: 199.99, status: "completed" },
  ],
  topProducts: [
    { name: "iPhone 15 Pro Max", sales: 89, revenue: 109411 },
    { name: "MacBook Air M3", sales: 45, revenue: 58455 },
    { name: "AirPods Pro 2", sales: 156, revenue: 43524 },
    { name: "Montre Connectée Sport Pro", sales: 67, revenue: 26733 },
  ],
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-black text-primary">Dashboard</h1>
          <p className="text-muted-foreground">Vue d'ensemble de votre boutique</p>
        </div>
        <div className="flex gap-2">
          <Link href="/admin/produits/nouveau">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nouveau produit
            </Button>
          </Link>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Produits</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12%
              </span>
              par rapport au mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commandes</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8%
              </span>
              par rapport au mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilisateurs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-primary flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +23%
              </span>
              par rapport au mois dernier
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Chiffre d'affaires</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.revenue.toLocaleString("fr-FR")} €</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-destructive flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -2%
              </span>
              par rapport au mois dernier
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commandes récentes */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Commandes récentes</CardTitle>
            <Link href="/admin/commandes">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Voir tout
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount.toFixed(2)} €</p>
                    <Badge
                      variant={
                        order.status === "completed"
                          ? "default"
                          : order.status === "processing"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {order.status === "completed"
                        ? "Terminée"
                        : order.status === "processing"
                          ? "En cours"
                          : "En attente"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Produits les plus vendus */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Produits les plus vendus</CardTitle>
            <Link href="/admin/statistiques">
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Voir tout
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.topProducts.map((product, index) => (
                <div key={product.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.sales} ventes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{product.revenue.toLocaleString("fr-FR")} €</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
