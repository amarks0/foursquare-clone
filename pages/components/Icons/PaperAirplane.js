export const Airplane = ({ style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={"w-4 h-4 " + style}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);
