import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Custom404 = () => {
    const Router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            Router.push("/");
        }, 3000);
    });
    return (
        <div className="text-center p-32">
            <Image className="mx-auto" src="/logo.png" alt="404 Not Found" width={200} height={200} />
            <div>
                <h1 className="text-9xl">404</h1>
                <h2 className="text-xl">Page Not Found :(</h2>
            </div>
        </div>
    );
};

export default Custom404;
