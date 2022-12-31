function newItem () {
    let li= document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let t= document.createTextNode(inputValue)
    li.appendChild(todo);
    if(inputValue=== '') {
        alert("Stop playin!")
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value="";
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event){
    if(event.target.tagName==="LI"){
        event.target.classList.toggle('checked');
    }

})




let input = document.querySelector('input[type="text"]');
let addBtn = document.querySelector('.addBtn');
let ul = document.querySelector('#myUL');

addBtn.addEventListener('click', () => {
  let li = document.createElement('li');
  li.innerHTML = input.value;
  ul.appendChild(li);
  input.value = '';
});



















// function myFunction() {
//     // console.log("testing my function")
//     var element = document.getElementById("myUL");
//     element.classList.toggle("mystyle");
//   }
