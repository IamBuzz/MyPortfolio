
import Image from "next/image";


const imageStyle = {
    borderRadius: '50%',
    border: '1px',
}

const colorName = {
    color:'#795757'
}
const colorIntro = {
    color:'#3B3030'
}

export default function Hero(){
    return(
        <section className="grid gap-4 justify-items-center">
            <div className="p-6 content-center">
                <Image
                    src="/assets/Profile-img.png"
                    width={300}
                    height={300}
                    alt="profile"
                    style={imageStyle}
                />
            </div>
            <div className="p-5 content-center justify-items-center text-center">
                <h1 className="text-4xl font-semibold" style={colorIntro}>I am <span className=" text-5xl font-bold" style={colorName}>Atharva</span> A Software Developer From India</h1>
            </div>
                
        </section>
    );
}