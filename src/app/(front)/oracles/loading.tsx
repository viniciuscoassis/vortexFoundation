export default function Loading(){
    return (
        <div className="flex flex-col items-center bg-secondary justify-center min-h-screen">
            <h1 className="text-6xl font-bold text-center text-secondary-foreground">
                Loading...
            </h1>
            <p className="text-lg text-center text-secondary-foreground">
                Please wait while we load the data
            </p>
        </div>
    )
}