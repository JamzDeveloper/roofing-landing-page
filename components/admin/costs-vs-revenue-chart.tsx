"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Ene", costos: 18000, ingresos: 32000 },
  { month: "Feb", costos: 21000, ingresos: 38000 },
  { month: "Mar", costos: 23000, ingresos: 41000 },
  { month: "Abr", costos: 19000, ingresos: 35000 },
  { month: "May", costos: 25000, ingresos: 45000 },
  { month: "Jun", costos: 27000, ingresos: 48000 },
]

export function CostsVsRevenueChart() {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Costos vs Ingresos</CardTitle>
        <CardDescription>Análisis de rentabilidad mensual</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="month" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="costos" fill="hsl(var(--destructive))" radius={[8, 8, 0, 0]} />
            <Bar dataKey="ingresos" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
