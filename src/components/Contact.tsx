
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import SocialLinks from "@/components/SocialLinks";
import AvailabilityCard from "@/components/AvailabilityCard";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />

          <div className="space-y-8 reveal" data-animation="fade-left">
            <ContactInfo />
            <SocialLinks />
            <AvailabilityCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
