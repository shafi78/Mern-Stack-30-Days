let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let input = document.querySelector('input');

btn.addEventListener('click',function(){
    if (input.value == ""){
        alert("Please enter something!")
    }

    else {

        let item = document.createElement('li');
        item.innerText = input.value;
        
        let delBtn = document.createElement('button');
        delBtn.innerText = 'x';
        delBtn.classList.add("delete");
        item.appendChild(delBtn);
        
        ul.append(item);
        input.value = "";
        
    }
})



// Event delegation

ul.addEventListener('click',function(){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement ;
        listItem.remove();
        console.log("Deleted");
    }
})

