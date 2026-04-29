export default function WorkshopForm() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-fit">
            <h2 className="text-1xl font-bold text-black">Publicar Nuevo Taller</h2>
            <form action="" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background w-fit">
                <label htmlFor="Titulo">Titulo</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: futbol basico" id="Titulo"/>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" name="categoria" className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background">
                    <option value="deporte">deporte</option>
                    <option value="deporte">deporte</option>
                    <option value="deporte">deporte</option>
                    <option value="deporte">deporte</option>
                    <option value="deporte">deporte</option>
                </select>
                <label htmlFor="Coordinador">Profesor Coordinador</label>
                <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Nombre del profesor coordinador" id="Coordinador"/>
                <div className="flex items-center">
                    <div>
                        <label htmlFor="Horario">Horario</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: Lunes 16:00-17:30" id="Horario"/>
                    </div>
                    <div>
                        <label htmlFor="Espacio">Espacio</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: gimnasio A" id="Espacio"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <label htmlFor="minimo">Minimo de alumnos</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Horario" placeholder="8"/>
                    </div>
                    <div>
                        <label htmlFor="maximo">Maximo de alumnos</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Espacio" placeholder="20"/>
                    </div>
                </div>
                <input type="submit" className="bg-lime-500 p-2 hover:bg-lime-600 rounded-full transition-colors"/>
            </form>
        </div>
    )
}