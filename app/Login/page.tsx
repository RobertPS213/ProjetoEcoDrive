import Link from 'next/link';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <main className="min-h-screen bg-[#070b14] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-2xl shadow-2xl border border-slate-800">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Acesse sua conta</h2>
        <div className="flex flex-col gap-2 mb-4">
          <label className="text-slate-400 text-sm">E-mail</label>
          <input 
            type="email" 
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <label className="text-slate-400 text-sm">Senha</label>
          <input 
            type="password" 
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
        </div>
        <div className="flex justify-end mb-6">
          <button className="text-xs text-emerald-500 hover:text-emerald-400 hover:underline transition-all font-bold">
            Esqueceu a senha?
          </button>
        </div>
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]">
          Entrar no EcoDrive
        </button>
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-slate-800"></div>
          <span className="px-3 text-slate-500 text-xs uppercase">ou</span>
          <div className="flex-1 h-px bg-slate-800"></div>
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-3">
            Não tem uma conta?{" "}
            <Link href="/Registro" className="text-emerald-500 font-bold hover:text-emerald-400 hover:underline transition-all">
              Criar conta agora
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}