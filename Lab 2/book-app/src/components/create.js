//importing use state
//function for create
import { useState } from "react";
import  axios from "axios";

function Create() {
    //this creates variable for setting title, cover and author
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');
    //this is used for saving the submission for new book
    const handleSubmit = (e)=>{
        e.preventDefault();
        //this logs it to the console
        console.log("Title: " + title + " Cover: " + cover 
        + " Author: " + author);

        const book = {title:title, cover:cover, author:author}
        //passing up data to server
        axios.post('http://localhost:4000/api/book',book)
        .then()
        .catch();
    }
    return (
        <div><h3>Hello from Create component</h3>
        {/*this creates title for book, gives it the value of title and sets it with setTitle */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/*this creates author for book  sets value to author and setAuthor saves it
                the value gets set to author*/}
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/*this creates author for book by typing it in, it gets the value of cover and saves it with setCover*/}
                <div className="form-group">
                    <label>Add Front Page Url: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                {/*this creates add book button for submitting data for book */}
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>

            </form>
        </div>
    );
}
export default Create;