'use client'
import PageHeader from "@/components/shared/pageHeader";
import WorkshopCard from "@/components/shared/workshopCard";
import Info from "@/components/shared/info";
import NavigationBar from "@/components/shared/navigationBar";
import PageFooter from "@/components/shared/pageFooter";
import React, { useEffect } from "react";
import WorkshopForm, {workshopFormValues} from "@/components/shared/workshopForm";
import { getTalleres, postTalleres } from '@/lib/workshop';

export default function Home() {

    const [talleres, setTalleres] = React.useState<workshopFormValues[]>([]);
    useEffect(() => {
        getTalleres().then(data => setTalleres(data));
    }, []);
    /*const handleSave = async (data: workshopFormValues) => {
        const taller = await postTalleres(data);
        setTalleres(prev => [...prev, taller]);
    }*/
    const handleSave = async (data: workshopFormValues) => {
        setTalleres(prev => [...prev, data]); // sin llamada a la API
    }
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="bg-{#2596be}">
            <header>
                <PageHeader onNuevoTaller={() => setIsOpen(true)} />
            </header>
            <div className="justify-items-center mt-7">
                <div>
                    <div className="flex flex-row items-center justify-center p-5">
                        < Info totalTalleres={talleres.length}/>
                    </div>

                    <div className="flex flex-row items-start justify-start p-5 sm:max-md:size-75">
                        < NavigationBar/>
                    </div>
                    <div className="flex flex-row w-fit space-x-4 m-y-25 sm:max-md:flex-col ">
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

    );
}
