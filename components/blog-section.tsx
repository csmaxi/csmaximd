"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, BookOpen, TrendingUp } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const articles = [
    {
      title: "10 Estrategias de SEO que Funcionan en 2024",
      excerpt:
        "Descubre las técnicas más efectivas para posicionar tu sitio web en Google y aumentar tu tráfico orgánico.",
      image: "/placeholder.svg?height=200&width=300",
      category: "SEO",
      readTime: "8 min",
      date: "15 Dic 2023",
      author: "Valentina López",
    },
    {
      title: "Cómo Crear Campañas de Facebook Ads que Conviertan",
      excerpt:
        "Guía completa para diseñar anuncios en Facebook e Instagram que generen resultados reales para tu negocio.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Paid Media",
      readTime: "12 min",
      date: "12 Dic 2023",
      author: "Diego Martínez",
    },
    {
      title: "Branding Digital: Construye una Marca Memorable Online",
      excerpt: "Los elementos clave para desarrollar una identidad digital sólida que conecte con tu audiencia.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Branding",
      readTime: "10 min",
      date: "8 Dic 2023",
      author: "Mateo García",
    },
    {
      title: "Email Marketing: Automatizaciones que Venden Solas",
      excerpt: "Aprende a crear secuencias de email que nutren leads y convierten prospectos en clientes fieles.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Email Marketing",
      readTime: "15 min",
      date: "5 Dic 2023",
      author: "Sofia Rodríguez",
    },
    {
      title: "Redes Sociales para B2B: Estrategias que Funcionan",
      excerpt: "Cómo usar LinkedIn, Twitter y otras plataformas para generar leads de calidad en mercados B2B.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Social Media",
      readTime: "9 min",
      date: "1 Dic 2023",
      author: "Camila Torres",
    },
    {
      title: "Marketing Automation: Escala tu Negocio Digitalmente",
      excerpt: "Herramientas y estrategias para automatizar tu marketing y liberar tiempo para tareas estratégicas.",
      image: "/placeholder.svg?height=200&width=300",
      category: "Automation",
      readTime: "11 min",
      date: "28 Nov 2023",
      author: "Sebastián Ruiz",
    },
  ]

  const categories = ["Todos", "SEO", "Paid Media", "Branding", "Email Marketing", "Social Media", "Automation"]

  return (
    <section id="blog" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog & Recursos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Aprende marketing digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">
              con los expertos
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Artículos, guías y recursos gratuitos para hacer crecer tu negocio online. Contenido actualizado
            semanalmente por nuestro equipo de especialistas.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={
                index === 0
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "border-slate-600 text-slate-300 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <Card className="bg-slate-800/50 border-slate-700 mb-12 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-indigo-500 hover:bg-indigo-600">Destacado</Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-slate-700 text-slate-300">{articles[0].category}</Badge>
                <h3 className="text-2xl font-bold text-white mb-4">{articles[0].title}</h3>
                <p className="text-slate-300 mb-6">{articles[0].excerpt}</p>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {articles[0].date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {articles[0].readTime}
                    </div>
                  </div>
                  <span>Por {articles[0].author}</span>
                </div>

                <Button className="bg-indigo-500 hover:bg-indigo-600 w-fit">
                  Leer artículo completo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {articles.slice(1).map((article, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-indigo-500/50 transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-slate-800/80 text-slate-300">{article.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-lg text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-slate-300 mb-4">{article.excerpt}</CardDescription>

                <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">Por {article.author}</span>
                  <Button variant="ghost" size="sm" className="text-indigo-400 hover:text-indigo-300 p-0">
                    Leer más
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500/30">
          <CardContent className="p-8 text-center">
            <TrendingUp className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Recibe tips de marketing en tu inbox</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Únete a más de 5,000 emprendedores que reciben semanalmente estrategias, casos de estudio y recursos
              exclusivos para hacer crecer su negocio online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email aquí..."
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
              />
              <Button className="bg-indigo-500 hover:bg-indigo-600 px-6">
                Suscribirme
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <p className="text-xs text-slate-400 mt-4">Sin spam. Cancela cuando quieras. 100% gratuito.</p>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white bg-transparent"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
