import ContactBanner from "./ContactBanner";
import AddressSection from "./AddressSection";
import DistributorSupportCards from "./DistributorSupportCards";
import CommonFaq from "@/common-components/CommonFaq/CommonFaq";
import Map from "./Map";

const bannerContent = {
    heading1: "Let’s Connect – We’re Here to Help",
    heading2: "Have questions about customized wallpapers, curtains, blinds, or interior design solutions? Reach out to Dream Home Styling (DHS) — we’re just a message or call away.",
    buttons: [
        {
            btnName: "Call us",
            type: "call",
            value: "+91 075096 66466"
        },
        {
            btnName: "Send An Enquiry",
            type: "scroll",
            value: "contact-form"
        }
    ],
    backgroundImg: "/contactusbanner.jpeg",
    // Fixed syntax below: use colon : and simple array []
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Contact Us", href: null } 
    ]
};

const faqs = [
    {
        q: " 1. How can I contact Dream Home Styling?",
        a: " You can call us at 075096 66466, email us, or fill out the contact form on this page. We usually respond within 24 hours.",
    },
    {
        q: "2. Do you provide home visit and measurement services?",
        a: " Yes, we offer site visits and measurements in Bhopal and nearby areas. Please contact us to schedule an appointment.",
    },
    {
        q: "3. Can I get customized wallpapers, curtains, or blinds?",
        a: " Absolutely. All our products can be customized based on size, color, design, and material.",
    },
    {
        q: "4. Do I need an appointment to visit your store?",
        a: " No appointment is required. You can visit our Neelbad, Bhopal store anytime during working hours.",
    },
];

const ContactUs = () => {
    return (
        <>
            <ContactBanner bannerContent={bannerContent} />
            <AddressSection />
            <DistributorSupportCards />
            <Map />
            <CommonFaq
                title="Frequently Asked Questions"
                faqData={faqs}
                columns={2}
            />
        </>
    )
}


export default ContactUs;