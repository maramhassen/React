"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/contexts/cart-context"
import { useAuth } from "@/contexts/auth-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { state } = useCart()
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <h1 className="text-2xl font-serif font-black text-primary cursor-pointer hover:opacity-80 transition-opacity">
                ShopPro
              </h1>
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost">Catégories</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/categories">
                  <DropdownMenuItem className="cursor-pointer">Électronique</DropdownMenuItem>
                </Link>
                <Link href="/categories">
                  <DropdownMenuItem className="cursor-pointer">Vêtements</DropdownMenuItem>
                </Link>
                <Link href="/categories">
                  <DropdownMenuItem className="cursor-pointer">Maison & Jardin</DropdownMenuItem>
                </Link>
                <Link href="/categories">
                  <DropdownMenuItem className="cursor-pointer">Sports & Loisirs</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/nouveautes">
              <Button variant="ghost">Nouveautés</Button>
            </Link>
            <Link href="/promotions">
              <Button variant="ghost">Promotions</Button>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Rechercher des produits..." className="pl-10 pr-4" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="px-2 py-1.5 text-sm font-medium">{user.name}</div>
                  <div className="px-2 py-1.5 text-xs text-muted-foreground">{user.email}</div>
                  <DropdownMenuSeparator />
                  <Link href="/profil">
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Mon profil
                    </DropdownMenuItem>
                  </Link>
                  {user.role === "admin" && (
                    <Link href="/admin">
                      <DropdownMenuItem className="cursor-pointer">
                        <Settings className="mr-2 h-4 w-4" />
                        Administration
                      </DropdownMenuItem>
                    </Link>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Se déconnecter
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/connexion">
                  <Button variant="ghost" size="sm">
                    Connexion
                  </Button>
                </Link>
                <Link href="/inscription">
                  <Button size="sm">Inscription</Button>
                </Link>
              </div>
            )}

            <Link href="/panier">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Rechercher des produits..." className="pl-10 pr-4" />
              </div>
              <Link href="/categories">
                <Button variant="ghost" className="justify-start w-full">
                  Catégories
                </Button>
              </Link>
              <Link href="/nouveautes">
                <Button variant="ghost" className="justify-start w-full">
                  Nouveautés
                </Button>
              </Link>
              <Link href="/promotions">
                <Button variant="ghost" className="justify-start w-full">
                  Promotions
                </Button>
              </Link>

              {user ? (
                <>
                  <div className="px-3 py-2 text-sm font-medium border-t">Connecté en tant que {user.name}</div>
                  <Link href="/profil">
                    <Button variant="ghost" className="justify-start w-full">
                      <User className="h-4 w-4 mr-2" />
                      Mon Profil
                    </Button>
                  </Link>
                  {user.role === "admin" && (
                    <Link href="/admin">
                      <Button variant="ghost" className="justify-start w-full">
                        <Settings className="h-4 w-4 mr-2" />
                        Administration
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="ghost"
                    className="justify-start w-full text-destructive hover:text-destructive"
                    onClick={logout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Se déconnecter
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/connexion">
                    <Button variant="ghost" className="justify-start w-full">
                      <User className="h-4 w-4 mr-2" />
                      Connexion
                    </Button>
                  </Link>
                  <Link href="/inscription">
                    <Button className="justify-start w-full">Inscription</Button>
                  </Link>
                </>
              )}

              <Link href="/panier">
                <Button variant="ghost" className="justify-start w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Panier ({state.itemCount})
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
