"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

interface SendQuoteConfirmationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  quoteId: string
  clientName: string
  clientEmail?: string
}

export function SendQuoteConfirmationDialog({
  open,
  onOpenChange,
  quoteId,
  clientName,
  clientEmail = "",
}: SendQuoteConfirmationDialogProps) {
  const [email, setEmail] = useState(clientEmail)
  const [message, setMessage] = useState(
    `Estimado/a ${clientName},\n\nAdjunto encontrará la cotización ${quoteId} para el proyecto de roofing solicitado.\n\nQuedamos atentos a sus comentarios.\n\nSaludos cordiales,\nZPR Roofing`,
  )

  const handleSend = () => {
    console.log("Sending quote to client:", {
      quoteId,
      email,
      message,
    })
    // In real app: API call to send email and update quote status to "Enviada"
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-display flex items-center gap-2">
            <Send className="h-5 w-5 text-blue-600" />
            Enviar Cotización al Cliente
          </DialogTitle>
          <DialogDescription>
            Esta acción enviará la cotización {quoteId} por correo electrónico al cliente y cambiará su estado a
            "Enviada"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Cotización:</span>
              <span className="text-muted-foreground">{quoteId}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Cliente:</span>
              <span className="text-muted-foreground">{clientName}</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="email">Email del Cliente *</Label>
            <Input
              id="email"
              type="email"
              placeholder="cliente@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje del Email</Label>
            <Textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="resize-none"
            />
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 text-sm">
            <p className="text-blue-800 dark:text-blue-300">
              El PDF de la cotización se adjuntará automáticamente al correo electrónico.
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancelar
          </Button>
          <Button onClick={handleSend} disabled={!email} className="bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4 mr-2" />
            Enviar Cotización
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
