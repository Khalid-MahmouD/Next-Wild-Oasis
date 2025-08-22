import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";


//opting one of the components out of the data cash
// will opt out the enter route from the cache

async function CabinList({ filter }) {
    const cabins = await getCabins();

    if (!cabins || cabins.length === 0) return null;

    const displayedCabins = filterCabins(cabins, filter);


    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
            {displayedCabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinList



const filters = {
    all: (cabin) => true,
    small: (cabin) => cabin.maxCapacity <= 3,
    medium: (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    large: (cabin) => cabin.maxCapacity >= 8,
}

function filterCabins(cabins, filter) {
    if (!filters[filter]) {
        throw new Error(`Unknown filter: ${filter}`);
    }
    return cabins.filter(filters[filter]);
}
