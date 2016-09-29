import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectBook} from '../actions/index'
import {bindActionCreators} from 'redux';

class BookList extends Component {
	renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

// Glue between react and redux
function mapStateToProps(state){
  // Return object is props for BookList
  return {
    books: state.books
  }
}

// Return object is prop on book list container
function mapDispatchToProps(dispatch){
  // when selectBook called, result is passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// takes function and component and creates container
export default connect(mapStateToProps, mapDispatchToProps)(BookList)