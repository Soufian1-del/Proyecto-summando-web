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
            src="https://www.emagister.com/blog/wp-content/uploads/2019/11/talleres-infantiles.jpg" 
            style={{ width: '1200px', height: '500px' }} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          
          <section className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-bold text-gray-800">Últimas Noticias</h2>
            </div>

            <div className="space-y-4">
              <div >
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4">
                  <div className="bg-amber-100 p-3 rounded-xl text-2xl">🤖</div>
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Tecnología</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-1 leading-tight">
                      Plazo abierto: Talleres de robótica
                    </h4>
                    <p className="text-gray-500 text-sm mt-2">
                      Inscripciones disponibles para el nuevo curso de programación y robótica.
                    </p>
                  </div>
                </div>
              </div>

              <div >
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4">
                  <div className="bg-green-100 p-3 rounded-xl text-2xl">⚽</div>
                  <div>
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Deportes</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-1 leading-tight">
                      Mínimo alcanzado en Deporte
                    </h4>
                    <p className="text-gray-500 text-sm mt-2">
                      El taller de fútbol sala ha completado el cupo y comenzará este lunes.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-2xl">🎵</div>
                  <div>
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Cultura</span>
                    <h4 className="text-lg font-bold text-gray-900 mt-1 leading-tight">
                      Aula de música: Nuevos horarios
                    </h4>
                    <p className="text-gray-500 text-sm mt-2">
                      Las clases de guitarra se trasladan a la sala B del edificio central.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

            <div className="p-10 rounded-[2rem] flex flex-col justify-between text-black ">
              <div>
                <h2 className="text-3xl font-bold mb-4">Inscripciones Rápidas</h2>
                <p className="text-blue-100 text-lg leading-relaxed mb-10">
                  Si quieres inscribirte en alguno de nuestros talleres, haz clic en el botón de abajo para ver la lista completa de opciones disponibles. ¡No pierdas la oportunidad de aprender algo nuevo y divertido!
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
