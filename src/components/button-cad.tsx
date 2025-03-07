import { Plus } from "lucide-react";
import { ComponentProps } from "react";

export function ButtonCad(props: ComponentProps<'button'>) {
  return(
    <button 
      className="flex justify-center items-center w-[140px] h-[35px] text-[12px] font-bold border-0 rounded bg-[#7d40e7] text-white transition-all duration-200 hover:opacity-90 cursor-pointer"
      type="button" {...props}>
      <Plus color="#fff" size={15} className="mr-[5px]" />
      CADASTRAR
    </button>
  )
}