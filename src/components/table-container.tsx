import { ComponentProps, ReactNode, Suspense } from "react";

interface TableContainerProps extends ComponentProps<'div'> {
  inputChildren: ReactNode | null;
  buttonChildren: ReactNode | null;
  tableChildren: ReactNode,
  title: string;
}

export function TableContainer(props: TableContainerProps) {
  return (
     <div className="w-[80%] mx-auto">
      <div className="mb-2.5">
        <h1 className="font-['Roboto'] font-bold text-2xl opacity-100 text-[#666]">{props.title}</h1>
        <div className="w-full flex justify-between items-center">
          {props.inputChildren}
          {props.buttonChildren}
        </div>
      </div>
      <Suspense fallback={<p>Carregando...</p>}>
        {props.tableChildren}
      </Suspense>
    </div>
  );
}