'use client'

import { useEffect } from 'react'

export function ChatbotWidget() {
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.id = 'vectorshift-chat-widget'
    script.src = 'https://app.vectorshift.ai/chatWidget.js'
    script.setAttribute('chatbot-id', '694560713a21ec44eacbc709')
    script.setAttribute('chatbot-height', '600px')
    script.setAttribute('chatbot-width', '400px')

    document.body.appendChild(script)

    return () => {
      const existingScript = document.getElementById('vectorshift-chat-widget')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return null
}
