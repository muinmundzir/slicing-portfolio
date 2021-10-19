const NavItem = ({ scheme, href, children }) => {
  const schemes = {
    light: 'text-white text-opacity-60 hover:text-opacity-100',
    dark: 'text-black',
  };

  const pickedScheme = schemes[scheme];

  return (
    <li>
      <a
        href={href}
        className={`text-lg transition font-semibold ${pickedScheme}`}
      >
        {children}
      </a>
    </li>
  );
};

export default NavItem;
