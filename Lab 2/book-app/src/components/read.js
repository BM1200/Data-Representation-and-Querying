//importing from books component
//imports axios, which i Installed with npm install axios
import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./books";
function Read() {
    //variable for books
    // const data = [
    //     {
    //     "title": "Learn Git in a Month of Lunches",
    //     "isbn": "1617292419",
    //     "pageCount": 0,
    //     "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
    //     "status": "MEAP",
    //     "authors": ["Rick Umali"],
    //     "categories": []
    //     },
    //     {
    //     "title": "MongoDB in Action, Second Edition",
    //     "isbn": "1617291609",
    //     "pageCount": 0,
    //     "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
    //     "status": "MEAP",
    //     "authors": [
    //     "Kyle Banker",
    //     "Peter Bakkum",
    //     "Tim Hawkins",
    //     "Shaun Verch",
    //     "Douglas Garrett"
    //     ],
    //     "categories": []
    //     },
    //     {
    //     "title": "Getting MEAN with Mongo, Express, Angular, and Node",
    //     "isbn": "1617292036",
    //     "pageCount": 0,
    //     "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    //     "status": "MEAP",
    //     "authors": ["Simon Holmes"],
    //     "categories": []
    //     }
    //     ];
    const[data, setData] = useState([]);
    //this is useEffect that we have imported
    useEffect(
        ()=>{
            //this gets the http from the link
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                //this gets the books from the API, by selecting books it gives me all the data
                (response)=>{
                    setData(response.data.books)
                }
            )
            //this is forr catching errors, it prints out to the console if error has occured
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );
    return(
        <div><h3>Hello from Create component</h3>
        {/*this shows book component*/ }
        <Books myBooks={data}></Books>
        </div>
    );
}
export default Read;