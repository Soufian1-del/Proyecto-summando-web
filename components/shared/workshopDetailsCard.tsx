import {discoverValidationDepths} from "next/dist/server/app-render/instant-validation/instant-validation";

export default function WorkshopDetailsCard() {
    return(
        <div className="w-fit px-3 py-2 border border-gray-300 rounded-lg bg-input-background  text-black">
            <div>
                <h2>Pintura y creatividad</h2>
                <p>Profesor: </p>
            </div>
            <div className="d-inline flex flex-row space-x-4">
                <div className=" px-3 py-2 border border-lime-400 rounded-lg bg-input-background w-50 bg-lime-300">
                    <p>Inscritos</p>
                    <p>1/20</p>
                </div>
                <div className=" px-3 py-2 border border-orange-400 rounded-lg bg-input-background w-50 bg-orange-300">
                    <p>Minimo requerido</p>
                    <p>8</p>
                </div>
                <div className=" px-3 py-2 border border-yellow-400 rounded-lg bg-input-background w-50 bg-yellow-300">
                    <p>Estado</p>
                    <p>pendiente</p>
                </div>
            </div>
            <p>detalles</p>
            <div className=" px-3 py-2 border border-gray-100 rounded-lg bg-input-background w-50 bg-gray">
                <p>Horario: </p>
                <p>Espacio: </p>
                <p>Descripcion</p>
            </div>
            <p>Lista inscripciones</p>
            <div>
                <h3 className="mb-3">Lista de Inscripciones</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left px-4 ">Alumno</th>
                            <th className="text-left px-4">Curso</th>
                            <th className="text-left px-4">Fecha Inscripción</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-gray-50">
                                <td className="px-4 py-3 "></td>
                                <td className="px-4 py-3 "></td>
                                <td className="px-4 py-3 "></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        </div>
    )
}