
export interface totalTalleresProps{
    totalTalleres: number;
}

export default function TotalTalleres(totalTalleresProps: totalTalleresProps) {
    return (
        <div className="text-white px-3 py-2  rounded-lg bg-input-background w-70 bg-lumara-secondary mt-5">
            <p className="text-white font-medium text-sm">Total talleres</p>
            <p className="text-3xl font-normal text-white mt-2">{totalTalleresProps.totalTalleres || 0}</p>
        </div>
    )
}