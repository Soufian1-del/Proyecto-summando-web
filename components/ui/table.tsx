export interface tableValues {
    nombre: string;
    curso: string;
    fecha: string;
}
interface tableValuesProps{
    alumnos: tableValues[];
}
export default function Table({alumnos}: tableValuesProps){
    return(
    <div>
        <h3 className="mt-5">Lista de Inscripciones</h3>
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
                {alumnos.map((alumno) => (
                <tr key={alumno.nombre} className="hover:bg-gray-50">
                    <td className="px-4 py-3 ">{alumno.nombre}</td>
                    <td className="px-4 py-3 ">{alumno.curso}</td>
                    <td className="px-4 py-3 ">{alumno.fecha}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    </div>
    )
}