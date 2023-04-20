import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Layout pageTitle="home">
                <div className="text-center py-20">
                    <h1 className="text-center font-bold text-4xl">Home Page</h1>
                    <div className="flex justify-center gap-5 my-10">
                        <Image src="/synapsis.png" alt="Synapsis Logo" width={180} height={37} />
                        <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]" src="/next.svg" alt="Next.js Logo" width={180} height={37} />
                    </div>
                    <p>Hello! Welcome to my Blog Single Page Application using NEXT JS</p>
                    <p>This is part of my internship application process at PT. Synapsis Sinergi Digital as a FrontEnd Engineer</p>
                </div>
            </Layout>
        </>
    );
}
