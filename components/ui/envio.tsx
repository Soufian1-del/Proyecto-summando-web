import GroupIcon from '@mui/icons-material/Group';
export default function Envio(){
    return(
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-full">
            <div>
                <h1  className="font-bold">Matematicas</h1>
                <p  className="font-extralight">Fecha exacta</p>
                <p className="font-extralight mt-2 mb-1"><GroupIcon  className="mr-2 " sx={{ fontSize: 15 }}/>Inscritos: </p>
                <div >
                    <form action="">
                        <input type="text" placeholder="alumnos que asistiran" className="bg-gray-200 border border-gray-300 rounded-lg text-center px-3 py-2 mt-2"/>
                        <input className="text-white px-3 py-2 border border-lumara-secondary hover:bg-lumara-tertiary-hover rounded-lg bg-input-background w-50 bg-lumara-tertiary" type="submit" value="enviar"/>
                    </form>
                </div>
            </div>
        </div>
    )
}