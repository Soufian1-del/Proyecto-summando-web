export default function NavigationBar() {
    return (
        <div>
            <div>
                <form action="">
                    <input type="text" name="nombre "id="nombre" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background" placeholder="nombre"/>
                    <select name="deporte" id="deporte" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background">
                        <option value="deporte">deporte</option>
                        <option value="deporte">deporte</option>
                        <option value="deporte">deporte</option>
                        <option value="deporte">deporte</option>
                    </select>
                    <select name="estado" id="estado" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background">
                        <option value="Pendiente">Pendiente</option>
                        <option value="Activo">Activo</option>
                    </select>
                </form>
            </div>
        </div>
    )
}