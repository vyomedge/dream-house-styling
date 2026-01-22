import Address from "./Adderss";
import ContactForm from "./ContactForm";

const AddressSection = () => {
  return (
    <section className="custom-container  mx-auto mt-2 md:mt-10 px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <div className="w-full">
          <Address />
        </div>

        <div className="w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AddressSection;
