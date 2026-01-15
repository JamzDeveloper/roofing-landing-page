import { ClientsTable } from "@/components/admin/clients-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Clientes</h1>
          <p className="text-muted-foreground mt-2">Gestiona tu base de clientes</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Cliente
        </Button>
      </div>

      <ClientsTable />
    </div>
  )
}
