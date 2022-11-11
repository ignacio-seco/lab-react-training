import './NumbersTable.css';

function NumbersTable(props) {
  let squareStyle = {
    width: `${100 / props.cells}%`,
    display: `inline-block`,
    paddingBottom: `${50 / props.cells}%`,
    paddingTop: `${50 / props.cells}%`,
  };
  let tableStyle = {
    width: `100%`,
    borderCollapse: `collapse`,
  };

  let nArray = [];
  for (let i = 1; i < props.limit + 1; i++) {
    nArray.push(i);
  }

  let createTr = [];
  for (let i = 0; i < nArray.length; i = i + Number(props.cells)) {
    let eachRow = [];
    for (let k = i; k < i + Number(props.cells) && k < nArray.length; k++) {
      console.log(eachRow);
      eachRow.push(nArray[k]);
    }
    {
      createTr.push(eachRow);
    }
  }

  let madeRows = createTr.map((e, i) => {
    return (
      <tr key={`row-${i}`}>
        {e.map((el, il) => {
          if (el % 2 === 0) {
            return (
              <td className="red" key={`cell- ${il}`} style={squareStyle}>
                {el}
              </td>
            );
          }
          return (
            <td className="white" key={`cell- ${il}`} style={squareStyle}>
              {el}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table style={tableStyle}>
      <tbody>{madeRows}</tbody>
    </table>
  );
}
export default NumbersTable;
