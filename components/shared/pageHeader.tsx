export default function PageHeader() {
  return (
      <div className="text-white">
          <div className="bg-lumara-primary dark:bg-lumara-dark-800">
              <div className="flex flex-col p-10">
                  <div className="float-left text-center mx-55">
                      <div className="float-left">
                          <h1 className="text-2xl font-bold text-white">
                              Gestion talleres escolares
                          </h1>
                          <p className="float-left">
                              Sistema de coordinacion y seguimiento
                          </p>
                      </div>
                      <button className="flex flex-row justify-end float-right space-x-4 bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors">
                      Nuevo taller
                    </button>
                  </div>
                  <div className="float-left text-center mx-55 flex flex-row justify-start space-x-4">
                      <button className="bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors">
                          dashboard
                      </button>
                      <br/>
                      <button className="bg-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors">
                          confirmacion semanal
                      </button>
                  </div>
              </div>
              </div>
      </div>
  )
}