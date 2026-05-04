import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import LocationPinIcon from '@mui/icons-material/LocationPin'
import GroupIcon from '@mui/icons-material/Group';
export default function WorkshopCard() {
    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-100 font-Inter">
            <div className="text-justify">
                <h2 className="text-2xl font-light text-black">Nombre del taller<TaskAltIcon sx={{ fontSize: 15 }} className="ml-2 text-lumara-quaternary"/></h2>
                <p className="text-lumara-font-green border border-lumara-primaryy bg-lumara-quaternary w-fit rounded-full pl-3 pr-3">clase</p>
                <p className="mt-5 mb-2 font-extralight">Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra quis condimentum cubilia curae porta gravida inceptos, bibendum nunc penatibus orci enim lectus. Est mollis mauris taciti sociis elementum.</p>
                <p className="font-extralight"><GroupIcon  className="mr-2 " sx={{ fontSize: 15 }}/>Profesor: </p>
                <p className="font-extralight"><CalendarTodayIcon className="mr-2" sx={{ fontSize: 15 }}/>horario</p>
                <p className="font-extralight"><LocationPinIcon className="mr-2" sx={{ fontSize: 15 }}/>Sitio</p>
                <button className="w-full bg-lumara-tertiary border border-lumara-tertiary hover:bg-lumara-tertiary-hover rounded-lg p-1 text-lumara-font">
                    ver detalles
                </button>
            </div>
        </div>
    )

}