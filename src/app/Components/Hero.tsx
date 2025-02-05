import { image } from "@heroui/theme";
import Image from "next/image";


const imageStyle = {
    borderRadius: '50%',
    border: '1px',
  }

export default function Hero(){
    return(
        <section className="backdrop-blur-lg">
            <div className="grid grid-cols-2 p-10 content-center justify-items-center " style={{ height: 'calc(100vh - 5rem)' }}>
                <div className="">
                    <h1 className="text-4xl font-bold">I am <span className="">Atharva</span> a Software Developer From India</h1>
                </div>
                <div className="">
                    <Image
                        src="/assets/Profile-img.png"
                        width={300}
                        height={300}
                        alt="profile"
                        style={imageStyle}
                    />
                </div>
            </div>
        </section>
    );
}