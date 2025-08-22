'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const filters = [
    {
        label: "All Cabins",
        value: 'all'
    },
    {
        label: "1—3 People",
        value: 'small'
    },
    {
        label: "4—7 People",
        value: 'medium'
    },
    {
        label: "8—12 People",
        value: 'large'
    }
]

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    console.log(searchParams, pathname, router);

    function handleFilterChange(filter) {
        const params = new URLSearchParams(searchParams);
        params.set('capacity', filter);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className="flex border border-primary-800">
            {filters.map((filter) => (
                <button
                    key={filter.label}
                    className="px-5 py-2 hover:bg-primary-700"
                    onClick={() => handleFilterChange(filter.value)}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    )
}

export default Filter


