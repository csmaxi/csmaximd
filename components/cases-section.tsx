"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Users, DollarSign, Eye } from "lucide-react"
import Image from "next/image"

export function CasesSection() {
  const cases = [
    {
      client: "TechStart Solutions",
      industry: "Tecnología",
      image: "/placeholder.svg?height=300&width=400",
      problem: "Startup sin presencia digital visible",
      strategy: "SEO + Google Ads + LinkedIn",
      results: [
        { metric: "Tráfico web", value: "+450%", icon: Eye },
        { metric: "Leads calificados", value: "+280%", icon: Users },
        { metric: "Ventas", value: "+320%", icon: DollarSign },
        { metric: "ROI", value: "650%", icon: TrendingUp },
      ],
      testimonial:
        "NovaMarketing transformó completamente nuestro negocio digital. En 6 meses pasamos de ser invisibles a liderar nuestro sector online.",
      author: "María González, CEO",
    },
    {
      client: "Bella Vita Spa",
      industry: "Belleza & Bienestar",
      image: "/placeholder.svg?height=300&width=400",
      problem: "Baja ocupación y competencia local intensa",
      strategy: "Instagram + Facebook Ads + Google My Business",
      results: [
        { metric: "Reservas online", value: "+380%", icon: Users },
        { metric: "Seguidores", value: "+15K", icon: Eye },
        { metric: "Engagement", value: "+520%", icon: TrendingUp },
        { metric: "Ingresos", value: "+240%", icon: DollarSign },
      ],
      testimonial:
        "Increíble cómo lograron posicionarnos como el spa de referencia en la zona. Nuestras redes sociales ahora son nuestra principal fuente de clientes.",
      author: "Ana Martínez, Propietaria",
    },
    {
      client: "EcoHome Construcciones",
      industry: "Construcción Sustentable",
      image: "/placeholder.svg?height=300&width=400",
      problem: "Mercado nicho con audiencia específica",
      strategy: "SEO técnico + Content Marketing + LinkedIn Ads",
      results: [
        { metric: "Posición Google", value: "Top 3", icon: TrendingUp },
        { metric: "Consultas", value: "+190%", icon: Users },
        { metric: "Proyectos", value: "+85%", icon: DollarSign },
        { metric: "Autoridad web", value: "+300%", icon: Eye },
      ],
      testimonial:
        "Nos ayudaron a educar al mercado sobre construcción sustentable mientras generábamos leads de alta calidad. Excelente trabajo estratégico.",
      author: "Carlos Ruiz, Director Comercial",
    },
  ]

  return (
    <section id="casos" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Casos de Éxito
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Resultados que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              hablan por sí solos
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre cómo transformamos negocios reales con estrategias digitales efectivas y medibles
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((case_, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 overflow-hidden">
              <CardContent className="p-0">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={case_.image || "/placeholder.svg"}
                      alt={case_.client}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600">{case_.industry}</Badge>
                  </div>

                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{case_.client}</h3>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-red-400 font-semibold mb-2">❌ Problema:</h4>
                        <p className="text-slate-300">{case_.problem}</p>
                      </div>

                      <div>
                        <h4 className="text-yellow-400 font-semibold mb-2">🎯 Estrategia:</h4>
                        <p className="text-slate-300">{case_.strategy}</p>
                      </div>

                      <div>
                        <h4 className="text-green-400 font-semibold mb-4">✅ Resultados:</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {case_.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="bg-slate-800/50 rounded-lg p-4 text-center">
                              <result.icon className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                              <div className="text-xs text-slate-400">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
                      <p className="text-slate-300 italic mb-2">&ldquo{case_.testimonial}&rdquo</p>
                      <cite className="text-blue-400 font-semibold">— {case_.author}</cite>
                    </blockquote>

                    <Button
                      variant="outline"
                      className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white w-fit bg-transparent"
                    >
                      Ver caso completo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4">
            Ver todos nuestros casos de éxito
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
