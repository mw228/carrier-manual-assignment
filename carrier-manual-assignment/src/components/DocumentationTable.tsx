type TableCell =
  | React.ReactNode
  | {
      value: React.ReactNode;
      rowSpan?: number;
      colSpan?: number;
    }
  | null;

type DocumentationTableProps = {
  columns: {
    key: string;
    label: string;
  }[];
  rows: Record<string, TableCell>[];
};

function DocumentationTable({ columns, rows }: DocumentationTableProps) {
  return (
    <table className="documentation-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => {
              const cell = row[column.key];

              if (cell === null) {
                return null;
              }

              if (typeof cell === "object" && "value" in cell) {
                return (
                  <td key={column.key} rowSpan={cell.rowSpan} colSpan={cell.colSpan}>
                    {cell.value}
                  </td>
                );
              }

              return <td key={column.key}>{cell}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DocumentationTable;
