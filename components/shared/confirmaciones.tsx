export default function Confirmaciones() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <div>
                <h1>Confirmacion semanal de asistencia </h1>
                <p>semana del XXXXXX al XXXXXX</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-full">
                <div>
                    <h1>Teatro</h1>
                    <p>Fecha exacta</p>
                    <p>Inscritos: </p>
                    <div className=" px-3 py-2 border border-lime-400 rounded-lg bg-input-background w-50 bg-lime-200">
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
                            <input type="text" placeholder="alumnos que asistiran"/>
                            <input className=" px-3 py-2 border border-lime-400 rounded-lg bg-input-background w-50 bg-lime-200" type="submit" value="enviar"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}