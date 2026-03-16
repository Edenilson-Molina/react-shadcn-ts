import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen gap-4">
                <Spinner />
            </div>
        </>
    )
}

export default Loading;