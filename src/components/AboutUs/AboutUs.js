import CommonBanner from "@/common-components/CommonBanner/CommonBanner";
import CreativeMinds from "./CreativeMinds";
import JoinJourney from "./JoinJourney";
import OurHeritage from "./OurHeritage";
import Principles from "./Principles";

const AboutUs = () => {
    return (
        <>
            <CommonBanner
                tag="OUR ESSENCE"
                title="Crafting Homes"
                highlight="with Style & Comfort"
                subtitle="At Dream Home Styling, we believe every home deserves a personality."
                subtitle1=" More than just décor products, we create customized interior solutions that bring warmth, balance, and elegance to your living and working spaces."
                subtitle2="From premium wallpapers to designer curtains, blinds, upholstery, and carpets, our collections are designed to complement modern lifestyles while reflecting your unique taste."
                subtitle3="We don’t just decorate spaces — we style homes."
                bgImage="/aboutus.jpeg"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "About Us" },
                ]}
            />
            <OurHeritage />
            <Principles />
            <CreativeMinds />
            <JoinJourney />
        </>
    )
}


export default AboutUs;