import React from "react";
import Row from "./Row";
import {
  ICoordinate,
  IHandleChangedCell,
  ISheetData,
} from "../../interfaces/root";

interface IProps extends ICoordinate, ISheetData {
  saveSheet: (payload: ISheetData) => void;
}

export default class Table extends React.Component<IProps> {
  handleChangedCell: IHandleChangedCell = ({ x, y }, value) => {
    const modifiedData = Object.assign({}, this.props.data);
    if (!modifiedData[y]) modifiedData[y] = {};
    modifiedData[y][x] = value;
    this.props.saveSheet({ data: modifiedData });
  };
  updateCells = () => {
    this.forceUpdate();
  };
  render() {
    const rows = [];
    for (let y = 0; y < this.props.y + 1; y += 1) {
      const rowData = this.props.data[y] || {};
      rows.push(
        <Row
          handleChangedCell={this.handleChangedCell}
          updateCells={this.updateCells}
          key={y}
          y={y}
          x={this.props.x + 1}
          rowData={rowData}
        />
      );
    }
    return <div>{rows}</div>;
  }
}
