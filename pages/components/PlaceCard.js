const PlaceCard = () => {
  return (
    <div className="flex h-40 text-black border border-gray-200 shadow-md">
      <div className="flex flex-col w-11/12">
        <div className="flex flex-row p-2">
          <div className="self-center">
            <svg
              viewBox="0 0 36 36"
              fill="none"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
            >
              <title>Lucy Stone</title>
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
                <rect width="36" height="36" fill="#7e25e2"></rect>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  transform="translate(4 4) rotate(340 18 18) scale(1.1)"
                  fill="#3b00da"
                  rx="36"
                ></rect>
                <g transform="translate(-4 -3) rotate(0 18 18)">
                  <path
                    d="M15 20c2 1 4 1 6 0"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                  ></path>
                  <rect
                    x="14"
                    y="14"
                    width="1.5"
                    height="2"
                    rx="1"
                    stroke="none"
                    fill="#FFFFFF"
                  ></rect>
                  <rect
                    x="20"
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
          </div>
          <div className="flex flex-col ml-1">
            <div className="flex items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div
                itemprop="name"
                className="p-1 text-lg font-bold text-indigo-800"
              >
                Place Name
              </div>
            </div>
            <div className="ml-3 text-sm">
              <div itemprop="address">123 Main Street, Miami FL USA</div>
              <div itemprop="description">Customer Tip/Description</div>
              <button className="flex items-center px-2 py-1 mt-1 tracking-wide text-white uppercase bg-indigo-500 border border-indigo-800 rounded-md shadow-md hover:text-indigo-800 hover:bg-white hover:transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span className="pl-1">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <div className="flex flex-row items-center space-x-1">
          <div className="text-sm font-semibold">4.1</div>
          <div className="items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  s;
};

export default PlaceCard;
