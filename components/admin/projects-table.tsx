"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, Search } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card } from "@/components/ui/card"

const mockProjects = [
  {
    id: "PRJ-001",
    nombre: "Reparación Techo Residencial",
    cliente: "Juan Pérez",
    estado: "En Progreso",
    progreso: 65,
    fechaInicio: "2025-01-05",
    fechaFin: "2025-01-25",
    montoEstimado: 12500,
    montoReal: 11200,
  },
  {
    id: "PRJ-002",
    nombre: "Instalación Techo Comercial",
    cliente: "María González",
    estado: "Planeado",
    progreso: 0,
    fechaInicio: "2025-01-20",
    fechaFin: "2025-02-15",
    montoEstimado: 35000,
    montoReal: null,
  },
  {
    id: "PRJ-003",
    nombre: "Mantenimiento Preventivo",
    cliente: "Carlos Rodríguez",
    estado: "Finalizado",
    progreso: 100,
    fechaInicio: "2024-12-10",
    fechaFin: "2024-12-20",
    montoEstimado: 4500,
    montoReal: 4200,
  },
]

export function ProjectsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = mockProjects.filter(
    (project) =>
      project.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.cliente.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Planeado":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
      case "En Progreso":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
      case "Finalizado":
        return "bg-green-500/10 text-green-600 dark:text-green-400"
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
    }
  }

  return (
    <Card>
      <div className="p-4 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar proyectos..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Proyecto</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Progreso</TableHead>
            <TableHead>Fechas</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell className="font-mono font-medium">{project.id}</TableCell>
              <TableCell className="font-medium">{project.nombre}</TableCell>
              <TableCell>{project.cliente}</TableCell>
              <TableCell>
                <Badge className={getStatusColor(project.estado)} variant="secondary">
                  {project.estado}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={project.progreso} className="w-20" />
                  <span className="text-sm text-muted-foreground">{project.progreso}%</span>
                </div>
              </TableCell>
              <TableCell className="text-sm text-muted-foreground">
                <div className="flex flex-col">
                  <span>{new Date(project.fechaInicio).toLocaleDateString("es-ES")}</span>
                  <span>{new Date(project.fechaFin).toLocaleDateString("es-ES")}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col text-sm">
                  <span className="text-muted-foreground">Est: ${project.montoEstimado.toLocaleString()}</span>
                  {project.montoReal && (
                    <span className="font-medium">Real: ${project.montoReal.toLocaleString()}</span>
                  )}
                </div>
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
                    <DropdownMenuItem>Actualizar progreso</DropdownMenuItem>
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
