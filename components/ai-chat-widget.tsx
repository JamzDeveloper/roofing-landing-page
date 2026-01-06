"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  const isLoading = status === "in_progress"

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = form.elements.namedItem("message") as HTMLInputElement
    const value = input.value.trim()

    if (value) {
      sendMessage({ text: value })
      input.value = ""
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] flex flex-col shadow-2xl border-border bg-card">
          {/* Header */}
          <div className="p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">ZPR AI Assistant</h3>
                <p className="text-xs opacity-80">Get instant roofing quotes & answers</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2">Welcome to ZPR Roofing!</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I can help you with quotes, scheduling, and any roofing questions.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {["Get a quote", "Schedule inspection", "Emergency repair"].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => sendMessage({ text: suggestion })}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {message.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-sm"
                      : "bg-secondary text-secondary-foreground rounded-tl-sm"
                  }`}
                >
                  {message.parts.map((part, i) => {
                    if (part.type === "text") {
                      return <p key={i}>{part.text}</p>
                    }
                    return null
                  })}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-secondary-foreground" />
                </div>
                <div className="bg-secondary p-3 rounded-2xl rounded-tl-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input name="message" placeholder="Ask about roofing..." className="flex-1" disabled={isLoading} />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
