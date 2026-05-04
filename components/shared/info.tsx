import TotalTalleres from "@/components/ui/totalTalleres";
import Activos from "@/components/ui/activos";
import TotalInscritos from "@/components/ui/totalInscritos";
import Pendientes from "@/components/ui/Pendientes";

export default function Info(){
    return (
        <div className="d-inline flex flex-row space-x-4 font-montserrat  ">
            <div>
                < TotalTalleres/>
            </div>
            <div>
                < Activos/>
            </div>
            <div>
                < Pendientes/>
            </div>
            <div>
                < TotalInscritos/>
            </div>
        </div>
    )
}