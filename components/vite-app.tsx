"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Rocket, Gauge, Package } from "lucide-react"

export function ViteApp() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Vite + React
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lightning fast frontend tooling. Get started building modern web applications with instant server start and
            lightning fast HMR.
          </p>
        </div>

        {/* Interactive Counter */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Interactive Counter
            </CardTitle>
            <CardDescription>Click the button to test React state management</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <div className="text-6xl font-bold text-purple-600 mb-4">{count}</div>
              <Button
                onClick={() => setCount(count + 1)}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              >
                Count is {count}
              </Button>
              <p className="text-sm text-gray-500">
                Edit <code className="bg-gray-100 px-2 py-1 rounded">components/vite-app.tsx</code> and save to test HMR
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Gauge className="w-5 h-5 text-green-500" />
                Lightning Fast
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Instant server start and lightning fast HMR that stays fast regardless of app size.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Package className="w-5 h-5 text-blue-500" />
                Rich Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5 text-purple-500" />
                Optimized Build
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Pre-configured Rollup build with multi-page and library mode support.</p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Tech Stack</CardTitle>
            <CardDescription>This app is built with modern web technologies</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                Vite
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                React 18
              </Badge>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                TypeScript
              </Badge>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Tailwind CSS
              </Badge>
              <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                Lucide Icons
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            Learn more about{" "}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:underline"
            >
              Vite
            </a>{" "}
            and{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              React
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
