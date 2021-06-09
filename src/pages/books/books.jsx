import { useEffect, useReducer } from 'react';
import { getFakerBooks } from '../../services';

const SET_BOOKS = 'SET_BOOKS';
const CLEAN_BOOKS = 'CLEAN_BOOKS';
const SET_FILTER = 'SET_FILTER';
const CLEAR_FILTER = 'CLEAR_FILTER';
const ADD_BOOKS = 'ADD_BOOKS';

const bookReducer = (state, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case CLEAN_BOOKS:
      return {
        ...state,
        books: [],
      };
    case SET_FILTER:
      const filtered = state.books.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        filter: action.payload,
        oldBooks: [...state.books],
        books: filtered,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        books: [...state.oldBooks],
        filter: '',
      };
      case ADD_BOOKS:
      return {
        ...state,
        books:[...books, action.payload]
      };
    default:
      throw new Error();
  }
};

const initialState = {
  error: null,
  books: [],
  oldBooks: [],
  filter: '',
  // title,
};

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

function FakerBooks() {
  const [state, dispatch] = useReducer(bookReducer, initialState);

  const loadBooks = async () => {
    const bookData = await getFakerBooks({
      quantity: 3,
    });
    dispatch({
      type: SET_BOOKS,
      payload: bookData,
    });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onSearch = debounce(({ target }) => {
    if (target.value.length > 2) {
      dispatch({
        type: SET_FILTER,
        payload: target.value,
      });
    } else if (state.filter) {
      dispatch({
        type: CLEAR_FILTER,
      });
    }
  });

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   const newBook = {
  //     title,
  //     image,
  //     isbn: Math.random().toString(),
  //     description
  //   };

  //   dispatch({
  //     type: ADD_BOOKS,
  //     payload: newBook,
  //   });
  // };

  // const { books } = state;
  return (

    <div className="row">
      <div className="col-12">
        <h3>Faker Books </h3>

        {/* <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="todoName" className="form-label">
            book name
          </label>
          <input
            type="text"
            className="form-control"
            id="todoName"
            value={title}
          />
          <input
            type="text"
            className="form-control"
            id="todoName"
            value={image}
            
          />
          <input
            type="text"
            className="form-control"
            id="todoName"
            value={description}
            
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
        <input
          className="form-control mb-2"
          placeholder="search"
          name="search"
          onKeyUp={onSearch}
        />
      </div>

      <div className="row border pt-3 justify-content-between">
        {state.books.map((item) => (
          <div
            key={item.isbn}
            className="card mb-2 p-3 me-1"
            style={{
              maxWidth: '20rem',
            }}>
            <h2 className="card-title">{item.title}</h2>
            <img src={item.image} alt={item.title} className="card-image-top img-fluid w-50" />
            <div className="card-body">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakerBooks;