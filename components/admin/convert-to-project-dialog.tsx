"use client"

import { useState } from "react"
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
import { CheckCircle2, Calendar, Users, Package, AlertCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"

interface ConvertToProjectDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  quoteId: string
}

export function ConvertToProjectDialog({ open, onOpenChange, quoteId }: ConvertToProjectDialogProps) {
  const [selectedWorkers, setSelectedWorkers] = useState<string[]>([])

  // Mock data for the quote 
  const quoteData = {
    id: quoteId,
    cliente: "Juan Pérez",
    proyecto: "Reemplazo de Techo Residencial",
    monto: 12500,
    area: 250,
    tipoTecho: "Shingle Asphalt",
  }

  // Mock workers
  const availableWorkers = [
    { id: "1", nombre: "Carlos Martínez", especialidad: "Supervisor", disponible: true },
    { id: "2", nombre: "Luis Hernández", especialidad: "Instalador Senior", disponible: true },
    { id: "3", nombre: "Miguel Ángel", especialidad: "Instalador", disponible: false },
    { id: "4", nombre: "Roberto García", especialidad: "Instalador", disponible: true },
    { id: "5", nombre: "Pedro Sánchez", especialidad: "Ayudante", disponible: true },
  ]

  // Mock materials needed
  const materialsNeeded = [
    { id: "1", nombre: "Shingles GAF Timberline HDZ", cantidad: 260, unidad: "m²", disponible: 180 },
    { id: "2", nombre: "Underlayment sintético", cantidad: 18, unidad: "rollo", disponible: 25 },
    { id: "3", nombre: "Ice & Water Shield", cantidad: 50, unidad: "m²", disponible: 80 },
    { id: "4", nombre: "Ridge Cap Shingles", cantidad: 25, unidad: "unidad", disponible: 15 },
    { id: "5", nombre: "Clavos para techos", cantidad: 8, unidad: "caja", disponible: 20 },
  ]

  const handleConvert = () => {
    const insufficientMaterials = materialsNeeded.filter((m) => m.disponible < m.cantidad)

    if (insufficientMaterials.length > 0) {
      console.log("[v0] Warning: Insufficient materials detected:", insufficientMaterials)
      // In real app: Show confirmation dialog about ordering materials
    }

    console.log("[v0] Converting quote to project:", {
      quoteId,
      workers: selectedWorkers,
      startDate: document.getElementById("fecha-inicio")?.value,
      endDate: document.getElementById("fecha-fin")?.value,
      priority: document.getElementById("prioridad")?.value,
    })
    // In real app: API call to create project and update quote status to "Convertida"
    onOpenChange(false)
  }

  const toggleWorker = (workerId: string) => {
    setSelectedWorkers((prev) => (prev.includes(workerId) ? prev.filter((id) => id !== workerId) : [...prev, workerId]))
  }

  // Removed toggleMaterial function as materials are no longer selected manually

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            Convertir a Proyecto
          </DialogTitle>
          <DialogDescription>
            Configure los detalles del proyecto para la cotización <span className="font-semibold">{quoteId}</span>
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[calc(90vh-180px)] px-6">
          <div className="space-y-6 pb-6">
            {/* Quote Summary */}
            <div className="bg-muted/50 rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-sm">Resumen de la Cotización</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Cliente</p>
                  <p className="font-medium">{quoteData.cliente}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Proyecto</p>
                  <p className="font-medium">{quoteData.proyecto}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Tipo de Techo</p>
                  <p className="font-medium">{quoteData.tipoTecho}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Área</p>
                  <p className="font-medium">{quoteData.area} m²</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Valor Total</p>
                  <p className="font-semibold text-lg">${quoteData.monto.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Project Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Fechas del Proyecto</h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fecha-inicio">Fecha de Inicio *</Label>
                  <Input id="fecha-inicio" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fecha-fin">Fecha Estimada de Finalización *</Label>
                  <Input id="fecha-fin" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="prioridad">Prioridad del Proyecto</Label>
                <Select defaultValue="media">
                  <SelectTrigger id="prioridad">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="baja">Baja</SelectItem>
                    <SelectItem value="media">Media</SelectItem>
                    <SelectItem value="alta">Alta</SelectItem>
                    <SelectItem value="urgente">Urgente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Assign Workers */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Asignar Trabajadores</h3>
                <Badge variant="secondary" className="ml-auto">
                  {selectedWorkers.length} seleccionados
                </Badge>
              </div>

              <div className="border rounded-lg divide-y">
                {availableWorkers.map((worker) => (
                  <div
                    key={worker.id}
                    className="flex items-center justify-between p-3 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={`worker-${worker.id}`}
                        checked={selectedWorkers.includes(worker.id)}
                        onCheckedChange={() => toggleWorker(worker.id)}
                        disabled={!worker.disponible}
                      />
                      <div>
                        <label htmlFor={`worker-${worker.id}`} className="font-medium text-sm cursor-pointer">
                          {worker.nombre}
                        </label>
                        <p className="text-xs text-muted-foreground">{worker.especialidad}</p>
                      </div>
                    </div>
                    {worker.disponible ? (
                      <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                        Disponible
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200">
                        No disponible
                      </Badge>
                    )}
                  </div>
                ))}
              </div>

              {selectedWorkers.length === 0 && (
                <div className="flex items-center gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  <span>Se recomienda asignar al menos un supervisor y dos instaladores</span>
                </div>
              )}
            </div>

            <Separator />

            {/* Assign Materials */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Package className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Materiales Necesarios</h3>
                <Badge variant="secondary" className="ml-auto">
                  Validación de Stock
                </Badge>
              </div>

              <p className="text-sm text-muted-foreground">
                Los materiales se asignarán automáticamente del inventario cuando el proyecto inicie. Revise el stock
                disponible.
              </p>

              <div className="border rounded-lg divide-y">
                {materialsNeeded.map((material) => {
                  const hasSufficient = material.disponible >= material.cantidad
                  return (
                    <div key={material.id} className="flex items-center justify-between p-3">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{material.nombre}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span>
                            Necesario:{" "}
                            <span className="font-medium text-foreground">
                              {material.cantidad} {material.unidad}
                            </span>
                          </span>
                          <span>|</span>
                          <span
                            className={
                              hasSufficient
                                ? "text-green-600 dark:text-green-400 font-medium"
                                : "text-red-600 dark:text-red-400 font-medium"
                            }
                          >
                            Stock: {material.disponible} {material.unidad}
                          </span>
                        </div>
                      </div>
                      {hasSufficient ? (
                        <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                          Disponible
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-red-500/10 text-red-600 border-red-200">
                          Pedir {material.cantidad - material.disponible} {material.unidad}
                        </Badge>
                      )}
                    </div>
                  )
                })}
              </div>

              {materialsNeeded.some((m) => m.disponible < m.cantidad) && (
                <div className="flex items-start gap-2 text-sm text-amber-600 bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg border border-amber-200 dark:border-amber-800">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium">Stock insuficiente detectado</p>
                    <p className="text-xs mt-1">
                      Algunos materiales necesitan pedirse antes de iniciar el proyecto. El inventario se reservará
                      automáticamente al crear el proyecto.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <Separator />

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="notas-proyecto">Notas del Proyecto</Label>
              <Textarea
                id="notas-proyecto"
                placeholder="Instrucciones especiales, consideraciones de seguridad, acceso al sitio, etc."
                rows={3}
              />
            </div>
          </div>
        </ScrollArea>

        <DialogFooter className="px-6 py-4 border-t bg-muted/30">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button
            onClick={handleConvert}
            disabled={selectedWorkers.length === 0}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Crear Proyecto
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
