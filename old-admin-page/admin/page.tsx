import { DashboardMetrics } from "@/components/admin/dashboard-metrics"
import { ProjectsChart } from "@/components/admin/projects-chart"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { CostsVsRevenueChart } from "@/components/admin/costs-vs-revenue-chart"

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Métricas generales de tu negocio</p>
      </div>

      <DashboardMetrics />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ProjectsChart />
        <RevenueChart />
        <CostsVsRevenueChart />
      </div>
    </div>
  )
}
