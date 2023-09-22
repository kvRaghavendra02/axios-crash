var form = document.getElementById('my-form');
form.addEventListener('submit', submit);
var itemList = document.getElementById('users');
    itemList.addEventListener('click', removeItem);
    itemList.addEventListener('click', editItem);




window.addEventListener("DOMContentLoaded", () =>{
    axios.get("https://crudcrud.com/api/482a332d4bb846c28f697dfb0a518dd5/appointmentData")
        .then((response)=>{
            console.log(response)
            for(var i=0;i<response.data.length;i++)
            {
                userData(response.data[i])
            }
        })
        .catch((error)=>{
            console.log(error)
        })
})

function userData(user)
{
    //console.log(user.name)
    // var name = document.getElementById('name').value;
    // //console.log(name1);
    // var email = document.getElementById('email').value;
    var combinedName = user.name+" "+user.email+" ";
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    editBtn.className = 'edit';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
    //Add class
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(combinedName));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}


function submit(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    //console.log(name1);
    var email = document.getElementById('email').value;

    const obj = {
        name,
        email
    }

    axios.post("https://crudcrud.com/api/482a332d4bb846c28f697dfb0a518dd5/appointmentData",obj)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })


    var combinedName = name+" "+email+" ";
    var itemList = document.getElementById('users');
    itemList.addEventListener('click', removeItem);
    //Create new li element
    var li = document.createElement('li');
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');
    deleteBtn.className = 'delete';
    editBtn.className = 'edit';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    editBtn.appendChild(document.createTextNode('Edit'));
    //Add class
    li.className ='list-group-item';
    li.appendChild(document.createTextNode(combinedName));
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    // //itemList.addEventListener('click', removeItem);



    // let formData = JSON.parse(localStorage.getItem('formData')) || [];
    // formData.push({name, email});
    // localStorage.setItem('formData', JSON.stringify(formData));
    //let a = JSON.parse(localStorage.getItem('formData')) 
    

    // function removeItem(e)
    // {
    //     e.preventDefault();
    //     //console.log(1);
    //     if(e.target.classList.contains('delete'))
    //         {
    //             var li = e.target.parentElement;
    //             itemList.removeChild(li);  
    //             //localStorage.removeItem('formData');
                
    //         }


    // }

    // // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
    // console.log(localStorage.getItem('name'))
    // console.log(localStorage.getItem('email'))

    // let myObj ={
    //     userName: name,
    //     userEmail: email
    // };

    //localStorage.setItem("myObj", myObj);// in this we only get object passed that is 2 objects and not the object value because it is not being stored so we need to use JSON
    //console.log(localStorage);
    
    // let myObj_serialized = JSON.stringify(myObj);// now we have converted object to string
    // localStorage.setItem("myObj", myObj_serialized);// but it is all string and not an object so we need to parse it back to object
    // //console.log(localStorage);
    // let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));//now the string is converted back to the object
    // console.log(myObj_deserialized);


    // this is to store multiple data in an array with same key name
    // let formData = JSON.parse(localStorage.getItem('formDate')) || [];
    // formData.push({name, email});
    // localStorage.setItem('formDate', JSON.stringify(formData));
    // let a = JSON.parse(localStorage.getItem("formDate")) 
    //console.log(a);

}

    

    function removeItem(e)
    {
        e.preventDefault();
        //console.log(1);
        if(e.target.classList.contains('delete'))
            {
                var li = e.target.parentElement;
                itemList.removeChild(li);  

                var email = li.textContent.split(' ')[1]; // Extract the email from the list item text
                console.log(email)
                var formData = JSON.parse(localStorage.getItem('formData')) || [];

                // Find the item in the array with the matching email
                var itemIndex = formData.findIndex(item => item.email === email);
                    console.log(itemIndex)
                if (itemIndex !== -1) {
                    console.log("yes")
                    formData.splice(itemIndex,1); // Remove the item from the array
                    localStorage.setItem('formData', JSON.stringify(formData)); // Update the localStorage
                }

                
            }
    }

    function editItem(e)
    {
        e.preventDefault();
        //console.log(1);
        if(e.target.classList.contains('edit'))
        {    
                var li = e.target.parentElement;  
                var name = li.textContent.split(' ')[0]; // Extracts the name form the list item text
                var email = li.textContent.split(' ')[1]; // Extract the email from the list item text
                var itemInputBoxName = document.getElementById('name');
                var itemInputBoxEmail = document.getElementById('email');
                itemInputBoxName.value = name;
                itemInputBoxEmail.value = email;
                //console.log('name',name);
                //console.log(email);
                itemList.removeChild(li);
                var formData = JSON.parse(localStorage.getItem('formData')) || [];

                // Find the item in the array with the matching email
                var itemIndex = formData.findIndex(item => item.email === email);
                    //console.log(itemIndex)
                if (itemIndex !== -1) {
                    //console.log("yes")
                    formData.splice(itemIndex,1); // Remove the item from the array
                    localStorage.setItem('formData', JSON.stringify(formData)); // Update the localStorage
                }

                
            }

    }
//console.log(name);
//console.log("hello");