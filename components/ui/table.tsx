export default function Table(){
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
                <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 "></td>
                    <td className="px-4 py-3 "></td>
                    <td className="px-4 py-3 "></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}