import {
  MagnifyingGlassIcon,
  HashtagIcon,
  BellIcon,
  UserCircleIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

const TopNavigation = () => {
  return (
    <div className="top-navigation">
      <Title />
      <ThemeIcon />
      <Search />
      <AlertBellIcon />
      <UserCircle />
    </div>
  );
};

const ThemeIcon = () => {
  return (
    <span>
      <SunIcon className="top-navigation-icon h-12 w-12" />
    </span>
  );
};

const Search = () => (
  <div className="search">
    <input className="search-input" type="text" placeholder="Search..." />
    <MagnifyingGlassIcon className="text-secondary my-auto h-10 w-10" />
  </div>
);
const AlertBellIcon = () => (
  <BellIcon className="top-navigation-icon h-12 w-12" />
);
const UserCircle = () => (
  <UserCircleIcon className="top-navigation-icon h-12 w-12" />
);

const Title = () => <h5 className="title-text">Anmol Pok</h5>;

export default TopNavigation;
