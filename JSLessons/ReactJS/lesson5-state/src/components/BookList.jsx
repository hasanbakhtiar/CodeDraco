import React, { Component } from "react";
import bookOnePhoto from '../img/img2.jpg';
import bookTwoPhoto from '../img/img3.jpg';
class BookList extends Component {
    constructor(props){
        super(props);
        this.nextBook = this.nextBook.bind(this);
        this.prevBook = this.prevBook.bind(this);
        this.state={
            bookImg:bookOnePhoto,
            bookName : "Alladin",
            author: "Habibi ve Mebibi",
            pageLenght: 1001
        }
    }
    

nextBook(){
    this.setState({
        bookImg:bookTwoPhoto,
        bookName : "Baslangic",
        author: "Dan Brown",
        pageLenght: 300
    })
}

prevBook(){
    this.setState({
        bookImg:bookOnePhoto,
        bookName : "Alladin",
        author: "Habibi ve Mebibi",
        pageLenght: 1001
    })
}

  render() {
    return (
      <div>
        <h1 className="text-center">BookList</h1>
        <div className="container mt-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="card col-3">
              <img src={this.state.bookImg} style={{width:"150px"}} className="card-img-top" alt={this.state.bookImg} />
              <div className="card-body">
                <h5 className="card-title">Book name:{this.state.bookName}</h5>
                <p className="card-text">
                Author:{this.state.author}
                </p>
                <p>Page count:{this.state.pageLenght}</p>
              </div>
            </div>

            <div className="mt-5">
              <button onClick={this.prevBook} className=" btn btn-warning">Prev </button>
              <button onClick={this.nextBook} className=" btn btn-primary mx-1">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
