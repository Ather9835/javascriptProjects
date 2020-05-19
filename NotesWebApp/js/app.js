console.log('Welcome')
setUp();


document.getElementById('bt').addEventListener('click',function(){
        console.log('clicked');
   let element = document.getElementById('side');
   if(element.style.marginLeft=="0px")
    element.style.marginLeft="-250px" 
   else
   element.style.marginLeft="0px" 
})

document.getElementById('abtn').addEventListener('click',function(){
    let set = document.getElementById('textarea');
    let head = document.getElementById('head')
    let a = localStorage.getItem('names');
    let b = localStorage.getItem('titles');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
    }
    myObj.push(set.value);
    myObj2.push(head.value);
    localStorage.setItem('names', JSON.stringify(myObj));
    localStorage.setItem('titles', JSON.stringify(myObj2));
    setUp();
});

document.getElementById("sea").addEventListener('input',function(){
    let searcha= document.getElementById('sea');
    console.log(searcha.value);
    let noteCards = document.getElementsByClassName('reqcards');
    Array.from(noteCards).forEach(function(element){
        
        let cardText = element.getElementsByTagName('p')[0].innerText;

        if(cardText.includes(searcha.value))
        {
                element.style.display= "block"
        }
        else
        {
            element.style.display= "none"
        }

    })
});

function setUp(){

    let a = localStorage.getItem('names');
    let b = localStorage.getItem('titles');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
    }
    let html='';
    myObj.forEach(function(element,index){

        html = html + `<div class="reqcards card mx-4 my-4" style="width: 18rem;">
                    <div class="card-body">
                      <h5 id="title" class="card-title">${myObj2[index]}</h5>
                    <p id="area" class="card-text">${element}</p>
                    <a id='${index}' onclick="dlete(this.id)" class="btn btn-primary">Delete</a>
                  </div>
                  </div> `;
    })

    document.getElementById('CardNotes').innerHTML = html;
    document.getElementById('textarea').value = "";
    document.getElementById('head').value = "";


}

function dlete(index){

    let a = localStorage.getItem('names');
    let b = localStorage.getItem('titles');
    if(a==null && b==null)
    {
        myObj = [];
        myObj2 = [];
    }
    else
    {
        myObj = JSON.parse(a);
        myObj2 = JSON.parse(b);
    }

    myObj2.splice(index,1);
    myObj.splice(index,1);

    localStorage.setItem('names', JSON.stringify(myObj));
    localStorage.setItem('titles', JSON.stringify(myObj2));
    setUp();

}

