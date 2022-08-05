import Button from "./Button";
import TextBox from "./TextBox";
import {Search} from './Icons/Search'

const Header = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center w-full h-20 p-2 bg-indigo-700 ">
      <div className="flex w-full">
        <h1 className="px-4 py-2 text-5xl tracking-wide text-white">voyage</h1>
        <div className="flex items-center flex-grow">
          <TextBox id="category" text="Trending" icon="circle" />
          <TextBox id="map-view" text="Current Map View" icon="airplane" />
          <Search style="cursor-pointer hover:animate-bounce text-white"/>
        </div>
        <div className="flex items-center">
          <Button label="Log In" />
          <Button label="Sign Up" style="important"/>
        </div>
      </div>
    </div>
  );
};

export default Header;
