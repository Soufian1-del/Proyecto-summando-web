/*import react, {useState} from 'react';*/
/*Los filtros no funcionaran hasta que este la Api y el padre tenga las funcionalidades, pero para eso se necesita la api*/
import FilterListAltIcon from '@mui/icons-material/FilterListAlt';
/*
export interface navigationFilters {
    nombre?: string;
    categoria?: string;
    estado?: string;
}
interface navigationFilterProps {
    onSearch: (filters: navigationFilters) => void;
} */
export default function NavigationBar(/*{onSearch} : navigationFilterProps*/) {
    /*const [nombre, setNombre] = useState('');
    const categoria = ["deporte", "arte", "matematicas", "lengua"];
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const estado = ["Pendiente", "Activo"];
    const [estadoSeleccionado, setEstadoSeleccionado] = useState('');*/


    return (
        <div>
            <div>
                <form action="">
                    < FilterListAltIcon />
                    <input type="text" name="nombre "id="nombre" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background" placeholder="nombre" /*value={nombre} onChange={(e) => {setNombre(e.target.value); onSearch({ nombre: e.target.value, categoria: categoriaSeleccionada, estado: estadoSeleccionado });}}*/ />
                    <select name="deporte" id="deporte" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background" /*value={categoriaSeleccionada} onChange={(e) => {setCategoriaSeleccionada(e.target.value); onSearch({ nombre, categoria: e.target.value, estado: estadoSeleccionado });}}*/>
                        <option value="deporte">deporte</option>
                        <option value="arte">arte</option>
                        <option value="matematicas">matematicas</option>
                        <option value="lengua">lengua</option>
                    </select>
                    <select name="estado" id="estado" className="px-3 py-2 border border-gray-300 rounded-lg bg-input-background" /*value={estadoSeleccionado} onChange={(e) => {setEstadoSeleccionado(e.target.value); onSearch({ nombre, categoria: categoriaSeleccionada, estado: e.target.value });}}*/>
                        <option value="Pendiente">Pendiente</option>
                        <option value="Activo">Activo</option>
                    </select>
                </form>
            </div>
        </div>
    )
}