import Header from '@/components/Header';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md border border-red-50 text-center">
          
          <div className="flex justify-center mb-4">
            <div className=" rounded-full flex items-center justify-center">
              <span style={{ fontSize: '30px' }}>🔒</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">¡Inicia sesión!</h1>
          <p className="text-gray-500 mb-8">Introduce tus datos para entrar</p>

          <form className="flex flex-col gap-5">
            <div className="text-left">
              <label className="text-sm font-bold text-gray-700 ml-1">Usuario</label>
              <input
                type="text"
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 rounded-2xl "
                placeholder="Tu nombre de usuario"
              />
            </div>

            <div className="text-left">
              <label className="text-sm font-bold text-gray-700 ml-1">Contraseña</label>
              <input
                type="password"
                className="w-full mt-1 p-3 bg-gray-50 border border-gray-200 "
                placeholder="Contraseña"
              />
            </div>

            <button 
              type="submit" 
              className=" text-black p-4 rounded-2xl font-bold text-lg "
            >
                <Link href="/home">
              Entrar
                </Link>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}