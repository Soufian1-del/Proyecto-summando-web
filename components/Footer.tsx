import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-gray-100">
      <div className="max-w-7xl mx-auto py-3">
        <div className="grid md:grid-cols-3 text-center">
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Mi Cuenta
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={''} >
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link href={''} >
                  Talleres Inscritos
                </Link>
              </li>
              <li>
                <Link href={''} >
                    Configuración
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Legales
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href={''} >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href={''} >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href={''} >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">
              Contáctanos
            </h3>
            <ul className="space-y-2">
              <li>Email: SoporteTalleres@FpLumara.com</li>
              <li>Teléfono: +34 656 26 12</li>
            <li>Chat-Bot</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}