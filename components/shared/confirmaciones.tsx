export default function Confirmaciones() {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <div>
                <h1>Confirmacion semanal de asistencia </h1>
                <p>semana del XXXXXX al XXXXXX</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-full">
                <div>
                    <h1>Teatro</h1>
                    <p>Fecha exacta</p>
                    <p>Inscritos: </p>
                    <div className="text-white px-3 py-2 border border-lumara-secondary  rounded-lg bg-input-background w-50 bg-lumara-tertiary">
                        <p>Confirmados: </p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-full">
                <div>
                    <h1>Matematicas</h1>
                    <p>Fecha exacta</p>
                    <p>Inscritos: </p>
                    <div >
                        <form action="">
                            <input type="text" placeholder="alumnos que asistiran" className="bg-gray-200 border border-gray-300 rounded-lg text-center px-3 py-2 mt-2"/>
                            <input className="text-white px-3 py-2 border border-lumara-secondary hover:bg-lumara-secondary-hover rounded-lg bg-input-background w-50 bg-lumara-tertiary" type="submit" value="enviar"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}