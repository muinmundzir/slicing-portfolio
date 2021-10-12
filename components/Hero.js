import Navbar from './Navbar';
import Button from './Button';

const Hero = () => {
  return (
    <header className="h-[708px] bg-hero">
      <div className="container mx-auto">
        <Navbar />
        <div className="text-center mt-20">
          <h1 className="w-7/12 mx-auto text-white text-3xl font-semibold font-mono leading-relaxed">
            Saya seorang front-end engineer, back-end engineer, dan juga UI
            designer
          </h1>
          <p className="w-4/12 mx-auto mt-4 text-white text-lg text-opacity-60 leading-relaxed">
            Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
            design.
          </p>
          <Button variant="yellow" className="mt-14">
            Learn More
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
