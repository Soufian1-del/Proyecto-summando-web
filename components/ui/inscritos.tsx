import GroupIcon from '@mui/icons-material/Group';

export interface inscritosProps {
    minimo: number;
    maximo: number;
}
export default function Inscritos(inscritosProps: inscritosProps) {
    return(
        <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
            <p className="text-lumara-font"><GroupIcon  className="mr-2"/>Inscritos</p>
            <p className="text-xl text-white mt-2 font-extralight">{inscritosProps.minimo}/{inscritosProps.maximo}</p>
        </div>
    )
}