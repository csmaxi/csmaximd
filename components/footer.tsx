"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react"

export function Footer() {
  const footerLinks = {
    servicios: [
      { name: "SEO & Posicionamiento", href: "#" },
      { name: "Google & Meta Ads", href: "#" },
      { name: "Redes Sociales", href: "#" },
      { name: "Branding & Diseño", href: "#" },
      { name: "Email Marketing", href: "#" },
      { name: "Consultoría Digital", href: "#" },
    ],
    empresa: [
      { name: "Nosotros", href: "#nosotros" },
      { name: "Casos de Éxito", href: "#casos" },
      { name: "Blog", href: "#blog" },
      { name: "Carreras", href: "#" },
      { name: "Contacto", href: "#contacto" },
      { name: "Prensa", href: "#" },
    ],
    recursos: [
      { name: "Guías Gratuitas", href: "#" },
      { name: "Herramientas", href: "#" },
      { name: "Webinars", href: "#" },
      { name: "Podcast", href: "#" },
      { name: "Newsletter", href: "#" },
      { name: "Centro de Ayuda", href: "#" },
    ],
    legal: [
      { name: "Términos y Condiciones", href: "#" },
      { name: "Política de Privacidad", href: "#" },
      { name: "Política de Cookies", href: "#" },
      { name: "GDPR", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Youtube, href: "#", name: "YouTube" },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Newsletter Section */}
      <div className="border-b border-slate-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Mantente al día con las últimas tendencias</h3>
              <p className="text-slate-300">
                Recibe tips exclusivos, casos de estudio y estrategias de marketing digital directamente en tu inbox.
                Sin spam, solo contenido de valor.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  placeholder="Tu email aquí..."
                  className="bg-slate-900 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 px-6">
                  Suscribirme
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-400">
                Únete a más de 5,000 profesionales que ya reciben nuestro newsletter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold mb-6 block">
              <span className="text-white">Nova</span>
              <span className="text-blue-500">Marketing</span>
            </Link>
            <p className="text-slate-300 mb-6 max-w-md">
              Somos la agencia de marketing digital que transforma negocios a través de estrategias innovadoras y
              resultados medibles. Tu crecimiento es nuestra pasión.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>hola@novamarketing.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+54 11 4567-8900</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-slate-400 text-sm">© 2024 NovaMarketing. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="text-slate-500 hover:text-slate-300 text-xs transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>en Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
