import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Talleres Escolares
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 text-black" >
            <Link href="/home">
              Home
            </Link>
            <Link href="/talleres">
              Talleres
            </Link>
            <Link href="/cursos">
              Cursos
            </Link>
          </nav>

          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all">
              Contacto
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};



