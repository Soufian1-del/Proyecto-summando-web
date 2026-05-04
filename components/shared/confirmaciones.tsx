import GroupIcon from '@mui/icons-material/Group';
import CheckIcon from '@mui/icons-material/Check';
import Confirmados from "@/components/ui/confirmados";
import Envio from "@/components/ui/envio";

export default function Confirmaciones() {
    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <div>
                <h1 className="font-bold text-1xl">Confirmacion semanal de asistencia </h1>
                <p className="font-extralight">semana del XXXXXX al XXXXXX</p>
            </div>
            <div>
                < Confirmados />
            </div>
            <div className="mt-5">
                < Envio />
            </div>
        </div>
    )
}