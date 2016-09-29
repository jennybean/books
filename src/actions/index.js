export function selectBook(book) {
  // must return Action, object with 'type' propety
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
