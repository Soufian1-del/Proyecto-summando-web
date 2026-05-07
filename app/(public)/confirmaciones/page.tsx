'use client'
import PageHeader from "@/components/shared/pageHeader";
import PageFooter from "@/components/shared/pageFooter";
import ConfirmacionesDetail from "@/components/shared/confirmacionesDetail";
import NavigationBar from "@/components/shared/navigationBar";
import React from "react";
import WorkshopForm, {workshopFormValues} from "@/components/shared/workshopForm";
import WorkshopCard from "@/components/shared/workshopCard";
import Confirmados from "@/components/ui/confirmados";
export default function Confirmaciones(){
    const [talleres, setTalleres] = React.useState<workshopFormValues[]>([]);
    const handleSave = async (data: workshopFormValues) => {
        setTalleres(prev => [...prev, data]);
    }
    const [isOpen, setIsOpen] = React.useState(false);
    return(
        <div className="bg-{#2596be}">
            <header>
                <PageHeader onNuevoTaller={() => setIsOpen(true)} />
            </header>
            <div className="flex flex-row items-center justify-center p-5">
                < NavigationBar />
            </div>
            <div className="w-50% bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black  items-center justify-center px-5 mx-100 ">
                <div>
                    <h1 className="font-bold text-1xl">Confirmacion semanal de asistencia </h1>
                    <p className="font-extralight">semana del XXXXXX al XXXXXX</p>
                </div>
                <div>
                    {talleres.map((taller) => (
                        < Confirmados key={taller.titulo} titulo={taller.titulo} confirmados={taller.minimo} inscritos={taller.maximo} />
                    ))}
                </div>
            </div>
            <div className="justify-end">
                <PageFooter />
            </div>
            <WorkshopForm
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                onSave={handleSave}
            />
        </div>
    )
}