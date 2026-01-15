"use client"

import { QuotesTable } from "@/components/admin/quotes-table"
import { QuotesMetrics } from "@/components/admin/quotes-metrics"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { CreateQuoteDialog } from "@/components/admin/create-quote-dialog"

export default function CotizacionesPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold text-foreground">Cotizaciones</h1>
          <p className="text-muted-foreground mt-2">Gestiona tus cotizaciones y propuestas</p>
        </div>
        <Button onClick={() => setIsCreateDialogOpen(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Nueva Cotización
        </Button>
      </div>

      <QuotesMetrics />

      <QuotesTable />

      <CreateQuoteDialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen} />
    </div>
  )
}
