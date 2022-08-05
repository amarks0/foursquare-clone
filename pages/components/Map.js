import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

const MyMap = () => {
  return (
    <>
      <MapContainer
        center={[25.784628076278914, -80.19972617433544]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[25.784628076278914, -80.19972617433544]}>
          <Popup>
            <div className="flex">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
              >
                <title>Virginia Apgar</title>
                <mask
                  id="mask__beam"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                >
                  <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
                </mask>
                <g mask="url(#mask__beam)">
                  <rect width="36" height="36" fill="#31291c"></rect>
                  <rect
                    x="0"
                    y="0"
                    width="36"
                    height="36"
                    transform="translate(-2 6) rotate(306 18 18) scale(1)"
                    fill="#7b65ff"
                    rx="36"
                  ></rect>
                  <g transform="translate(-2 6) rotate(6 18 18)">
                    <path d="M13,19 a1,0.75 0 0,0 10,0" fill="#FFFFFF"></path>
                    <rect
                      x="13"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                    <rect
                      x="21"
                      y="14"
                      width="1.5"
                      height="2"
                      rx="1"
                      stroke="none"
                      fill="#FFFFFF"
                    ></rect>
                  </g>
                </g>
              </svg>
              <div className="self-center p-2">
                <div className="mb-2 text-sm font-bold">Place Name</div> <div>123 Main Street, Miami FL</div>
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default MyMap;
