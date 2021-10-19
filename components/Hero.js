import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
    <header className="h-[550px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[712px] bg-hero">
      <div className="container mx-auto px-10 2xl:px-0">
        <Navbar />
        <div className="text-center md:mt-6 lg:mt-10 xl:mt-20">
          <h1 className="lg:w-10/12 xl:w-8/12 2xl:w-6/12 mx-auto text-white text-2xl md:text-3xl font-semibold font-mono leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="lg:w-6/12 xl:w-4/12 2xl:w-3/12 mx-auto mt-4 text-white text-lg text-opacity-60 leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button href="#profile" variant="yellow" className="mt-14" pill>
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
