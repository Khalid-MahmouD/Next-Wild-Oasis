import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";


//opting one of the components out of the data cash
// will opt out the enter route from the cache

async function CabinList() {
    noStore();
    const cabins = await getCabins();

    if (!cabins || cabins.length === 0) return null;
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {cabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinList
