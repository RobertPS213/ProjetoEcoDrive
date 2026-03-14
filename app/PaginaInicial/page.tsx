import React from 'react';
import { Fuel, BarChart3, MapPin, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#070b14] text-white font-sans">
      <header className="bg-[#070b14]/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="text-emerald-500" size={28} />
            <span className="text-2xl font-bold tracking-tight text-white">EcoDrive</span>
          </div>
          <div className="flex gap-6 font-medium text-slate-400">
            <a href="#funcionalidades" className="hover:text-emerald-500 transition">Funcionalidades</a>
            <a href="#sobre" className="hover:text-emerald-500 transition">Sobre</a>
          </div>
        </nav>
      </header>
      <main>
        <section className="py-24 px-4 text-center bg-gradient-to-b from-[#070b14] to-[#0f172a]">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
            Monitore seu Consumo <br /> 
            <span className="text-emerald-500">Proteja seu Bolso</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            A solução inteligente para simular e acompanhar o gasto de combustível do seu veículo em tempo real.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/Login">
              <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/20 active:scale-[0.98]">
                Iniciar Simulação
              </button>
            </Link>
            <button className="bg-transparent border-2 border-slate-700 text-white px-8 py-3 rounded-lg font-semibold hover:border-emerald-500 transition">
              Ver Dashboard
            </button>
          </div>
        </section>
        <section id="funcionalidades" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Fuel className="text-emerald-500" size={32} />}
              title="Cálculo de Consumo"
              description="Algoritmos precisos baseados na distância e tipo de combustível utilizado."
            />
            <FeatureCard 
              icon={<BarChart3 className="text-emerald-500" size={32} />}
              title="Monitoramento"
              description="Gráficos intuitivos para você entender sua média mensal de gastos."
            />
            <FeatureCard 
              icon={<MapPin className="text-emerald-500" size={32} />}
              title="Rotas Otimizadas"
              description="Sugestões de trajetos para minimizar a emissão de CO2 e economizar."
            />
          </div>
        </section>
      </main>
      <footer className="bg-[#04060b] text-slate-500 py-12 px-4 text-center border-t border-slate-800">
        <p>© 2026 EcoDrive - Projeto de Desenvolvimento de Sistemas.</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-[#0f172a] p-8 rounded-2xl border border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all group">
      <div className="mb-4 bg-emerald-500/10 w-fit p-3 rounded-xl group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}