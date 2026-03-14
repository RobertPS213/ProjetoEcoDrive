import Link from 'next/link';

export default function Home(){
  return (
    <main className="min-h-screen bg-[#070b14] text-white flex flex-col items-center justify-center p-6 font-sans">
      <title>EcoDrive | Bem-vindo</title>
      <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 mb-4">
        EcoDrive
      </h1>
      <p className="text-slate-400 text-lg max-w-md text-center mb-8 leading-relaxed">
        Monitore seu consumo de combustível e <span className="text-emerald-500 font-medium">economize dinheiro</span> em tempo real.
      </p>
      <Link href="/Login">
        <button className="bg-emerald-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-500 hover:scale-105 transition-all shadow-xl shadow-emerald-900/20 active:scale-95">
          Começar Simulação
        </button>
      </Link>
    </main>
  )
}