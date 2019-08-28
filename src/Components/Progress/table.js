import React from 'react';
import { connect } from 'react-redux';
import MUIDataTable from 'mui-datatables';

const columns = [
    "Name",
    "Test Code",
    "Physics",
    "Physics Class Rank",
    "Physics AIR",
    "Chemistry",
    "Chemistry Class Rank",
    "Chemistry AIR",
    "Math",
    "Math Class Rank",
    "Math AIR",
    "Rank",
    "AIR Rank",
];
let options = {
    print:false,
    download:false,
    responsive:"scroll",
    selectableRows:'none',
};

function Table(props) {
    return(
        <MUIDataTable
        title={props.title}
        data={props.table}
        columns={columns}
        options={options}
        />
    );
}
const mapStateToProps = (state) => {
    const { table } = state.data;
    return {
        table,
    };
};
export default connect(mapStateToProps)(Table);