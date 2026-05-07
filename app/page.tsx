'use client'
import PageHeader from "../components/shared/pageHeader";
import WorkshopCard from "../components/shared/workshopCard";
import WorkshopForm, { workshopFormValues } from "@/components/shared/workshopForm";
import Info from "@/components/shared/info";
import ConfirmacionesDetail from "@/components/shared/confirmacionesDetail";
import NavigationBar from "@/components/shared/navigationBar";
import PageFooter from "@/components/shared/pageFooter";
import React from "react";
export default function Home() {
    const [talleres, setTalleres] = React.useState<workshopFormValues[]>([]);
    const handleSave = async (data: workshopFormValues) => {
        setTalleres(prev => [...prev, data]);
    }
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="bg-white">
            <div>
                <PageHeader onNuevoTaller={() => setIsOpen(true)} />
            </div>
            <div>
                <Info totalTalleres={talleres.length}/>
            </div>
            <div>
                <NavigationBar/>
            </div>
            <div className="flex flex-row w-fit space-x-4 m-25">
                {talleres.map((taller) => (
                    <WorkshopCard
                        key={taller.titulo}
                        titulo={taller.titulo}
                        descripcion={taller.descripcion}
                        categoria={taller.categoria}
                        coordinador={taller.coordinador}
                        horario={taller.horario}
                        espacio={taller.espacio}
                        minimo={taller.minimo}
                        maximo={taller.maximo}
                    />
                ))}
            </div>
            <div>
                <WorkshopForm isOpen={false} onClose={function(): void {
                  throw new Error("Function not implemented.");
              } } onSave={function(data: workshopFormValues): Promise<void> {
                  throw new Error("Function not implemented.");
              } }/>
        </div>
        <div>
            <ConfirmacionesDetail />
        </div>
        <div>
            <PageFooter />
        </div>
    </div>

  );
}
