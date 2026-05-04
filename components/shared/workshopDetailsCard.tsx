
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import Table from '@/components/ui/table';
import Inscritos from "@/components/ui/inscritos";
import Minimo from "@/components/ui/minimo";
import Estado from "@/components/ui/estado";
import InformacionCards from "@/components/ui/informacionCards";

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
               <div>
                   < Inscritos />
               </div>
                <div>
                    < Minimo />
                </div>
                <div>
                    < Estado />
                </div>
            </div>
            <div>
                < InformacionCards />
            </div>
            <div>
                < Table/>
            </div>
        </div>
    )
}