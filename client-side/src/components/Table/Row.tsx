import React from "react";
import Cell from "./Cell";
import {
  ICoordinate,
  IHandleChangedCell,
  ISheetData,
  IUpdateCells,
} from "../../interfaces/root";

interface IProps extends ICoordinate {
  handleChangedCell: IHandleChangedCell;
  updateCells: IUpdateCells;
  rowData: ISheetData['data'];
}

const Row = (props: IProps) => {
  const cells = [];
  const y = props.y;
  for (let x = 0; x < props.x; x += 1) {
    cells.push(
      <Cell
        key={`${x}-${y}`}
        y={y}
        x={x}
        onChangedValue={props.handleChangedCell}
        updateCells={props.updateCells}
        value={props.rowData[x] || ""}
      />
    );
  }
  return <div>{cells}</div>;
};
export default Row;
