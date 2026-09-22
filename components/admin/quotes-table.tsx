"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  MoreHorizontal,
  Search,
  FileDown,
  Eye,
  Edit,
  Trash,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle,
  XCircle,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ConvertToProjectDialog } from "./convert-to-project-dialog"
import { EditQuoteDialog } from "./edit-quote-dialog"
import { SendQuoteConfirmationDialog } from "./send-quote-confirmation-dialog"

const mockQuotes = [
  { id: "COT-001", cliente: "Juan Pérez", fecha: "2025-01-10", monto: 12500, estado: "Enviada" },
  { id: "COT-002", cliente: "María González", fecha: "2025-01-12", monto: 8900, estado: "Aprobada" },
  { id: "COT-003", cliente: "Carlos Rodríguez", fecha: "2025-01-14", monto: 15200, estado: "Draft" },
  { id: "COT-004", cliente: "Ana Torres", fecha: "2025-01-08", monto: 6700, estado: "Rechazada" },
  { id: "COT-005", cliente: "Luis Martínez", fecha: "2025-01-15", monto: 18900, estado: "Aprobada" },
  { id: "COT-006", cliente: "Sofia Hernández", fecha: "2025-01-16", monto: 9200, estado: "Enviada" },
  { id: "COT-007", cliente: "Pedro Sánchez", fecha: "2025-01-17", monto: 14500, estado: "Draft" },
  { id: "COT-008", cliente: "Laura Díaz", fecha: "2025-01-13", monto: 11300, estado: "Enviada" },
  { id: "COT-009", cliente: "Miguel Ángel", fecha: "2025-01-11", monto: 7800, estado: "Aprobada" },
  { id: "COT-010", cliente: "Carmen López", fecha: "2025-01-09", monto: 13400, estado: "Enviada" },
  { id: "COT-011", cliente: "Roberto García", fecha: "2025-01-07", monto: 9900, estado: "Rechazada" },
  { id: "COT-012", cliente: "Isabel Ruiz", fecha: "2025-01-18", monto: 16700, estado: "Draft" },
]

