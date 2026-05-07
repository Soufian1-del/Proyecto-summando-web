import MovingIcon from '@mui/icons-material/Moving';
export interface minimoProps {
    minimo: number;
}
export default function Minimo(minimoProps: minimoProps) {
    return(
        <div className="text-white px-3 py-2 border border-lumara-secondary rounded-lg bg-input-background w-50 bg-lumara-tertiary mt-5">
            <p className="text-lumara-font "><MovingIcon className="mr-2"/>Minimo requerido</p>
            <p className="text-xl text-white mt-2 font-extralight">{minimoProps.minimo}</p>
        </div>
    )
}