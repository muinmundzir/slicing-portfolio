const NavItem = ({ children }) => {
  return (
    <li>
      <a href="#" className="text-white text-lg text-opacity-60 font-semibold">
        {children}
      </a>
    </li>
  );
};

export default NavItem;
