import { LeadsTable } from "@/components/admin/leads-table"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Leads</h1>
          <p className="text-muted-foreground mt-2">Formularios de contacto recibidos</p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar
        </Button>
      </div>

      <LeadsTable />
    </div>
  )
}
