"use client"

import { useState, useEffect } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2, Save } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Separator } from "@/components/ui/separator"

interface QuoteItem {
  id: string
  descripcion: string
  tipo: string
  cantidad: number
  unidad: string
  precioUnitario: number
  total: number
}

interface EditQuoteDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  quoteId: string
}

export function EditQuoteDialog({ open, onOpenChange, quoteId }: EditQuoteDialogProps) {
  const [items, setItems] = useState<QuoteItem[]>([
    {
      id: "1",
      descripcion: "Shingles GAF HDZ",
      tipo: "Material",
      cantidad: 250,
      unidad: "m²",
      precioUnitario: 35,
      total: 8750,
    },
  ])

  // Load quote data when dialog opens
  useEffect(() => {
    if (open && quoteId) {
      console.log("Loading quote data for editing:", quoteId)
      // In real app: API call to fetch quote details
    }
  }, [open, quoteId])

  const addItem = () => {
    const newItem: QuoteItem = {
      id: Date.now().toString(),
      descripcion: "",
      tipo: "Material",
      cantidad: 0,
      unidad: "m²",
      precioUnitario: 0,
      total: 0,
    }
    setItems([...items, newItem])
  }

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id))
    }
  }

  const updateItem = (id: string, field: keyof QuoteItem, value: any) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const updated = { ...item, [field]: value }
          if (field === "cantidad" || field === "precioUnitario") {
            updated.total = updated.cantidad * updated.precioUnitario
          }
          return updated
        }
        return item
      }),
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.total, 0)
  const iva = subtotal * 0.16
  const total = subtotal + iva

  const handleSave = () => {
    console.log("Updating quote:", quoteId, items)
    // In real app: API call to update quote
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-display">Editar Cotización</DialogTitle>
          <DialogDescription>Modifique los detalles de la cotización {quoteId}</DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6">
          <div className="space-y-6 pb-6">
            {/* Client & Project Info */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Información del Cliente
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="cliente">Cliente *</Label>
                    <Select defaultValue="1">
                      <SelectTrigger id="cliente">
                        <SelectValue placeholder="Seleccionar cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Juan Pérez</SelectItem>
                        <SelectItem value="2">María González</SelectItem>
                        <SelectItem value="3">Carlos Rodríguez</SelectItem>
                        <SelectItem value="new">+ Crear nuevo cliente</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="proyecto">Nombre del Proyecto *</Label>
                    <Input id="proyecto" defaultValue="Reemplazo de techo residencial" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="direccion">Dirección *</Label>
                    <Textarea id="direccion" defaultValue="123 Main Street, Houston TX 77001" rows={2} />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Detalles del Techo
                </h3>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="tipo-techo">Tipo de Techo *</Label>
                    <Select defaultValue="shingle">
                      <SelectTrigger id="tipo-techo">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="shingle">Shingle Asphalt</SelectItem>
                        <SelectItem value="metal">Metal (Standing Seam)</SelectItem>
                        <SelectItem value="tile">Teja (Clay/Concrete Tile)</SelectItem>
                        <SelectItem value="flat">Techo Plano (Flat Roof)</SelectItem>
                        <SelectItem value="tpo">TPO (Thermoplastic)</SelectItem>
                        <SelectItem value="epdm">EPDM (Rubber)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Área Total (m²) *</Label>
                    <Input id="area" type="number" defaultValue="250" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="fecha">Fecha</Label>
                      <Input id="fecha" type="date" defaultValue="2025-01-10" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="validez">Válida Hasta</Label>
                      <Input id="validez" type="date" defaultValue="2025-02-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Quote Items */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Items de la Cotización
                </h3>
                <Button onClick={addItem} size="sm" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Agregar Item
                </Button>
              </div>

              <div className="border rounded-lg overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="w-[250px]">Descripción</TableHead>
                      <TableHead className="w-[110px]">Tipo</TableHead>
                      <TableHead className="w-[90px]">Cant.</TableHead>
                      <TableHead className="w-[90px]">Unidad</TableHead>
                      <TableHead className="w-[110px]">Precio Unit.</TableHead>
                      <TableHead className="w-[110px]">Total</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Input
                            value={item.descripcion}
                            onChange={(e) => updateItem(item.id, "descripcion", e.target.value)}
                            placeholder="Ej: Shingles GAF HDZ"
                            className="h-9"
                          />
                        </TableCell>
                        <TableCell>
                          <Select value={item.tipo} onValueChange={(value) => updateItem(item.id, "tipo", value)}>
                            <SelectTrigger className="h-9">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Material">Material</SelectItem>
                              <SelectItem value="Mano de Obra">Mano de Obra</SelectItem>
                              <SelectItem value="Equipo">Equipo</SelectItem>
                              <SelectItem value="Otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={item.cantidad || ""}
                            onChange={(e) => updateItem(item.id, "cantidad", Number.parseFloat(e.target.value) || 0)}
                            min="0"
                            step="0.01"
                            className="h-9"
                          />
                        </TableCell>
                        <TableCell>
                          <Select value={item.unidad} onValueChange={(value) => updateItem(item.id, "unidad", value)}>
                            <SelectTrigger className="h-9">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="m²">m²</SelectItem>
                              <SelectItem value="pies²">pies²</SelectItem>
                              <SelectItem value="unidad">unidad</SelectItem>
                              <SelectItem value="hora">hora</SelectItem>
                              <SelectItem value="día">día</SelectItem>
                              <SelectItem value="rollo">rollo</SelectItem>
                              <SelectItem value="caja">caja</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <Input
                            type="number"
                            value={item.precioUnitario || ""}
                            onChange={(e) =>
                              updateItem(item.id, "precioUnitario", Number.parseFloat(e.target.value) || 0)
                            }
                            min="0"
                            step="0.01"
                            placeholder="$0.00"
                            className="h-9"
                          />
                        </TableCell>
                        <TableCell className="font-semibold">
                          ${item.total.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            disabled={items.length === 1}
                            className="h-9 w-9"
                          >
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Totals */}
              <div className="flex justify-end">
                <div className="w-80 space-y-2 bg-muted/30 rounded-lg p-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="font-medium">
                      ${subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">IVA (16%):</span>
                    <span className="font-medium">${iva.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Notes */}
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="notas">Notas Adicionales</Label>
                <Textarea
                  id="notas"
                  placeholder="Detalles importantes sobre el proyecto, condiciones especiales, etc."
                  rows={2}
                  defaultValue="Cliente prefiere tono oscuro"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="terminos">Términos y Condiciones</Label>
                <Textarea
                  id="terminos"
                  placeholder="Garantías, forma de pago, tiempo de ejecución..."
                  rows={3}
                  defaultValue="- 50% anticipo, 50% al terminar&#10;- Garantía 10 años materiales&#10;- 3-5 días instalación&#10;- Limpieza incluida"
                />
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="px-6 py-4 border-t bg-muted/30 flex-shrink-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
            <Save className="h-4 w-4 mr-2" />
            Guardar Cambios
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
