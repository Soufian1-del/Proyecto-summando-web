

export default function Info(){
    return (
        <div className="d-inline flex flex-row space-x-4 font-montserrat ">
            <div className="text-white px-3 py-2 border border-lumara-primary rounded-lg bg-input-background w-50 bg-lumara-quaternary mt-5">
                <p className="text-lumara-font-green">Total talleres</p>
                <p className="text-xl font-medium text-lumara-font-green mt-2">6</p>
            </div>
            <div className="text-white px-3 py-2 border border-lumara-primary rounded-lg bg-input-background w-50 bg-lumara-quaternary mt-5">
                <p className="text-lumara-font-green ">Talleres activos</p>
                <p className="text-xl font-medium text-lumara-font-green mt-2 ">4</p>
            </div>
            <div className="text-white px-3 py-2 border border-lumara-primary rounded-lg bg-input-background w-50 bg-lumara-quaternary mt-5">
                <p className="text-lumara-font-green">Pendientes</p>
                <p className="text-xl font-medium text-lumara-font-green mt-2 ">2</p>
            </div>
            <div className="text-white px-3 py-2 border border-lumara-primary rounded-lg bg-input-background w-50 bg-lumara-quaternary mt-5">
                <p className="text-lumara-font-green">Total inscritos</p>
                <p className="text-xl font-medium text-lumara-font-green mt-2 ">70</p>
            </div>
        </div>
    )
}