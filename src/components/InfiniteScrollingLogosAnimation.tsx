import Image from "next/image";
import leoni from "../../public/img/brands/leoni-2.png";
import adient from "../../public/img/brands/adient-vector-logo.svg";
import yang from "../../public/img/brands/yanfeng-automotive-interiors-vector-logo.svg";
import Slider from "react-infinite-logo-slider";

// Konfigurácia loga
const CompanyLogodata = [
    { src: leoni, alt: 'leoni logo' },
    { src: adient, alt: 'adient logo' },
    { src: yang, alt: 'yangfeng logo' },
    { src: leoni, alt: 'leoni logo' },
    { src: adient, alt: 'adient logo' },
    { src: yang, alt: 'yangfeng logo' },
];

const InfiniteScrollingLogosAnimation = () => {
    return (
        <div className="container bg-[#111] bg-opacity-10 backdrop-blur-lg shadow-md p-5">
            <Slider 
            width="50px"
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBorderColor={'#fff'}
            >
                {CompanyLogodata.map(({ src, alt }, index) => (
                    <Image key={index} src={src} alt={alt} className="mr-6 w-20 h-auto object-contain" />
                ))}
            </Slider>
        </div>
    );
};

export default InfiniteScrollingLogosAnimation;
