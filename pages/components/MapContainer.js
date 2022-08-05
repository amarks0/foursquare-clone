import dynamic from "next/dynamic";
import { MyMap as Map } from "./Map";

const MapContainer = () => {
  // const Map = dynamic(() => import("./components/Map"), { ssr:false })

  //need tp fix positioning to match side planel with width of 1/3
  // need to add a map = OSM?

  return (
    <div className="flex pt-20 sm:pl-96">
      😄
      <Map />
    </div>
  );
};

export default MapContainer;
