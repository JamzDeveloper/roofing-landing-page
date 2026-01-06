import { ProjectsTable } from "@/components/admin/projects-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProyectosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Proyectos</h1>
          <p className="text-muted-foreground mt-2">Control y seguimiento de proyectos</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Proyecto
        </Button>
      </div>

      <ProjectsTable />
    </div>
  )
}
