console.log("welcome")


function Book(name,author,type){
    this.name = name;
    this.author = author;
    this.type = type;
}


function Display(){

}

Display.prototype.run = function(){
    let element = document.getElementById('form');
    element.reset();
}

Display.prototype.final =function(){

    let element = document.getElementById('tbody');
    let a = localStorage.getItem('book');
    let b = localStorage.getItem('author');
    let c = localStorage.getItem('type');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
        myObj3 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
        myObj3 = JSON.parse(c);
    }
    let html='';
    myObj.forEach(function(element,index){

        html = html +  `<tr>
        <td>${myObj[index]}</td>
        <td>${myObj2[index]}</td>
        <td>${myObj3[index]}</td>
        <td><div class="col-sm-10">
        <button type="button" id="${index}" onclick="dlete(this.id)" class="btn btn-primary">Delete</button>
      </div></td>
    </tr>`;
    })
    element.innerHTML = html;


}

let display = new Display();
display.final();

let element = document.getElementById('form');
element.addEventListener('submit',onsubmite);

function onsubmite(e){

    e.preventDefault();
    console.log('Clicked')
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('Fiction');
    let pro = document.getElementById('Programming');
    let cook = document.getElementById('Cooking');
    let typeo;
    if(fiction.checked)
    {
        typeo = 'fiction';
    }
    else if(pro.checked)
    {
        typeo = 'Programming'
    }
    else
    {
        typeo = 'Cooking'
    }
    let book = new Book(name,author,typeo);
    let display = new Display();
    let a = localStorage.getItem('book');
    let b = localStorage.getItem('author');
    let c = localStorage.getItem('type');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
        myObj3 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
        myObj3 = JSON.parse(c);
    }
    myObj.push(book.name);
    myObj2.push(book.author);
    myObj3.push(book.type);

    localStorage.setItem('book', JSON.stringify(myObj));
    localStorage.setItem('author', JSON.stringify(myObj2));
    localStorage.setItem('type', JSON.stringify(myObj3));
    
    display.final();
    display.run();
    


}

function dlete(index){
    let a = localStorage.getItem('book');
    let b = localStorage.getItem('author');
    let c = localStorage.getItem('type');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
        myObj3 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
        myObj3 = JSON.parse(c);
    }
    myObj2.splice(index,1);
    myObj.splice(index,1);
    myObj3.splice(index,1);

    localStorage.setItem('book', JSON.stringify(myObj));
    localStorage.setItem('author', JSON.stringify(myObj2));
    localStorage.setItem('type', JSON.stringify(myObj3));
    let display = new Display();
    display.final();

}