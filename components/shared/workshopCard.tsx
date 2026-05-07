'use client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import GroupIcon from '@mui/icons-material/Group';
import React from "react";
import WorkshopDetailsCard from "@/components/shared/workshopDetailsCard";
export interface workshopCardProps {
    titulo: string;
    categoria: string;
    descripcion: string;
    coordinador: string;
    horario: Date;
    espacio: string;
    minimo: number;
    maximo: number;
}
export default function WorkshopCard(workshopCardProps: workshopCardProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-100 font-Inter">
                <div className="text-justify">
                    <h2 className="text-2xl font-light text-black">{workshopCardProps.titulo || "nombre del taller"}<TaskAltIcon sx={{ fontSize: 15 }} className="ml-2 text-lumara-quaternary"/></h2>
                    <p className="text-white  bg-lumara-secondary w-fit rounded-full pl-3 pr-3">{workshopCardProps.categoria || "clase"}</p>
                    <p className="mt-5 mb-2 font-extralight">{workshopCardProps.descripcion || "lorem ipsum dolor sit amet consectetur adipiscing elit, nostra quis condimentum cubilia curae porta gravida inceptos, bibendum nunc penatibus orci enim lectus. Est mollis mauris taciti sociis elementum."}</p>
                    <p className="font-extralight"><GroupIcon  className="mr-2 " sx={{ fontSize: 15 }}/>Profesor: {workshopCardProps.coordinador} </p>
                    <p className="font-extralight"><CalendarTodayIcon className="mr-2" sx={{ fontSize: 15 }}/>Horario: {workshopCardProps.horario ? workshopCardProps.horario.toLocaleString() : ''}</p>
                    <p className="font-extralight"><LocationPinIcon className="mr-2" sx={{ fontSize: 15 }}/>Sitio: {workshopCardProps.espacio}</p>
                    <button onClick={() => setIsOpen(true)} className="w-full bg-lumara-tertiary border border-lumara-tertiary hover:bg-lumara-tertiary-hover rounded-lg p-1 text-white">
                        ver detalles
                    </button>
                </div>
                <WorkshopDetailsCard isOpen={isOpen} onClose={() => setIsOpen(false)} horario={workshopCardProps.horario} descripcion={workshopCardProps.descripcion} espacio={workshopCardProps.espacio} minimo={workshopCardProps.minimo} maximo={workshopCardProps.maximo}/>
            </div>
    )

}