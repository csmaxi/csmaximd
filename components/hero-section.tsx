"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Agencia #1 en Resultados Digitales
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Hacemos que tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                marca crezca
              </span>{" "}
              en internet
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl">
              Transformamos tu presencia digital con estrategias de marketing que generan resultados reales. SEO,
              publicidad, redes sociales y más.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-4">
                Solicitá tu asesoría gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-4 bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver casos de éxito
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+200</div>
                <div className="text-slate-400 text-sm">Clientes Activos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">+500%</div>
                <div className="text-slate-400 text-sm">ROI Promedio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5 años</div>
                <div className="text-slate-400 text-sm">de Experiencia</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Team working on digital marketing"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">+150% Ventas</div>
                  <div className="text-xs text-slate-400">Este mes</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold">+50K Seguidores</div>
                  <div className="text-xs text-slate-400">Nuevos este mes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
