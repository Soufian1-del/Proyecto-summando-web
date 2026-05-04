import react from "react";

import Image from "next/image";
import PageHeader from "@/components/shared/pageHeader";
import WorkshopCard from "@/components/shared/workshopCard";
import WorkshopForm from "@/components/shared/workshopForm";
import WorkshopDetailsCard from "@/components/shared/workshopDetailsCard";
import Info from "@/components/shared/info";
import Confirmaciones from "@/components/shared/confirmaciones";
import NavigationBar from "@/components/shared/navigationBar";
import PageFooter from "@/components/shared/pageFooter";
export default function Home() {
    return (
        <div className="bg-{#2596be}">
            <header>
                <PageHeader />
            </header>
            <div className="justify-items-center mt-7">
                <div>
                    <div className="flex flex-row items-center justify-center p-5">
                        < Info/>
                    </div>

                    <div className="flex flex-row items-start justify-start p-5">
                        < NavigationBar />
                    </div>
                    <div className="flex flex-row w-fit space-x-4 m-y-25">
                        < WorkshopCard />
                        < WorkshopCard />
                        < WorkshopCard />
                    </div>
                </div>
            </div>
            <div className="justify-end">
                <PageFooter />
            </div>
        </div>

    );
}
