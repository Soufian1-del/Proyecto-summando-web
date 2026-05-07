'use client'
import CancelIcon from '@mui/icons-material/Cancel';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Table, {tableValues} from '@/components/ui/table';
import Inscritos from "@/components/ui/inscritos";
import Estado from "@/components/ui/estados";
import Minimo from "@/components/ui/minimos";
import InformacionCards from "@/components/ui/informacionCards";

interface WorkshopDetailsCardProps {
    isOpen: boolean;
    onClose: () => void;
    horario: Date;
    espacio: string;
    descripcion: string;
    minimo: number;
    maximo: number;
}
export default function WorkshopDetailsCard({isOpen, onClose, horario, espacio, descripcion, minimo, maximo}: WorkshopDetailsCardProps) {
    const alumnosMock: tableValues[] = [
        { nombre: "Juan García", curso: "DAW", fecha: "01/05/2025" },
    ]

    if (!isOpen) return null;

    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-lumara-black/60 backdrop-blur-md animate-in fade-in duration-300">
        <div className="w-fit px-3 py-2 border border-gray-300 rounded-lg bg-input-background text-black font-montserrat bg-white">
            <button onClick={onClose}><CancelIcon/></button>
            <div className="mt-5">
                <h2 className="mt-5 text-2xl font-bold text-black">Pintura y creatividad</h2>
                <p className="">Profesor: </p>
            </div>
            <hr className="w-full border border-gray-300" />
            <div className="d-inline flex flex-row space-x-4 ">
               <div>
                   < Inscritos minimo={minimo} maximo={maximo}/>
               </div>
                <div>
                    < Estado />
                </div>
                <div>
                    < Minimo minimo={minimo} />
                </div>
            </div>
            <div>
                < InformacionCards horario={horario} espacio={espacio} descripcion={descripcion}/>
            </div>
            <div>
                < Table alumnos={alumnosMock}/>
            </div>
        </div> </div>
    )
}