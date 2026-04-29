import Image from "next/image";
import PageHeader from "../components/shared/pageHeader";
import WorkshopCard from "../components/shared/workshopCard";
import WorkshopForm from "@/components/shared/workshopForm";
import WorkshopDetailsCard from "@/components/shared/workshopDetailsCard";
import Info from "@/components/shared/info";
import Confirmaciones from "@/components/shared/confirmaciones";
export default function Home() {
  return (
    <div className="bg-white">
        <div>
            <PageHeader />
        </div>
        <div>
            <Info />
        </div>
        <div className="flex flex-row w-fit space-x-4 m-25">
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
            <WorkshopCard />
        </div>
        <div>
            <WorkshopForm />
        </div>
        <div>
            <WorkshopDetailsCard />
        </div>
        <div>
            <Confirmaciones />
        </div>

    </div>

  );
}
