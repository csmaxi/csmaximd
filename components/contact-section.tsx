"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Calendar,
  Zap,
} from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      value: "+54 9 11 1234-5678",
      action: "Chatear ahora",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Respuesta en 2 horas",
      value: "hola@novamarketing.com",
      action: "Enviar email",
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: Phone,
      title: "Teléfono",
      description: "Lun a Vie 9-18hs",
      value: "+54 11 4567-8900",
      action: "Llamar ahora",
      color: "from-purple-400 to-violet-600",
    },
    {
      icon: Calendar,
      title: "Reunión Virtual",
      description: "Agenda tu consulta",
      value: "30 min gratuitos",
      action: "Agendar cita",
      color: "from-orange-400 to-red-600",
    },
  ]

  const socialLinks = [
    { icon: Instagram, name: "Instagram", followers: "25K", url: "#" },
    { icon: Linkedin, name: "LinkedIn", followers: "15K", url: "#" },
    { icon: Twitter, name: "Twitter", followers: "8K", url: "#" },
    { icon: Youtube, name: "YouTube", followers: "12K", url: "#" },
  ]

  const offices = [
    {
      city: "Buenos Aires",
      address: "Av. Corrientes 1234, Piso 8",
      neighborhood: "Microcentro, CABA",
      phone: "+54 11 4567-8900",
    },
    {
      city: "Córdoba",
      address: "Av. Colón 567, Oficina 15",
      neighborhood: "Nueva Córdoba",
      phone: "+54 351 123-4567",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Contacto
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para hacer crecer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
              tu negocio?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conversemos sobre tus objetivos. Te ofrecemos una consultoría gratuita de 30 minutos para analizar tu
            situación actual y diseñar una estrategia personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Send className="w-6 h-6 mr-3 text-green-400" />
                  Envíanos tu consulta
                </CardTitle>
                <CardDescription className="text-slate-300">
                  Completa el formulario y te contactaremos en menos de 2 horas hábiles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Nombre completo *</label>
                    <Input
                      placeholder="Tu nombre"
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Teléfono</label>
                    <Input
                      placeholder="+54 9 11 1234-5678"
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Empresa</label>
                    <Input
                      placeholder="Nombre de tu empresa"
                      className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    ¿Qué servicios te interesan? *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["SEO", "Google Ads", "Redes Sociales", "Branding", "Email Marketing", "Consultoría"].map(
                      (service) => (
                        <label key={service} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-500 bg-slate-800 border-slate-600 rounded focus:ring-green-500"
                          />
                          <span className="text-slate-300 text-sm">{service}</span>
                        </label>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Presupuesto mensual estimado</label>
                  <select className="w-full px-3 py-2 bg-slate-800 border border-slate-600 text-white rounded-lg focus:outline-none focus:border-green-500">
                    <option value="">Selecciona un rango</option>
                    <option value="500-1000">$500 - $1,000 USD</option>
                    <option value="1000-2500">$1,000 - $2,500 USD</option>
                    <option value="2500-5000">$2,500 - $5,000 USD</option>
                    <option value="5000+">$5,000+ USD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Cuéntanos sobre tu proyecto *</label>
                  <Textarea
                    placeholder="Describe tu negocio, objetivos, desafíos actuales y qué esperas lograr con marketing digital..."
                    rows={4}
                    className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="w-4 h-4 text-green-500 bg-slate-800 border-slate-600 rounded focus:ring-green-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-300">
                    Acepto la política de privacidad y el tratamiento de mis datos personales
                  </label>
                </div>

                <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-lg py-4">
                  <Send className="mr-2 w-5 h-5" />
                  Enviar consulta gratuita
                </Button>

                <div className="flex items-center justify-center space-x-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>Respuesta garantizada en menos de 2 horas</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Methods & Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contacto directo</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} p-3 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">{method.title}</h4>
                          <p className="text-sm text-slate-400">{method.description}</p>
                          <p className="text-sm text-green-400 font-medium">{method.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Office Locations */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Nuestras oficinas</h3>
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <Card key={index} className="bg-slate-900/50 border-slate-800">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-white">{office.city}</h4>
                          <p className="text-sm text-slate-300">{office.address}</p>
                          <p className="text-sm text-slate-400">{office.neighborhood}</p>
                          <p className="text-sm text-blue-400 mt-1">{office.phone}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Síguenos</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card
                    key={index}
                    className="bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                  >
                    <CardContent className="p-4 text-center">
                      <social.icon className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h4 className="font-semibold text-white text-sm">{social.name}</h4>
                      <p className="text-xs text-slate-400">{social.followers} seguidores</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-500/30">
              <CardContent className="p-6 text-center">
                <Zap className="w-10 h-10 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">¿Necesitas resultados YA?</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Agenda una videollamada de 30 minutos y recibe un diagnóstico gratuito de tu situación digital.
                </p>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Calendar className="mr-2 w-4 h-4" />
                  Agendar consulta gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-slate-900/50 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">¿Prefieres que te llamemos nosotros?</h3>
          <p className="text-slate-300 mb-6">Déjanos tu número y te contactamos en el horario que prefieras</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Tu número de teléfono"
              className="bg-slate-800 border-slate-600 text-white placeholder-slate-400 focus:border-green-500"
            />
            <Button className="bg-green-500 hover:bg-green-600 px-6">
              <Phone className="mr-2 w-4 h-4" />
              Llamarme
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
