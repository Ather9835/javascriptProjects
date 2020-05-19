console.log("Name");
get();
let btn = document.getElementById("login");
let btn2 = document.getElementById("home");
btn2.addEventListener('click',function(e){

    e.preventDefault();
    get();
     
   
   

})
var cli = false;

btn.addEventListener('click',function(e){
    
    console.log("clicked");
    e.preventDefault();
    if(cli==false)  {
        let element= document.getElementById("change");
        html=`<form class="box">
        <h1>Login</h1>
            <input type="text" placeholder="username">
            <input type="password" placeholder="password">
        </form>`;
        element.innerHTML=html;
    cli = true;}
    else{

        get();
    cli =false;

    }
})
function get(){
var key = document.getElementById('change');
let xhr = new XMLHttpRequest();
xhr.open('GET',`https://api.nasa.gov/planetary/apod?api_key=aUzV7k2iKV0vOZHgM8ldHb3yBC1RYpO53xPGrQK5`,true);

xhr.onload = function(){
       if(this.status==200)
       {
           let obJ = JSON.parse(this.responseText);
           html=`
           <div class="container" id="con">
           <div class="card">
           <img src="${obJ.url}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${obJ.title}</h5>
             <p class="card-text">${obJ.explanation}</p>
           </div>
         </div>`

        
           key.innerHTML = html;
       }
       else
       {
           console.log("not found");
       }
    }

    xhr.send();
}