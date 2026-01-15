import { InventoryTable } from "@/components/admin/inventory-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function InventarioPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Inventario</h1>
          <p className="text-muted-foreground mt-2">Control básico de materiales</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Material
        </Button>
      </div>

      <InventoryTable />
    </div>
  )
}
