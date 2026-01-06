"use client"

import { Card } from "@/components/ui/card"
import { FileText, CheckCircle, Clock, DollarSign, TrendingUp, XCircle } from "lucide-react"

export function QuotesMetrics() {
  const metrics = [
    {
      label: "Total Cotizaciones",
      value: "47",
      icon: FileText,
      trend: "+12% vs mes anterior",
      color: "text-foreground",
      bgColor: "bg-foreground/10",
    },
    {
      label: "Aprobadas",
      value: "23",
      icon: CheckCircle,
      trend: "48.9% tasa de conversión",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      label: "Pendientes",
      value: "18",
      icon: Clock,
      trend: "Promedio 5 días respuesta",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      label: "Rechazadas",
      value: "6",
      icon: XCircle,
      trend: "12.8% del total",
      color: "text-red-600",
      bgColor: "bg-red-500/10",
    },
    {
      label: "Valor Total",
      value: "$458,300",
      icon: DollarSign,
      trend: "+23% vs mes anterior",
      color: "text-foreground",
      bgColor: "bg-foreground/10",
    },
    {
      label: "Valor Aprobado",
      value: "$234,100",
      icon: TrendingUp,
      trend: "51% del total",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.label} className="p-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-2xl font-bold font-display">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.trend}</p>
              </div>
              <div className={`${metric.bgColor} ${metric.color} p-2.5 rounded-lg`}>
                <Icon className="h-4 w-4" />
              </div>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
