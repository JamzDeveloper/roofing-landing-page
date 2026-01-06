"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, AlertTriangle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const mockInventory = [
  {
    id: 1,
    material: "Tejas de asfalto",
    categoria: "Tejas",
    stockActual: 500,
    stockMinimo: 200,
    unidad: "piezas",
    costoUnitario: 8.5,
  },
  {
    id: 2,
    material: "Membrana impermeabilizante",
    categoria: "Impermeabilización",
    stockActual: 45,
    stockMinimo: 50,
    unidad: "rollos",
    costoUnitario: 125,
  },
  {
    id: 3,
    material: "Clavos para techo",
    categoria: "Fijación",
    stockActual: 2000,
    stockMinimo: 500,
    unidad: "unidades",
    costoUnitario: 0.15,
  },
  {
    id: 4,
    material: "Madera para estructura",
    categoria: "Estructura",
    stockActual: 80,
    stockMinimo: 100,
    unidad: "tablas",
    costoUnitario: 22,
  },
  {
    id: 5,
    material: "Sellador para techos",
    categoria: "Sellado",
    stockActual: 15,
    stockMinimo: 30,
    unidad: "galones",
    costoUnitario: 45,
  },
]

export function InventoryTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInventory = mockInventory.filter((item) =>
    item.material.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const isLowStock = (item: (typeof mockInventory)[0]) => item.stockActual <= item.stockMinimo

  return (
    <Card>
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar materiales..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Material</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead>Stock Actual</TableHead>
            <TableHead>Stock Mínimo</TableHead>
            <TableHead>Costo Unitario</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.material}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{item.categoria}</TableCell>
              <TableCell>
                <span className={isLowStock(item) ? "text-amber-600 dark:text-amber-400 font-medium" : ""}>
                  {item.stockActual} {item.unidad}
                </span>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                {item.stockMinimo} {item.unidad}
              </TableCell>
              <TableCell className="font-medium">${item.costoUnitario}</TableCell>
              <TableCell>
                {isLowStock(item) ? (
                  <Badge variant="secondary" className="bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Bajo stock
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 dark:text-green-400">
                    Normal
                  </Badge>
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Ajustar stock</DropdownMenuItem>
                    <DropdownMenuItem>Ver historial</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Eliminar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}
