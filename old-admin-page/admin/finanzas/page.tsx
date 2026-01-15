import { FinancesSummary } from "@/components/admin/finances-summary"
import { FinancesTable } from "@/components/admin/finances-table"

export default function FinanzasPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-display font-bold text-foreground">Finanzas</h1>
        <p className="text-muted-foreground mt-2">Resumen financiero del negocio</p>
      </div>

      <FinancesSummary />
      <FinancesTable />
    </div>
  )
}
