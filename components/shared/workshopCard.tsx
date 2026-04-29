export default function WorkshopCard() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <div>
                <h2 className="text-1xl font-bold text-black">Nombre del taller</h2>
                <p className="bg-lime-500 w-fit rounded-lg p-1">clase</p>
                <p>descripcion</p>
                <p>Profesor: </p>
                <p>horario</p>
                <p>Sitio</p>
                <button className="bg-lime-500 rounded-lg p-1">
                    ver detalles
                </button>
            </div>
        </div>
    )
}