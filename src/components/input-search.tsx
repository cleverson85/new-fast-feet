import { ComponentProps } from "react";

export function InputSearch(props: ComponentProps<'input'>) {
  return (
    <input
      className="rounded-[4px] h-[35px] w-1/2 px-[5px] bg-[#fff] bg-no-repeat pb-0 border-[1px] border-[#ddd] opacity-100 placeholder:text-[#999] placeholder:opacity-100 placeholder:ml-0.5" 
      {...props}
    />
  );
}