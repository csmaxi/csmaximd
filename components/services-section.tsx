"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Target, Users, Palette, Mail, ArrowRight, TrendingUp, Megaphone } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "SEO & Posicionamiento Web",
      description: "Llevamos tu sitio web a la primera página de Google con estrategias SEO probadas y actualizadas.",
      features: ["Auditoría SEO completa", "Optimización on-page", "Link building", "Reportes mensuales"],
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Target,
      title: "Publicidad en Google/Meta Ads",
      description: "Campañas publicitarias optimizadas que maximizan tu ROI y generan conversiones reales.",
      features: ["Google Ads", "Facebook & Instagram Ads", "Optimización continua", "Análisis de conversiones"],
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Users,
      title: "Redes Sociales & Community Management",
      description: "Construimos y gestionamos tu comunidad digital con contenido que conecta y convierte.",
      features: ["Gestión de redes", "Creación de contenido", "Community management", "Estrategia de engagement"],
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: Palette,
      title: "Branding y Diseño Gráfico",
      description: "Creamos identidades visuales memorables que destacan tu marca en el mercado digital.",
      features: ["Diseño de logo", "Manual de marca", "Diseño web", "Material publicitario"],
      color: "from-purple-400 to-violet-600",
    },
    {
      icon: Mail,
      title: "Email Marketing & Funnels",
      description: "Automatizaciones de email que nutren leads y convierten prospectos en clientes fieles.",
      features: ["Email automation", "Funnels de conversión", "Segmentación avanzada", "A/B testing"],
      color: "from-orange-400 to-red-600",
    },
    {
      icon: TrendingUp,
      title: "Estrategia Digital Integral",
      description:
        "Desarrollamos estrategias completas que integran todos los canales digitales para maximizar resultados.",
      features: ["Análisis de mercado", "Estrategia multicanal", "KPIs y métricas", "Consultoría especializada"],
      color: "from-indigo-400 to-blue-600",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
            <Megaphone className="w-4 h-4 mr-2" />
            Nuestros Servicios
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluciones digitales que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              impulsan tu negocio
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ofrecemos un ecosistema completo de servicios de marketing digital diseñados para hacer crecer tu marca
            online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <CardHeader>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-slate-300 hover:bg-blue-500 hover:border-blue-500 hover:text-white group bg-transparent"
                >
                  Ver más detalles
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4">
            Solicitar cotización personalizada
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
