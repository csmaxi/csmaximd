"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"

export function PlansSection() {
  const plans = [
    {
      name: "Básico",
      subtitle: "Ideal para emprendedores",
      price: "$299",
      period: "/mes",
      description: "Perfecto para comenzar tu presencia digital",
      icon: Zap,
      color: "from-blue-400 to-cyan-600",
      popular: false,
      features: [
        "Gestión de 2 redes sociales",
        "10 publicaciones mensuales",
        "Diseño básico de contenido",
        "Reporte mensual básico",
        "Soporte por email",
        "Configuración inicial gratuita",
      ],
      notIncluded: ["Publicidad paga", "SEO avanzado", "Email marketing"],
    },
    {
      name: "Profesional",
      subtitle: "Para empresas en crecimiento",
      price: "$599",
      period: "/mes",
      description: "La opción más popular para resultados consistentes",
      icon: Star,
      color: "from-purple-400 to-pink-600",
      popular: true,
      features: [
        "Gestión de 4 redes sociales",
        "20 publicaciones mensuales",
        "Diseño profesional de contenido",
        "Campañas publicitarias básicas ($200 ad spend incluido)",
        "SEO básico (5 keywords)",
        "Email marketing (hasta 1000 contactos)",
        "Reporte detallado mensual",
        "Soporte prioritario",
        "Consultoría estratégica mensual",
      ],
      notIncluded: ["Desarrollo web", "Branding completo"],
    },
    {
      name: "Premium",
      subtitle: "Para empresas establecidas",
      price: "$1,199",
      period: "/mes",
      description: "Solución integral para máximo crecimiento",
      icon: Crown,
      color: "from-yellow-400 to-orange-600",
      popular: false,
      features: [
        "Gestión completa de redes sociales",
        "Contenido ilimitado",
        "Diseño premium y branding",
        "Campañas publicitarias avanzadas ($500 ad spend incluido)",
        "SEO completo (20+ keywords)",
        "Email marketing avanzado (contactos ilimitados)",
        "Desarrollo y mantenimiento web",
        "Reportes semanales detallados",
        "Soporte 24/7",
        "Consultoría estratégica semanal",
        "Account manager dedicado",
      ],
      notIncluded: [],
    },
  ]

  return (
    <section id="planes" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Planes y Precios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Elige el plan perfecto{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              para tu negocio
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Todos nuestros planes incluyen estrategia personalizada, reportes detallados y soporte especializado
          </p>
          <div className="inline-flex items-center bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
            🎉 Primer mes con 30% de descuento en todos los planes
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 hover:bg-purple-600">
                  Más Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${plan.color} p-4 mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                <CardDescription className="text-slate-400">{plan.subtitle}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-300 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3 opacity-50">
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0">
                        <div className="w-4 h-4 border border-slate-500 rounded-sm"></div>
                      </div>
                      <span className="text-slate-500 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular ? "bg-purple-500 hover:bg-purple-600" : "bg-slate-700 hover:bg-slate-600"
                  }`}
                  size="lg"
                >
                  {plan.popular ? "Comenzar ahora" : "Seleccionar plan"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-xs text-slate-400 text-center">Sin permanencia • Cancela cuando quieras</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16 space-y-4">
          <p className="text-slate-300">¿Necesitas algo personalizado?</p>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
          >
            Solicitar cotización personalizada
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
