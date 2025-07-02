"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Heart, Target, Lightbulb, Award, Coffee } from "lucide-react"
import Image from "next/image"

export function TeamSection() {
  const team = [
    {
      name: "Sofia Rodríguez",
      role: "CEO & Estratega Digital",
      image: "/placeholder.svg?height=300&width=300",
      bio: "10+ años liderando transformaciones digitales. Especialista en growth hacking y estrategias de conversión.",
      skills: ["Estrategia Digital", "Growth Hacking", "Liderazgo"],
    },
    {
      name: "Mateo García",
      role: "Director Creativo",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Diseñador gráfico y director de arte con experiencia en marcas internacionales. Experto en branding digital.",
      skills: ["Branding", "Diseño UX/UI", "Dirección de Arte"],
    },
    {
      name: "Valentina López",
      role: "SEO & Content Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Especialista en SEO técnico y marketing de contenidos. Ha posicionado +100 sitios web en primeras posiciones.",
      skills: ["SEO Técnico", "Content Marketing", "Analytics"],
    },
    {
      name: "Diego Martínez",
      role: "Paid Media Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Experto en publicidad digital con certificaciones en Google y Meta. Gestiona +$2M anuales en ad spend.",
      skills: ["Google Ads", "Facebook Ads", "Optimización ROI"],
    },
    {
      name: "Camila Torres",
      role: "Social Media Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Community manager y creadora de contenido. Ha construido comunidades de +500K seguidores para diversas marcas.",
      skills: ["Community Management", "Content Creation", "Influencer Marketing"],
    },
    {
      name: "Sebastián Ruiz",
      role: "Developer & Automation",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Desarrollador full-stack especializado en automatizaciones de marketing y integraciones CRM.",
      skills: ["Desarrollo Web", "Marketing Automation", "Integraciones"],
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Cada estrategia está diseñada para generar ROI medible y crecimiento sostenible.",
    },
    {
      icon: Heart,
      title: "Pasión por el Cliente",
      description: "Tu éxito es nuestro éxito. Trabajamos como una extensión de tu equipo.",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Siempre a la vanguardia de las últimas tendencias y tecnologías digitales.",
    },
    {
      icon: Award,
      title: "Excelencia Profesional",
      description: "Certificaciones internacionales y formación continua de todo el equipo.",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4 mr-2" />
            Nuestro Equipo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Conoce a los{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">
              expertos digitales
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Un equipo multidisciplinario de especialistas apasionados por hacer crecer tu negocio en el mundo digital
          </p>
        </div>

        {/* Company Story */}
        <div className="bg-slate-900/50 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Nuestra Historia</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  NovaMarketing nació en 2019 con una misión clara: democratizar el marketing digital para empresas de
                  todos los tamaños. Comenzamos como un pequeño equipo de freelancers apasionados por los resultados.
                </p>
                <p>
                  Hoy somos una agencia consolidada que ha ayudado a más de 200 empresas a transformar su presencia
                  digital, generando millones en ingresos adicionales para nuestros clientes.
                </p>
                <p>
                  Nuestro enfoque data-driven y nuestra obsesión por la innovación nos han convertido en la agencia de
                  referencia para empresas que buscan resultados reales y medibles.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="NovaMarketing team working"
                width={600}
                height={400}
                className="rounded-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-xl">
                <div className="text-2xl font-bold">5 años</div>
                <div className="text-sm">de experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-orange-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <Coffee className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-orange-400 font-medium mb-4">{member.role}</p>
                <p className="text-slate-300 text-sm mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-6">Nuestros Valores</h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-12">
            Los principios que guían cada proyecto y cada relación con nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
              <p className="text-slate-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
