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
                    <div className="w-full">
                        <label htmlFor="Horario">Horario</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: Lunes 16:00-17:30" id="Horario"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="Espacio">Espacio</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="text" placeholder="Ej: gimnasio A" id="Espacio"/>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="w-full">
                        <label htmlFor="minimo">Minimo de alumnos</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Horario" placeholder="8"/>
                    </div>
                    <div className="w-full">
                        <label htmlFor="maximo">Maximo de alumnos</label>
                        <input className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-input-background" type="number" id="Espacio" placeholder="20"/>
                    </div>
                </div>
                <div className="flex items-center mt-5 ">
                    <div className="w-full">
                        <button className="w-full text-black border border-gray-300 p-2 hover:bg-gray-200 rounded-lg mr-1 transition-colors">cancelar</button>
                    </div>
                    <div className="w-full">
                        <input type="submit" className="w-full bg-lumara-tertiary border border-lumara-secondary p-2 hover:bg-lumara-secondary-hover rounded-lg transition-colors text-white"/>
                    </div>
                </div>
                </form>
        </div>
    )
}