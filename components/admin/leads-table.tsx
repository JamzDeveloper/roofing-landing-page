"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockLeads = [
  {
    id: 1,
    nombre: "Roberto Sánchez",
    email: "roberto@email.com",
    telefono: "(555) 111-2222",
    servicio: "Roof Repair",
    mensaje: "Necesito reparar algunas tejas rotas después de la tormenta",
    fecha: "2025-01-15",
    estado: "Nuevo",
  },
  {
    id: 2,
    nombre: "Laura Martínez",
    email: "laura@email.com",
    telefono: "(555) 333-4444",
    servicio: "New Installation",
    mensaje: "Construcción nueva, necesito cotización para techo completo",
    fecha: "2025-01-14",
    estado: "Contactado",
  },
  {
    id: 3,
    nombre: "Pedro López",
    email: "pedro@email.com",
    telefono: "(555) 555-6666",
    servicio: "Inspection",
    mensaje: "Inspección anual de mantenimiento",
    fecha: "2025-01-13",
    estado: "Convertido",
  },
]

export function LeadsTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredLeads = mockLeads.filter((lead) => {
    const matchesSearch = lead.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || lead.estado === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Nuevo":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
      case "Contactado":
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400"
      case "Convertido":
        return "bg-green-500/10 text-green-600 dark:text-green-400"
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <Card>
      <div className="p-4 border-b border-border flex gap-4 flex-col md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar leads..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Filtrar por estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="Nuevo">Nuevo</SelectItem>
            <SelectItem value="Contactado">Contactado</SelectItem>
            <SelectItem value="Convertido">Convertido</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Contacto</TableHead>
            <TableHead>Servicio</TableHead>
            <TableHead>Mensaje</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell className="text-sm text-muted-foreground">
                {new Date(lead.fecha).toLocaleDateString("es-ES")}
              </TableCell>
              <TableCell className="font-medium">{lead.nombre}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1 text-sm">
                  <div>{lead.telefono}</div>
                  <div className="text-muted-foreground">{lead.email}</div>
                </div>
              </TableCell>
              <TableCell className="text-sm">{lead.servicio}</TableCell>
              <TableCell className="max-w-xs">
                <p className="text-sm text-muted-foreground truncate">{lead.mensaje}</p>
              </TableCell>
              <TableCell>
                <Badge className={getStatusColor(lead.estado)} variant="secondary">
                  {lead.estado}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    <DropdownMenuItem>Marcar como contactado</DropdownMenuItem>
                    <DropdownMenuItem>Convertir a cliente</DropdownMenuItem>
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
