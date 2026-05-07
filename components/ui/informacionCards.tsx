import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationPinIcon from '@mui/icons-material/LocationPin';
export  interface informacionCardsProps {
    horario: Date;
    espacio: string;
    descripcion: string;
}
export default function InformacionCards(informacionCardProps: informacionCardsProps){
    return (
        <div>
            <p className="text-lg mt-5">detalles</p>
            <div className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-input-background w-50 bg-gray-50 leading-9">
                <p className="text-sm"><CalendarTodayIcon className="mr-2" sx={{ fontSize: 15 }}/>Horario:  {informacionCardProps.horario ? informacionCardProps.horario.toLocaleString() : ''}</p>
                <p className="text-sm mt-3"><LocationPinIcon className="mr-2" sx={{ fontSize: 15 }}/>Espacio:{informacionCardProps.espacio} </p>
                <p className="text-sm mt-3">{informacionCardProps.descripcion || "descripcion"} </p>
            </div>
        </div>

    )
}