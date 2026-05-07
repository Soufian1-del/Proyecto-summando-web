export interface activosProps{
    activos: number;
}

export default function Activos(activosProps: activosProps) {
    return (
        <div className="text-white px-3 py-2  rounded-lg bg-input-background w-70 bg-lumara-secondary mt-5">
            <p className="text-white  font-medium text-sm ">Talleres activos</p>
            <p className="text-3xl font-normal text-white mt-2 ">{activosProps.activos || 0}</p>
        </div>
    )
}