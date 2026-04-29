export default function PageHeader() {
  return (
      <div>
          <div className="bg-white dark:bg-gray-800">
              <div className="flex flex-col items-">
                  <div className="w-screen float-left">
                      <h1 className="text-2xl font-bold text-white">
                          Gestion talleres escolares
                      </h1>
                      <p>
                          Sistema de coordinacion y seguimiento
                      </p>
                      <button className="flex flex-row justify-end float-right space-x-4 bg-lime-600 p-2 hover:bg-lime-700 rounded-full transition-colors">
                      Nuevo taller
                    </button>
                  </div>
                  <div className="flex flex-row justify-start space-x-4">
                      <button className="bg-lime-600 p-2 hover:bg-lime-700 rounded-full transition-colors">
                          dashboard
                      </button>
                      <br/>
                      <button className="bg-gray-400 p-2 hover:bg-gray-500 rounded-full transition-colors">
                          confirmacion semanal
                      </button>
                  </div>
              </div>
              </div>
      </div>
  )
}