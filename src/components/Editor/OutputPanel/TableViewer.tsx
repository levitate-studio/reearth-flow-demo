const TableViewer = ({ data }: any) => {
  return (
    <table className="df-output-table">
      <tbody>
        {data.map((row: any, i: number) => (
          <tr key={i}>
            <td className="index">{i}</td>
            {row.map((col: any, j: number) => (
              <td key={j}>{col}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableViewer;
