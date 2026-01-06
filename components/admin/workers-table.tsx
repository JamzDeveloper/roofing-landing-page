"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const mockWorkers = [
  {
    id: 1,
    nombre: "Miguel Hernández",
    tipo: "Cuadrilla",
    telefono: "(555) 777-8888",
    costoAproximado: 150,
    proyectoActual: "PRJ-001",
    estado: "Activo",
  },
  {
    id: 2,
    nombre: "José García",
    tipo: "Supervisor",
    telefono: "(555) 888-9999",
    costoAproximado: 200,
    proyectoActual: "PRJ-001",
    estado: "Activo",
  },
  {
    id: 3,
    nombre: "Luis Ramírez",
    tipo: "Cuadrilla",
    telefono: "(555) 999-0000",
    costoAproximado: 150,
    proyectoActual: null,
    estado: "Disponible",
  },
]

export function WorkersTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredWorkers = mockWorkers.filter((worker) => worker.nombre.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Card>
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar trabajadores..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Teléfono</TableHead>
            <TableHead>Costo/día</TableHead>
            <TableHead>Proyecto Actual</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredWorkers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell className="font-medium">{worker.nombre}</TableCell>
              <TableCell>
                <Badge variant={worker.tipo === "Supervisor" ? "default" : "secondary"}>{worker.tipo}</Badge>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">{worker.telefono}</TableCell>
              <TableCell className="font-medium">${worker.costoAproximado}/día</TableCell>
              <TableCell>
                {worker.proyectoActual ? (
                  <span className="font-mono text-sm">{worker.proyectoActual}</span>
                ) : (
                  <span className="text-sm text-muted-foreground">Sin asignar</span>
                )}
              </TableCell>
              <TableCell>
                <Badge
                  className={
                    worker.estado === "Activo"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                  }
                  variant="secondary"
                >
                  {worker.estado}
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
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Asignar proyecto</DropdownMenuItem>
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
