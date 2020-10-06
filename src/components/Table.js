import React from "react";

const TableHeader = () => {
  const style = {
    backgroundColor: "#FFF020",
    padding: "5px",
  };
  // boilerplate table header functional component
  return (
    <thead>
      <tr>
        <th style={style}>Name</th>

        <th style={style}>URL</th>

        <th style={style}>Remove</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // boilerplate table body functional component
  // we use Array.map to create table rows from LinkData passed via props

  const rows = props.linkData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>

        <td>
          <a href={row.URL} target="_blank" rel="noopener noreferrer">
            {row.URL}
          </a>
        </td>

        <td>
          <button onClick={() => props.removeLink(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  //    const { linkData, removeLink } = props;
  const { linkData, removeLink } = props;

  /*TODO - return <table> component, TableHeader and TableBody  */

  return (
    <div>
      <table>
        <TableHeader></TableHeader>

        <TableBody linkData={linkData} removeLink={removeLink}></TableBody>
      </table>
    </div>
  );
};

export default Table;
