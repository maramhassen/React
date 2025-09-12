"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Search, MoreHorizontal, Eye, Package, Truck } from "lucide-react"

// Données simulées des commandes
const orders = [
  {
    id: "CMD-12345",
    customer: "Marie Dubois",
    email: "marie.dubois@email.com",
    date: "2024-01-15",
    amount: 299.99,
    status: "completed",
    items: 2,
    shippingAddress: "123 Rue de la Paix, 75001 Paris",
  },
  {
    id: "CMD-12346",
    customer: "Pierre Martin",
    email: "pierre.martin@email.com",
    date: "2024-01-14",
    amount: 149.5,
    status: "processing",
    items: 1,
    shippingAddress: "456 Avenue des Champs, 69000 Lyon",
  },
  {
    id: "CMD-12347",
    customer: "Sophie Laurent",
    email: "sophie.laurent@email.com",
    date: "2024-01-14",
    amount: 89.99,
    status: "pending",
    items: 3,
    shippingAddress: "789 Boulevard Victor Hugo, 13000 Marseille",
  },
  {
    id: "CMD-12348",
    customer: "Jean Dupont",
    email: "jean.dupont@email.com",
    date: "2024-01-13",
    amount: 199.99,
    status: "shipped",
    items: 1,
    shippingAddress: "321 Rue de Rivoli, 75004 Paris",
  },
  {
    id: "CMD-12349",
    customer: "Alice Bernard",
    email: "alice.bernard@email.com",
    date: "2024-01-13",
    amount: 449.99,
    status: "cancelled",
    items: 2,
    shippingAddress: "654 Place Bellecour, 69002 Lyon",
  },
]

export default function AdminOrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default">Terminée</Badge>
      case "processing":
        return <Badge variant="secondary">En cours</Badge>
      case "pending":
        return <Badge variant="outline">En attente</Badge>
      case "shipped":
        return <Badge className="bg-blue-500 hover:bg-blue-600">Expédiée</Badge>
      case "cancelled":
        return <Badge variant="destructive">Annulée</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-serif font-black text-primary">Gestion des commandes</h1>
          <p className="text-muted-foreground">Suivez et gérez toutes les commandes</p>
        </div>
      </div>

      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-primary">{orders.filter((o) => o.status === "pending").length}</div>
            <p className="text-sm text-muted-foreground">En attente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">
              {orders.filter((o) => o.status === "processing").length}
            </div>
            <p className="text-sm text-muted-foreground">En cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {orders.filter((o) => o.status === "shipped").length}
            </div>
            <p className="text-sm text-muted-foreground">Expédiées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-emerald-600">
              {orders.filter((o) => o.status === "completed").length}
            </div>
            <p className="text-sm text-muted-foreground">Terminées</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">
              {orders.filter((o) => o.status === "cancelled").length}
            </div>
            <p className="text-sm text-muted-foreground">Annulées</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Toutes les commandes ({filteredOrders.length})</CardTitle>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher une commande..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Commande</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Articles</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.date).toLocaleDateString("fr-FR")}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium">{order.customer}</p>
                      <p className="text-sm text-muted-foreground">{order.email}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    {new Date(order.date).toLocaleDateString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {order.items} article{order.items > 1 ? "s" : ""}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-medium">{order.amount.toFixed(2)} €</span>
                  </TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          Voir détails
                        </DropdownMenuItem>
                        {order.status === "pending" && (
                          <DropdownMenuItem>
                            <Package className="mr-2 h-4 w-4" />
                            Traiter
                          </DropdownMenuItem>
                        )}
                        {order.status === "processing" && (
                          <DropdownMenuItem>
                            <Truck className="mr-2 h-4 w-4" />
                            Expédier
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
