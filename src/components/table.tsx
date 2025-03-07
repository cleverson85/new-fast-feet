export type Column<T> = {
  key: keyof T;
  label: string;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export function Table<T,>({ columns, data }: TableProps<T>) {
  return (
    <table className="w-full border-separete border-0 border-spacing-[0 15px] pt-4">
      <thead className="text-[#666] font-roboto text-center">
        <tr>
          {columns.map((col) => (
            <th key={col.key as string}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white text-center opacity-100 bg-no-repeat bg-origin-padding">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex} className="bg-white text-center opacity-100 cursor-pointer">
            {columns.map((col) => (
              <td key={col.key as string} className="border-b-4 border-white bg-gray-200 first:rounded-l-md first:border-l-0 p-2 last:border-l-0 last:rounded-br-md last:rounded-tr-md">
                <span className="flex items-center justify-center text-[16px] font-roboto text-left text-[#666] opacity-100">{String(row[col.key])}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}; 