"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Code, Zap, Package, Gauge, Star } from "lucide-react"

export function MainApp() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Main App</h1>
    </div>
  )
}
