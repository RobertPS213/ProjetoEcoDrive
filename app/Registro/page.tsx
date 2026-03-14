import Link from 'next/link';

export default function Registro() {
  return (
    <main className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl shadow-2xl border border-slate-800">
        <h2 className="text-2xl font-bold text-white text-center mb-2">Crie sua conta</h2>
        <p className="text-slate-400 text-sm text-center mb-8">Comece a monitorar seu consumo hoje</p>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-slate-400 text-sm">Nome Completo</label>
          <input 
            type="text" 
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-slate-400 text-sm">E-mail</label>
          <input 
            type="email" 
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <label className="text-slate-400 text-sm">Crie uma senha</label>
          <input 
            type="password" 
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
        </div>
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98] mb-6">
          Cadastrar no EcoDrive
        </button>
        <div className="text-center pt-4 border-t border-slate-800">
          <p className="text-slate-400 text-sm">
            Já possui uma conta?{" "}
            <Link href="/Login" className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline transition-all">
              Fazer login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}