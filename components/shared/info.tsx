export default function Info(){
    return (
        <div className="d-inline flex flex-row space-x-4 text-black">
            <div className=" px-3 py-2 border border-lime-400 rounded-lg bg-input-background w-50 bg-lime-300">
                <p>Total talleres</p>
                <p>1</p>
            </div>
            <div className=" px-3 py-2 border border-orange-400 rounded-lg bg-input-background w-50 bg-orange-300">
                <p>Inscritos</p>
                <p>8</p>
            </div>
            <div className=" px-3 py-2 border border-yellow-400 rounded-lg bg-input-background w-50 bg-yellow-300">
                <p>Pendientes</p>
                <p>2</p>
            </div>
            <div className=" px-3 py-2 border border-gray-200 rounded-lg bg-input-background w-50 bg-white">
                <p>Activos</p>
                <p>3</p>
            </div>
        </div>
    )
}