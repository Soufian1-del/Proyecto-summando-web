import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      
      <main className="flex-1 flex flex-col items-center pt-20 pb-12 px-4">
        
        <div className="text-center mb-10">
          <p className="text-gray-500 mt-2 text-lg">Bienvenido al sistema de gestión de Talleres Escolares</p>
        </div>

        <div style={{ marginTop: '10px' }}>
          <img 
            src="/Talleres.jpg" 
            style={{ width: '1200px', height: '500px' }} 
          />
        </div>

              {/* TALLERES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-700 mb-4 border-b pb-2">Talleres Escolares</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex h-32">
              <img 
                src="https://edukaland.com/wp-content/uploads/2021/03/robotica-educativa-2021.jpg" 
                style={{ width: '500px', height: '350px' }}  
              />
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-amber-600 uppercase">Tecnología</span>
                <h4 className="font-bold text-gray-800">Robótica</h4>
                <p className="text-xs text-gray-500 line-clamp-2">Inscripciones abiertas para nuevos grupos(Mínimo grupos de 5 estudiantes).</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex h-32">
              <img 
                src="https://www.fcbarcelona.com/photo-resources/2025/10/21/c1bf54c9-4072-4c45-bc5a-f70a622f1dc9/Bar-a-Escola-Futsal.jpg?width=1200&height=750" 
                style={{ width: '500px', height: '350px' }} 
              />
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-green-600 uppercase">Deportes</span>
                <h4 className="font-bold text-gray-800">Fútbol Sala</h4>
                <p className="text-xs text-gray-500 line-clamp-2">Entrenamientos en el polideportivo del Islazul.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex h-32">
              <img 
                src="https://www.teteducation.com/web/wp-content/uploads/2017/10/influye-la-musica-en-los-ninos-teteducation.jpg" 
                style={{ width: '500px', height: '350px' }} 
              />
              <div className="p-4 flex flex-col justify-center">
                <span className="text-[10px] font-bold text-purple-600 uppercase">Cultura</span>
                <h4 className="font-bold text-gray-800">Música</h4>
                <p className="text-xs text-gray-500 line-clamp-2">Clases de guitarra en el aula de música.</p>
              </div>
            </div>
          </section>

            <div className="p-10 rounded-[2rem] flex flex-col justify-between text-black ">
              <div className=" text-center mb-10">
                <h2 className="mb-10 text-3xl font-bold mb-4">Inscripciones Rápidas</h2>
                <p>
                  Si quieres inscribirte en alguno de nuestros talleres, haz clic en el botón de abajo para ver la lista completa de todos nuestros talleres en FpLumara.
                </p>
                <p>
                  ¡No pierdas la oportunidad de aprender algo nuevo y divertido!
                </p>
              </div>
            
            <Link 
              href="/talleres" 
              className="bg-white text-blue-600 text-center py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg active:scale-95"
            >
              Ver Talleres Disponibles
            </Link>
          </div>

        </div>

      </main>
        <div className="bg-gray-100 dark:bg-gray-900">
            <p className="text-center text-gray-600 dark:text-gray-400 py-2">
              © 2026 Talleres Escolares. Todos los derechos reservados.
            </p>
        </div>

      <Footer />
    </div>
  );
}
