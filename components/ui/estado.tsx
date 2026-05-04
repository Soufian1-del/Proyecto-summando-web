import GroupIcon from '@mui/icons-material/Group';
import MovingIcon from '@mui/icons-material/Moving';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationPinIcon from '@mui/icons-material/LocationPin';

export default function Estado(){
    return(
        <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
            <p className="text-lumara-font "><MovingIcon className="mr-2"/>Minimo requerido</p>
            <p className="text-xl text-black mt-2 font-extralight">8</p>
        </div>
    )
}