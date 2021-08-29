import React from "react";
import {
  ICoordinate,
  ISheetData,
} from "../../interfaces/root";
import Table from "../../components/Table";
import { connect } from "react-redux";
import { IRootState } from "../../store/reducers";
import { action } from "../../store/Sheet";

type IStateProps = ReturnType<typeof mapStateToProps>;
type IDispatchProps = typeof mapDispatchToProps;

interface IProps extends ICoordinate, ISheetData, IStateProps, IDispatchProps {}

interface IState extends ISheetData {}

class Sheet extends React.Component<IProps, IState> {
  render() {
    console.log({ data: this.props.data });
    return (
      <div style={{ width: "max-content" }}>
        <Table
          x={50}
          y={50}
          data={this.props.data}
          saveSheet={this.props.saveSheet}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  data: state.sheet.data,
  loading: state.sheet.loading,
  error: state.sheet.error,
});

const mapDispatchToProps = {
  getSheet: action.getSheetAsync,
  saveSheet: action.saveSheet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sheet);
