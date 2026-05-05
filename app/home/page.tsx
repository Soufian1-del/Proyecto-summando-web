import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Header />
      
      <main className="flex-1 flex flex-col items-center dark:bg-black pt-20">
        <h1 className="text-3xl font-bold">Inicio</h1>

      <div className="bg-back dark:bg-black pt-28 ">
          <h3> Noticias</h3>
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