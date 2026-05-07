
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Estado () {
    return(
        <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
            <p className="text-lumara-font"><CalendarTodayIcon className="mr-2"/>Estado</p>
            <p className="text-xl text-white mt-2 font-extralight">pendiente</p>
        </div>
    )
}