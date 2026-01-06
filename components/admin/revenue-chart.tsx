"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Ene", ingresos: 32000 },
  { month: "Feb", ingresos: 38000 },
  { month: "Mar", ingresos: 41000 },
  { month: "Abr", ingresos: 35000 },
  { month: "May", ingresos: 45000 },
  { month: "Jun", ingresos: 48000 },
]

export function RevenueChart() {
  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Ingresos Mensuales</CardTitle>
        <CardDescription>Últimos 6 meses</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
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
            <Line type="monotone" dataKey="ingresos" stroke="hsl(var(--primary))" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
