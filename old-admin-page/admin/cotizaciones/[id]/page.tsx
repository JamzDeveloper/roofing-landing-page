"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Send, Edit, CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

export default function CotizacionDetailPage() {
  const cotizacion = {
    id: "COT-001",
    cliente: {
      nombre: "Juan Pérez",
      email: "juan.perez@email.com",
      telefono: "(555) 123-4567",
      direccion: "123 Main Street, Houston, TX 77001",
    },
    proyecto: {
      nombre: "Reemplazo de Techo Residencial",
      direccion: "123 Main Street, Houston, TX 77001",
      tipoTecho: "Shingle Asphalt",
      area: 250,
    },
    fecha: "2025-01-10",
    validezHasta: "2025-02-10",
    estado: "Enviada",
    items: [
      {
        id: "1",
        descripcion: "Shingles GAF Timberline HDZ - Color: Charcoal",
        tipo: "Material",
        cantidad: 260,
        unidad: "m²",
        precioUnitario: 25.5,
        total: 6630,
      },
      {
        id: "2",
        descripcion: "Underlayment sintético (rollo de 15m)",
        tipo: "Material",
        cantidad: 18,
        unidad: "rollo",
        precioUnitario: 45,
        total: 810,
      },
      {
        id: "3",
        descripcion: "Ice & Water Shield (áreas críticas)",
        tipo: "Material",
        cantidad: 50,
        unidad: "m²",
        precioUnitario: 12,
        total: 600,
      },
      {
        id: "4",
        descripcion: "Ridge Cap Shingles",
        tipo: "Material",
        cantidad: 25,
        unidad: "unidad",
        precioUnitario: 35,
        total: 875,
      },
      {
        id: "5",
        descripcion: "Clavos para techos (caja 5kg)",
        tipo: "Material",
        cantidad: 8,
        unidad: "caja",
        precioUnitario: 28,
        total: 224,
      },
      {
        id: "6",
        descripcion: "Remoción de techo existente",
        tipo: "Mano de Obra",
        cantidad: 250,
        unidad: "m²",
        precioUnitario: 8,
        total: 2000,
      },
      {
        id: "7",
        descripcion: "Instalación de nuevo techo (incluye mano de obra)",
        tipo: "Mano de Obra",
        cantidad: 250,
        unidad: "m²",
        precioUnitario: 15,
        total: 3750,
      },
      {
        id: "8",
        descripcion: "Instalación de ventilación (ridge vents)",
        tipo: "Mano de Obra",
        cantidad: 1,
        unidad: "día",
        precioUnitario: 450,
        total: 450,
      },
      {
        id: "9",
        descripcion: "Renta de dumpster (10 yardas)",
        tipo: "Equipo",
        cantidad: 1,
        unidad: "unidad",
        precioUnitario: 380,
        total: 380,
      },
      {
        id: "10",
        descripcion: "Limpieza y disposición de escombros",
        tipo: "Otro",
        cantidad: 1,
        unidad: "unidad",
        precioUnitario: 280,
        total: 280,
      },
    ],
    notas:
      "El proyecto incluye la remoción completa del techo existente y la instalación de un nuevo sistema de techado de alta calidad. Se inspeccionará el deck y se reemplazarán las áreas dañadas. Se instalarán nuevos flashings alrededor de chimeneas y ventilaciones.",
    terminos: `- 50% de anticipo al firmar el contrato, 50% al completar el proyecto
- Garantía de 10 años en mano de obra
- Garantía de fabricante en materiales (GAF: 25 años)
- Tiempo estimado de instalación: 3-5 días hábiles
- Limpieza completa del área con imanes al finalizar
- Permiso de construcción incluido en el precio`,
  }

  const subtotal = cotizacion.items.reduce((sum, item) => sum + item.total, 0)
  const iva = subtotal * 0.16
  const total = subtotal + iva

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/admin/cotizaciones">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-display font-bold text-foreground">{cotizacion.id}</h1>
              <Badge
                className={
                  cotizacion.estado === "Aprobada" ? "bg-green-500/10 text-green-600" : "bg-blue-500/10 text-blue-600"
                }
                variant="secondary"
              >
                {cotizacion.estado}
              </Badge>
            </div>
            <p className="text-muted-foreground mt-2">{cotizacion.proyecto.nombre}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Editar
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
          {cotizacion.estado === "Enviada" && (
            <>
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent">
                <CheckCircle className="h-4 w-4 mr-2" />
                Aprobar
              </Button>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
                <XCircle className="h-4 w-4 mr-2" />
                Rechazar
              </Button>
            </>
          )}
          {cotizacion.estado === "Draft" && (
            <Button>
              <Send className="h-4 w-4 mr-2" />
              Enviar al Cliente
            </Button>
          )}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Información del Cliente</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Nombre</p>
              <p className="font-medium">{cotizacion.cliente.nombre}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">{cotizacion.cliente.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Teléfono</p>
              <p className="font-medium">{cotizacion.cliente.telefono}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Dirección</p>
              <p className="font-medium">{cotizacion.cliente.direccion}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Detalles del Proyecto</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Tipo de Techo</p>
              <p className="font-medium">{cotizacion.proyecto.tipoTecho}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Área Total</p>
              <p className="font-medium">{cotizacion.proyecto.area} m²</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Fecha de Cotización</p>
              <p className="font-medium">{new Date(cotizacion.fecha).toLocaleDateString("es-ES")}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Válida Hasta</p>
              <p className="font-medium">{new Date(cotizacion.validezHasta).toLocaleDateString("es-ES")}</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Desglose de Costos</h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[350px]">Descripción</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead className="text-right">Cantidad</TableHead>
                <TableHead>Unidad</TableHead>
                <TableHead className="text-right">Precio Unit.</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cotizacion.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.descripcion}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {item.tipo}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">{item.cantidad}</TableCell>
                  <TableCell>{item.unidad}</TableCell>
                  <TableCell className="text-right">
                    ${item.precioUnitario.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    ${item.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Separator className="my-6" />

        <div className="flex justify-end">
          <div className="w-80 space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="font-medium">${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">IVA (16%):</span>
              <span className="font-medium">${iva.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>
            <Separator className="my-2" />
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-3">Notas Adicionales</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{cotizacion.notas}</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-3">Términos y Condiciones</h2>
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{cotizacion.terminos}</p>
        </Card>
      </div>
    </div>
  )
}
