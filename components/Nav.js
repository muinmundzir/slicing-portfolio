import NavItem from './NavItem';

const Nav = ({ scheme, flex }) => {
  const flexDir = {
    row: 'justify-center space-x-10 py-5',
    col: 'flex-col space-y-6',
  };

  const pickedFlexDir = flexDir[flex];
  return (
    <ul className={`flex ${pickedFlexDir}`}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Projects
      </NavItem>
    </ul>
  );
};

export default Nav;
