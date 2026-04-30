import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export default function WorkshopCard() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit font-Inter">
            <div>
                <h2 className="text-1xl font-bold text-black">Nombre del taller</h2>
                <p className="text-white border border-lumara-primaryy bg-lumara-quaternary w-fit rounded-full pl-3 pr-3">clase</p>
                <p>descripcion</p>
                <p>Profesor: </p>
                <p>horario</p>
                <p>Sitio</p>
                <button className="w-full bg-lumara-tertiary border border-lumara-tertiary hover:bg-lumara-secondary-hover rounded-lg p-1 text-white">
                    ver detalles
                </button>
            </div>
        </div>
    )

}