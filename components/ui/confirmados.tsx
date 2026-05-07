import GroupIcon from '@mui/icons-material/Group';
import CheckIcon from '@mui/icons-material/Check';
export interface ConfirmadosProps {
    titulo: string;
    confirmados: number;
    inscritos: number;
}
export default function Confirmados(confirmadosProps: ConfirmadosProps) {
    return(
        <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow text-black w-full">
            <div>
                <h1 className="font-bold">{confirmadosProps.titulo}</h1>
                <p className="font-extralight">Fecha exacta</p>
                <p className="font-extralight mt-2 mb-1"><GroupIcon  className="mr-2 " sx={{ fontSize: 15 }}/>Inscritos:{confirmadosProps.inscritos} </p>
                <div className="text-white px-3 py-2 border border-lumara-secondary  rounded-lg bg-input-background w-full bg-lumara-tertiary">
                    <p><CheckIcon   className="mr-2 " sx={{ fontSize: 15 }}/>Confirmados: {confirmadosProps.confirmados} </p>
                </div>
            </div>
        </div>
    )
}