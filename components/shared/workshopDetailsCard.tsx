import {discoverValidationDepths} from "next/dist/server/app-render/instant-validation/instant-validation";
import GroupIcon from '@mui/icons-material/Group';
import MovingIcon from '@mui/icons-material/Moving';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';


export default function WorkshopDetailsCard() {
    return(
        <div className="w-fit px-3 py-2 border border-gray-300 rounded-lg bg-input-background text-black font-montserrat
">
            <div className="mt-5">
                <h2 className="mt-5 text-2xl font-bold text-black">Pintura y creatividad</h2>
                <p className="">Profesor: </p>
            </div>
            <hr className="w-full border border-gray-300" />
            <div className="d-inline flex flex-row space-x-4 ">
                <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
                    <p className="text-lumara-font"><GroupIcon  className="mr-2"/>Inscritos</p>
                    <p className="text-xl text-black mt-2 font-extralight">1/20</p>
                </div>
                <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
                    <p className="text-lumara-font "><MovingIcon className="mr-2"/>Minimo requerido</p>
                    <p className="text-xl text-black mt-2 font-extralight">8</p>
                </div>
                <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
                    <p className="text-lumara-font"><CalendarTodayIcon className="mr-2"/>Estado</p>
                    <p className="text-xl text-black mt-2 font-extralight">pendiente</p>
                </div>
            </div>
            <p className="text-lg mt-5">detalles</p>
            <div className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-input-background w-50 bg-gray-50 leading-9">
                <p className="text-sm"><CalendarTodayIcon className="mr-2" sx={{ fontSize: 15 }}/>Horario: </p>
                <p className="text-sm mt-3"><LocationPinIcon className="mr-2" sx={{ fontSize: 15 }}/>Espacio: </p>
                <p className="text-sm mt-3">Descripcion</p>
            </div>
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
        </div>
    )
}