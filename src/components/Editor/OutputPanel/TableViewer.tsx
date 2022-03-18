const TableViewer = ({ data }: any) => {
  return (
    <table className="df-output-table">
      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            <td className="index">{i}</td>
            {typeof row !== "object" && <td>{row}</td>}
            {typeof row === "object" &&
              row.map((col: any, j: number) => <td key={j}>{col}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableViewer;
