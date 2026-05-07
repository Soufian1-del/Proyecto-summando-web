'use client'
import {useState} from "react";

export interface workshopFormValues {
    titulo: string;
    categoria: string;
    descripcion: string;
    coordinador: string;
    horario: Date;
    espacio: string;
    minimo: number;
    maximo: number;
}
interface workshopFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: workshopFormValues) => Promise<void>;
}


export default function WorkshopForm({ isOpen, onClose, onSave }: workshopFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState<workshopFormValues>({
        titulo: '',
        categoria: '',
        descripcion: '',
        coordinador: '',
        horario: new Date,
        espacio: '',
        minimo: 8,
        maximo: 20
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onSave(form);
            setForm({titulo: '',
                categoria: '',
                descripcion: '',
                coordinador: '',
                horario: new Date(),
                espacio: '',
                minimo: 8,
                maximo: 20});
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-lumara-black/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
                <h2 className="text-1xl font-bold text-black">Publicar Nuevo Taller</h2>
                <form onSubmit={handleSubmit} className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background w-fit">
                    <label htmlFor="Titulo">Titulo</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: futbol basico" id="Titulo" required value={form.titulo} disabled={isSubmitting} onChange={(e) => setForm(prev => ({...prev, titulo: e.target.value }))}/>
                    <label htmlFor="Categoria">Categoria</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Deporte" id="Categoria" required value={form.categoria} disabled={isSubmitting} onChange={(e) => setForm(prev => ({...prev, categoria: e.target.value }))}/>
                    <label htmlFor="Descripcion">Descripcion</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="actividad para futbol" id="Descripcion" required value={form.descripcion} disabled={isSubmitting} onChange={(e) => setForm(prev => ({...prev, descripcion: e.target.value }))}/>
                    <label htmlFor="Coordinador">Profesor Coordinador</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Nombre del profesor coordinador" id="Coordinador" required value={form.coordinador} disabled={isSubmitting} onChange={e => setForm(prev => ({...prev, coordinador: e.target.value }))}/>
                    <div className="flex items-center">
                        <div className="w-full">
                            <label htmlFor="Horario">Fecha</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="datetime-local" placeholder="Ej: Lunes 16:00-17:30" id="Horario" required value={form.horario instanceof Date ? form.horario.toISOString().slice(0, 16) : ''} disabled={isSubmitting} onChange={event => setForm(prev => ({...prev, horario: new Date(event.target.value) }))}/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="Espacio">Espacio</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: gimnasio A" id="Espacio" required value={form.espacio} disabled={isSubmitting} onChange={event => setForm(prev => ({...prev, espacio: event.target.value }))}/>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-full">
                            <label htmlFor="minimo">Minimo de alumnos</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Horario" placeholder="8" required value={form.minimo} disabled={isSubmitting} onChange={event => setForm(prev => ({...prev, minimo: Number(event.target.value) }))}/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="maximo">Maximo de alumnos</label>
                            <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Espacio" placeholder="20" required value={form.maximo} disabled={isSubmitting} onChange={event => setForm(prev => ({...prev, maximo: Number(event.target.value) }))}/>
                        </div>
                    </div>
                    <div className="flex items-center mt-5 ">
                        <div className="w-full">
                            <button className="w-full text-black border border-gray-300 p-2 hover:bg-gray-200 rounded-lg mr-1 transition-colors" onClick={onClose}>cancelar</button>
                        </div>
                        <div className="w-full">
                            <input type="submit" disabled={isSubmitting} className="w-full bg-lumara-tertiary border border-lumara-secondary p-2 hover:bg-lumara-tertiary-hover rounded-lg transition-colors text-white"/>
                        </div>
                    </div>
                    </form>
            </div>
        </div>
    )
}