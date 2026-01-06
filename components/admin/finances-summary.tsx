import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react"

const financialData = [
  {
    title: "Ingresos Totales",
    value: "$124,500",
    change: "+12.5%",
    trend: "up",
    icon: TrendingUp,
  },
  {
    title: "Costos Totales",
    value: "$78,200",
    change: "+8.2%",
    trend: "up",
    icon: TrendingDown,
  },
  {
    title: "Margen Bruto",
    value: "$46,300",
    change: "+18.3%",
    trend: "up",
    icon: DollarSign,
  },
  {
    title: "Margen %",
    value: "37.2%",
    change: "+2.1%",
    trend: "up",
    icon: Percent,
  },
]

export function FinancesSummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {financialData.map((item) => (
        <Card key={item.title} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs mt-1 text-green-600 dark:text-green-400">{item.change} vs mes anterior</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
