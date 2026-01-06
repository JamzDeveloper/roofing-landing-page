"use client"

import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockFinances = [
  {
    id: "PRJ-001",
    proyecto: "Reparación Techo Residencial",
    cliente: "Juan Pérez",
    ingreso: 12500,
    costo: 7800,
    margen: 4700,
    porcentaje: 37.6,
    mes: "Enero 2025",
  },
  {
    id: "PRJ-002",
    proyecto: "Instalación Comercial",
    cliente: "María González",
    ingreso: 35000,
    costo: 22000,
    margen: 13000,
    porcentaje: 37.1,
    mes: "Enero 2025",
  },
  {
    id: "PRJ-003",
    proyecto: "Mantenimiento Preventivo",
    cliente: "Carlos Rodríguez",
    ingreso: 4200,
    costo: 2100,
    margen: 2100,
    porcentaje: 50.0,
    mes: "Diciembre 2024",
  },
]

export function FinancesTable() {
  return (
    <Card>
      <div className="p-4 border-b border-border">
        <h3 className="font-semibold">Detalle por Proyecto</h3>
        <p className="text-sm text-muted-foreground">Ingresos, costos y márgenes</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Proyecto</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Mes</TableHead>
            <TableHead className="text-right">Ingreso</TableHead>
            <TableHead className="text-right">Costo</TableHead>
            <TableHead className="text-right">Margen</TableHead>
            <TableHead className="text-right">Margen %</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockFinances.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-mono font-medium">{item.id}</TableCell>
              <TableCell className="font-medium">{item.proyecto}</TableCell>
              <TableCell>{item.cliente}</TableCell>
              <TableCell className="text-sm text-muted-foreground">{item.mes}</TableCell>
              <TableCell className="text-right font-medium text-green-600 dark:text-green-400">
                ${item.ingreso.toLocaleString()}
              </TableCell>
              <TableCell className="text-right text-red-600 dark:text-red-400">
                ${item.costo.toLocaleString()}
              </TableCell>
              <TableCell className="text-right font-bold">${item.margen.toLocaleString()}</TableCell>
              <TableCell className="text-right font-medium">{item.porcentaje}%</TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-muted/50 font-bold">
            <TableCell colSpan={4} className="text-right">
              TOTAL:
            </TableCell>
            <TableCell className="text-right text-green-600 dark:text-green-400">
              ${mockFinances.reduce((sum, item) => sum + item.ingreso, 0).toLocaleString()}
            </TableCell>
            <TableCell className="text-right text-red-600 dark:text-red-400">
              ${mockFinances.reduce((sum, item) => sum + item.costo, 0).toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              ${mockFinances.reduce((sum, item) => sum + item.margen, 0).toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              {(
                (mockFinances.reduce((sum, item) => sum + item.margen, 0) /
                  mockFinances.reduce((sum, item) => sum + item.ingreso, 0)) *
                100
              ).toFixed(1)}
              %
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
