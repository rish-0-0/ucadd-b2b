import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { readData } from './Actions/readData';
import { writeNewDocumentWithId, writeNewDocumentWithoutId, updateDocument, deleteDocument } from './Actions/writeData';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// APP STATE
		};
		// THIS BINDINGS AND VARIABLES
	}
	// LIFE CYCLE METHODS
	// componentDidMount() {
	// }
	// RENDER METHOD
	render() {
		return (
			<div className="container main-App">
				<div className="row">
					<div className="column">
						Welcome to the React, Redux and Firebase bootstrap application built by <br/>
						<strong>Rishabh Anand</strong>
					</div>
					<div className='column'>
						<img src={logo} alt="react logo" />
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		...state,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		readData: (collection,document) => {dispatch(readData(collection,document))},
		writeNewDocumentWithId: (collection,docId,data) => {dispatch(writeNewDocumentWithId(collection,docId,data))},
		updateDocument: (collection,docId,data) => {dispatch(updateDocument(collection,docId,data))},
		writeNewDocumentWithoutId: (collection,data) => {dispatch(writeNewDocumentWithoutId(collection,data))},
		deleteDocument: (collection,docId) => {dispatch(deleteDocument(collection,docId))},
	};
};
const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App);
export { connectedApp as App };
