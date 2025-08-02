import Spinner from "@/app/_components/Spinner";

export default function Loading() {
    return <div className="grid items-center justify-center">

        <Spinner />
        <p className="text-primary-200 text-xl mt-4">Loading cabins...</p>
    </div>
}
// global loading component used for all pages
// renderToString
// renderToReadableStream
// to specific component we use suspense