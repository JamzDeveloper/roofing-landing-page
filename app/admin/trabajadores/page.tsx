import { WorkersTable } from "@/components/admin/workers-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function TrabajadoresPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Trabajadores</h1>
          <p className="text-muted-foreground mt-2">Gestiona tu equipo de trabajo</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Trabajador
        </Button>
      </div>

      <WorkersTable />
    </div>
  )
}
