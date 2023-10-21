//importing book item
import BookItem from "./bookitem";

// fuction for books that uses <BookItem> tag to use it
//this uses a map to return the book data
function Books(props){
    
    return props.myBooks.map(
        // 
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );

}
//exports this js file
export default Books;