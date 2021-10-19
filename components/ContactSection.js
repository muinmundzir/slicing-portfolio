import ContactItem from './ContactItem';
import SectionParagraph from './SectionParagraph';
import SectionTitle from './SectionTitle';

const ContactSection = () => {
  return (
    <section className="container mx-auto">
      <div className="flex bg-grayish rounded-lg">
        <div className="w-6/12 border-r border-gray">
          <div className="py-16 px-20">
            <SectionTitle left>Contact</SectionTitle>
            <SectionParagraph left>
              Beberapa cara menghubungi saya.
            </SectionParagraph>
            <ContactItem
              label="Mail"
              icon="/mail.svg"
              value="example@mail.com"
              className="mt-10"
            />
            <ContactItem
              label="Phone"
              icon="/phone.svg"
              value="+6288971665224"
              className="mt-6"
            />
            <ContactItem
              label="Twitter"
              icon="/twitter.svg"
              value="@malamhari_"
              className="mt-6"
            />
          </div>
          <div className="w-6/12">A</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
