const TableViewer = ({ data }: any) => {
  return (
    <table className="df-output-table">
      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            <td className="index">{i}</td>
            {typeof row !== "object" && (
              <td className={`v-${typeof row}`}>{String(row)}</td>
            )}
            {typeof row === "object" &&
              row.map((col: any, j: number) => (
                <td className={`v-${typeof col}`} key={j}>
                  {col}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableViewer;
