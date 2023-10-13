//imported card from react bootsrap 
import Card from 'react-bootstrap/Card';
// function for book item
function BookItem(props){
    return(
        <div>
        {/** adds title and picture and added cards */} 
        {/* <h2>{props.myBook.title}</h2> 
        <img src={props.myBook.thumbnailUrl}></img>
        <p>{props.myBook.authors[0]}</p> */}

        {/*here is code for the card */}
        <Card style={{ width: '18rem' }}>
      <Card.Img src={props.myBook.thumbnailUrl} />
      <Card.Body>
        <Card.Title>{props.myBook.title}</Card.Title>
        <Card.Text>
        {props.myBook.authors[0]}
        </Card.Text>
      </Card.Body>
    </Card>
     </div>
    );

}
//exports this js file
export default BookItem;