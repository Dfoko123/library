let myLibrary=[];
function Book(id,title, author, nbrPages, read){
    if(!new.target){
        throw Error("You must use new operator to call the constructor");
    }
    this.id=id;
    this.title=title;
    this.author=author;
    this.nbrPages=nbrPages;
    this.read=read;
}
function addBooksToLibrary(title,author,nbrPages,read){
    let id=crypto.randomUUID();
    let book=new Book(id,title,author,nbrPages,read);
    return myLibrary.push(book);
}
function displayBooks(myLibrary){
    const table=document.querySelector("table");
    
    const body=document.createElement("tbody");
    
    
    
    for(let i=0;i<myLibrary.length;i++){
        const row=document.createElement("tr");
        body.appendChild(row);
        const col0=document.createElement("td");
        const col1=document.createElement("td");
        const col2=document.createElement("td");
        const col3=document.createElement("td");
        const text0=document.createTextNode(myLibrary[i].title);
        const text1=document.createTextNode(myLibrary[i].author);
        const text2=document.createTextNode(myLibrary[i].nbrPages);
        const text3=document.createTextNode(myLibrary[i].read);
        col0.appendChild(text0);
        col1.appendChild(text1);
        col2.appendChild(text2);
        col3.appendChild(text3);
        row.appendChild(col0);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
    }
    return table.appendChild(body);
}
addBooksToLibrary("Le sommeil un voleur de reve", "Fokon", 156, "yes");
displayBooks(myLibrary);
