import Link from "next/link";
const Button = ({ label, style }) => {
  return (
    <Link href="">
      <button
        className={
          "w-auto h-10 p-2 m-2 font-bold border border-white rounded-sm shadow-sm " +
          (style ? "bg-white text-indigo-800 hover:text-indigo-500 hover:bg-slate-100" : "text-white hover:bg-indigo-500")
        }
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;

//{"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}
