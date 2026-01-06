import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, FileText, DollarSign, CheckCircle, AlertTriangle } from "lucide-react"

const metrics = [
  {
    title: "Proyectos Activos",
    value: "12",
    icon: Briefcase,
    description: "+2 desde el mes pasado",
    trend: "up",
  },
  {
    title: "Cotizaciones Pendientes",
    value: "8",
    icon: FileText,
    description: "Requieren atención",
    trend: "neutral",
  },
  {
    title: "Ingresos Estimados",
    value: "$45,000",
    icon: DollarSign,
    description: "Este mes",
    trend: "up",
  },
  {
    title: "Proyectos Finalizados",
    value: "34",
    icon: CheckCircle,
    description: "Este año",
    trend: "up",
  },
  {
    title: "Inventario Bajo",
    value: "5",
    icon: AlertTriangle,
    description: "Artículos por reabastecer",
    trend: "warning",
  },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {metrics.map((metric) => (
        <Card key={metric.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p
              className={`text-xs mt-1 ${
                metric.trend === "up"
                  ? "text-green-600 dark:text-green-400"
                  : metric.trend === "warning"
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-muted-foreground"
              }`}
            >
              {metric.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
