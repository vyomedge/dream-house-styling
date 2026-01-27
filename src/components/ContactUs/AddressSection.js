import Address from "./Adderss";
import ContactForm from "./ContactForm";

const AddressSection = () => {
  return (
    <div className="bg-[#FBC19A]">
      <section className="custom-container  mx-auto  px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
          <div className="w-full">
            <Address />
          </div>

          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressSection;