export function QuotesTable() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" }>({
    key: "fecha",
    direction: "desc",
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedQuote, setSelectedQuote] = useState<string | null>(null)
  const [isConvertDialogOpen, setIsConvertDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isSendDialogOpen, setIsSendDialogOpen] = useState(false)
  const [editingQuote, setEditingQuote] = useState<string | null>(null)
  const [sendingQuote, setSendingQuote] = useState<{ id: string; name: string; email: string } | null>(null)
  const itemsPerPage = 8

  // Filter and sort
  let filteredQuotes = mockQuotes.filter((quote) => {
    const matchesSearch =
      quote.cliente.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || quote.estado === statusFilter
    return matchesSearch && matchesStatus
  })

  filteredQuotes = [...filteredQuotes].sort((a, b) => {
    const aValue = a[sortConfig.key as keyof typeof a]
    const bValue = b[sortConfig.key as keyof typeof b]

    if (sortConfig.key === "fecha") {
      return sortConfig.direction === "asc"
        ? new Date(aValue as string).getTime() - new Date(bValue as string).getTime()
        : new Date(bValue as string).getTime() - new Date(aValue as string).getTime()
    }

    if (sortConfig.key === "monto") {
      return sortConfig.direction === "asc"
        ? (aValue as number) - (bValue as number)
        : (bValue as number) - (aValue as number)
    }

    return 0
  })

  // Pagination
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedQuotes = filteredQuotes.slice(startIndex, startIndex + itemsPerPage)

  const handleSort = (key: string) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Draft":
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
      case "Enviada":
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400"
      case "Aprobada":
        return "bg-green-500/10 text-green-600 dark:text-green-400"
      case "Rechazada":
        return "bg-red-500/10 text-red-600 dark:text-red-400"
      default:
        return "bg-gray-500/10 text-gray-600 dark:text-gray-400"
    }
  }

  const handleConvertToProject = (quoteId: string) => {
    setSelectedQuote(quoteId)
    setIsConvertDialogOpen(true)
  }

  const handleEditQuote = (quoteId: string) => {
    setEditingQuote(quoteId)
    setIsEditDialogOpen(true)
  }

  const handleSendQuote = (quoteId: string) => {
    const quote = mockQuotes.find((q) => q.id === quoteId)
    if (quote) {
      setSendingQuote({
        id: quote.id,
        name: quote.cliente,
        email: `${quote.cliente.toLowerCase().replace(" ", ".")}@ejemplo.com`,
      })
      setIsSendDialogOpen(true)
    }
  }

  const handleApproveQuote = (quoteId: string) => {
    console.log("Approving quote:", quoteId)
    // In real app: API call to update status to "Aprobada"
  }

  const handleRejectQuote = (quoteId: string) => {
    console.log("Rejecting quote:", quoteId)
    // In real app: API call to update status to "Rechazada"
  }

  return (
    <>
      <Card>
        <div className="p-4 border-b border-border space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por cliente o ID..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setCurrentPage(1)
                }}
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={(value) => {
                setStatusFilter(value)
                setCurrentPage(1)
              }}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Enviada">Enviada</SelectItem>
                <SelectItem value="Aprobada">Aprobada</SelectItem>
                <SelectItem value="Rechazada">Rechazada</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>
              Mostrando {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredQuotes.length)} de{" "}
              {filteredQuotes.length} cotizaciones
            </span>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8 data-[state=open]:bg-accent"
                  onClick={() => handleSort("fecha")}
                >
                  Fecha
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-ml-3 h-8 data-[state=open]:bg-accent"
                  onClick={() => handleSort("monto")}
                >
                  Monto
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>Estado</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedQuotes.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                  No se encontraron cotizaciones
                </TableCell>
              </TableRow>
            ) : (
              paginatedQuotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-mono font-medium">
                    <Link href={`/admin/cotizaciones/${quote.id}`} className="hover:underline">
                      {quote.id}
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium">{quote.cliente}</TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {new Date(quote.fecha).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="font-semibold">${quote.monto.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(quote.estado)} variant="secondary">
                      {quote.estado}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/cotizaciones/${quote.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            Ver detalles
                          </Link>
                        </DropdownMenuItem>

                        {quote.estado === "Draft" && (
                          <>
                            <DropdownMenuItem onClick={() => handleEditQuote(quote.id)}>
                              <Edit className="h-4 w-4 mr-2" />
                              Editar
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleSendQuote(quote.id)}>
                              <Send className="h-4 w-4 mr-2" />
                              Enviar al Cliente
                            </DropdownMenuItem>
                          </>
                        )}

                        {quote.estado === "Enviada" && (
                          <>
                            <DropdownMenuItem onClick={() => handleApproveQuote(quote.id)}>
                              <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
                              Marcar como Aprobada
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleRejectQuote(quote.id)}>
                              <XCircle className="h-4 w-4 mr-2 text-red-600" />
                              Marcar como Rechazada
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </>
                        )}

                        {quote.estado === "Aprobada" && (
                          <>
                            <DropdownMenuItem
                              onClick={() => handleConvertToProject(quote.id)}
                              className="text-blue-600 font-medium"
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Convertir a Proyecto
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                          </>
                        )}

                        <DropdownMenuItem>
                          <FileDown className="h-4 w-4 mr-2" />
                          Exportar PDF
                        </DropdownMenuItem>

                        {quote.estado === "Draft" && (
                          <DropdownMenuItem className="text-destructive">
                            <Trash className="h-4 w-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between p-4 border-t border-border">
          <div className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
            >
              Siguiente
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </Card>

      <EditQuoteDialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} quoteId={editingQuote || ""} />

      <SendQuoteConfirmationDialog
        open={isSendDialogOpen}
        onOpenChange={setIsSendDialogOpen}
        quoteId={sendingQuote?.id || ""}
        clientName={sendingQuote?.name || ""}
        clientEmail={sendingQuote?.email || ""}
      />

      <ConvertToProjectDialog
        open={isConvertDialogOpen}
        onOpenChange={setIsConvertDialogOpen}
        quoteId={selectedQuote || ""}
      />
    </>
  )
}
