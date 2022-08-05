import {XCircle}  from './Icons/X-Circle'
import {Airplane}  from './Icons/PaperAirplane'

const TextBox = ({ id, text, icon }) => {
  return (
    <div className="relative p-2">
     <label htmlFor={id}></label>
      <input className="h-10 px-2 m-1 rounded-sm hover:text-indigo-400" type="text" id={id} name={id} placeholder={text} />
      { icon === 'airplane' ?
      <Airplane style="cursor-pointer absolute text-gray-600 right-5 top-6 rotate-45"/>
      : <XCircle style="cursor-pointer absolute text-gray-600 right-5 top-6"/>
  }
    </div>
  );
};

export default TextBox;
 