import Layout from "./(front)/layout";

export default function NotFound() {
    return (
        <Layout >
            <div className="flex flex-col items-center bg-secondary justify-center min-h-screen">
                <h1 className="text-6xl font-bold text-center text-secondary-foreground">
                    404
                </h1>
                <p className="text-lg text-center text-secondary-foreground">
                    Coming soon...
                </p>
            </div>
        </Layout>
    )
}