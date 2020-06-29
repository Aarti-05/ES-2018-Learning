class Library{
constructor(bookList){
    this.bookList=bookList;
    this.issuedBooks={

    };
}
getBookList(){
    this.bookList.forEach(element => {
        console.log(element);
    });
}
issueBook(bookName,user){
if(this.issuedBooks[bookName]==undefined){
this.issuedBooks[bookName]=user;
}
else{
    console.log("Book is already issued");
}}
returnBook(bookName){
    delete this.issuedBooks[bookName];

}
}
lib=new Library(['Physics','Chemistry','Maths']);
console.log(lib.getBookList())
console.log(lib.issueBook('Physics','Rahul'));
console.log(lib.issueBook('Physics','Anil'));