"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search, Mail, Phone } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const mockClients = [
  {
    id: 1,
    nombre: "Juan Pérez",
    telefono: "(555) 123-4567",
    email: "juan@email.com",
    direccion: "Calle Principal 123",
    tipo: "Residencial",
    proyectos: 2,
  },
  {
    id: 2,
    nombre: "María González",
    telefono: "(555) 234-5678",
    email: "maria@email.com",
    direccion: "Av. Secundaria 456",
    tipo: "Comercial",
    proyectos: 1,
  },
  {
    id: 3,
    nombre: "Carlos Rodríguez",
    telefono: "(555) 345-6789",
    email: "carlos@email.com",
    direccion: "Boulevard 789",
    tipo: "Residencial",
    proyectos: 3,
  },
]

export function ClientsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredClients = mockClients.filter((client) => client.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Card>
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar clientes..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cliente</TableHead>
            <TableHead>Contacto</TableHead>
            <TableHead>Dirección</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Proyectos</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredClients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.nombre}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-3 w-3 text-muted-foreground" />
                    {client.telefono}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    {client.email}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{client.direccion}</TableCell>
              <TableCell>
                <Badge variant={client.tipo === "Comercial" ? "default" : "secondary"}>{client.tipo}</Badge>
              </TableCell>
              <TableCell>{client.proyectos}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
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
