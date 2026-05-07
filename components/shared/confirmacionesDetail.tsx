import Confirmados from "@/components/ui/confirmados";
import React from "react";
export interface ConfirmadosProps {
    titulo: string;
    confirmados: number;
    inscritos: number;
}export default function ConfirmacionesDetail(confirmadosProps: ConfirmadosProps) {

    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <div>
                <h1 className="font-bold text-1xl">Confirmacion semanal de asistencia </h1>
                <p className="font-extralight">semana del XXXXXX al XXXXXX</p>
            </div>
            <div>
                < Confirmados titulo={confirmadosProps.titulo} confirmados={confirmadosProps.confirmados} inscritos={confirmadosProps.inscritos} />
            </div>
        </div>
    )
}