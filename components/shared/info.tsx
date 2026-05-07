import TotalTalleres from "@/components/ui/totalTalleres";
import Activos from "@/components/ui/activos";
import TotalInscritos from "@/components/ui/totalInscritos";
import Pendientes from "@/components/ui/Pendientes";
export interface totalTalleres {
    totalTalleres: number;
}
export default function Info(totalTalleres: totalTalleres) {
    return (
        <div className="d-inline flex flex-row space-x-4 font-montserrat  ">
            <div>
                < TotalTalleres    totalTalleres={totalTalleres.totalTalleres}/>
            </div>
            <div>
                < Activos activos={totalTalleres.totalTalleres}/>
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