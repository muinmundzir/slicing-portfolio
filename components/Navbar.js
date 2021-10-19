import NavItem from '../components/NavItem';
import Button from './Button';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="flex items-center py-10">
      <div className="w-3/12">
        <Logo />
      </div>
      <div className="w-6/12">
        <ul className="flex justify-center space-x-10 py-5">
          <NavItem href="#profile">Profile</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#projects">Projects</NavItem>
        </ul>
      </div>
      <div className="w-3/12 text-right">
        <Button href="#contact" variant="outline-yellow" pill>
          Contact
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
