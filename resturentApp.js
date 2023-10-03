var form = document.getElementById('my-form');
form.addEventListener('submit',submit);
var itemList1 = document.getElementById('table 1');
    itemList1.addEventListener('click', deleteOrder);
var itemList2 = document.getElementById('table 1');
    itemList2.addEventListener('click', deleteOrder);
var itemList3 = document.getElementById('table 1');
    itemList3.addEventListener('click', deleteOrder);

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/ecb4e7578ac04f64804df3a4695db911/resturentData")
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
    if(user.table=='table1')
    {
        //console.log("table1")
        var itemList = document.getElementById('table 1');
        itemList.addEventListener('click', deleteOrder);
        var li = document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.appendChild(document.createTextNode('Delete order'));
        li.className ='list-group-item';
        li.appendChild(document.createTextNode(user.dish));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.price));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.table));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(deleteBtn);
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user._id));
        itemList.appendChild(li)

    }
    else if(user.table=='table2')
    {
        //console.log("table2")
        var itemList = document.getElementById('table 2');
        itemList.addEventListener('click', deleteOrder);
        var li = document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.appendChild(document.createTextNode('Delete order'));
        li.className ='list-group-item';
        li.appendChild(document.createTextNode(user.dish));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.price));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.table));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(deleteBtn);
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user._id));
        itemList.appendChild(li)
    }
    else if(user.table=='table3')
    {
        //console.log("table3")
        var itemList = document.getElementById('table 3');
        itemList.addEventListener('click', deleteOrder);
        var li = document.createElement('li');
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete';
        deleteBtn.appendChild(document.createTextNode('Delete order'));
        li.className ='list-group-item';
        li.appendChild(document.createTextNode(user.dish));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.price));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user.table));
        li.appendChild(document.createTextNode(" "))
        li.appendChild(deleteBtn);
        li.appendChild(document.createTextNode(" "))
        li.appendChild(document.createTextNode(user._id));
        itemList.appendChild(li)
    }
}


function submit(e){
    e.preventDefault();
    var price = document.getElementById('price').value;
    var dish = document.getElementById('dish').value;
    var table = document.getElementById('table').value;
    //console.log(price,dish,table)
    const obj ={
        price,
        dish,
        table
    }
    axios.post("https://crudcrud.com/api/ecb4e7578ac04f64804df3a4695db911/resturentData",obj)
    .then((response)=>{
        console.log(response);
        userData(response.data)
    // if(response.data.table=='table1')
    // {
    //     //console.log("table1")
    //     var itemList = document.getElementById('table 1');
    //     itemList.addEventListener('click', deleteOrder);
    //     var li = document.createElement('li');
    //     var deleteBtn = document.createElement('button');
    //     deleteBtn.className = 'delete';
    //     deleteBtn.appendChild(document.createTextNode('Delete order'));
    //     li.className ='list-group-item';
    //     li.appendChild(document.createTextNode(response.data.dish));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.price));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.table));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data._id));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(deleteBtn);
    //     itemList.appendChild(li)

    // }
    // else if(response.data.table=='table2')
    // {
    //     //console.log("table2")
    //     var itemList = document.getElementById('table 2');
    //     itemList.addEventListener('click', deleteOrder);
    //     var li = document.createElement('li');
    //     var deleteBtn = document.createElement('button');
    //     deleteBtn.className = 'delete';
    //     deleteBtn.appendChild(document.createTextNode('Delete order'));
    //     li.className ='list-group-item';
    //     li.appendChild(document.createTextNode(response.data.dish));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.price));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.table));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data._id));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(deleteBtn);
    //     itemList.appendChild(li)
    // }
    // else
    // {
    //     //console.log("table3")
    //     var itemList = document.getElementById('table 3');
    //     itemList.addEventListener('click', deleteOrder);
    //     var li = document.createElement('li');
    //     var deleteBtn = document.createElement('button');
    //     deleteBtn.className = 'delete';
    //     deleteBtn.appendChild(document.createTextNode('Delete order'));
    //     li.className ='list-group-item';
    //     li.appendChild(document.createTextNode(response.data.dish));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.price));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data.table));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(document.createTextNode(response.data._id));
    //     li.appendChild(document.createTextNode(" "))
    //     li.appendChild(deleteBtn);
    //     itemList.appendChild(li)
    // }
    })
    .catch((err)=>{
        console.log(err)
    })
}

function deleteOrder(e){
    e.preventDefault();
        //console.log(1);
    if(e.target.classList.contains('delete'))
    {
        var li = e.target.parentElement;
        //itemList.removeChild(li);  //this is to remove the item from list

        var textArray = li.textContent.split(" ");
            var id;
            for(var i=0;i<textArray.length;i++)
            {
                if(i==3 && textArray=="table1"){
                    itemList1.removeChild(li);
                    console.log(textArray) 
                }
                if(i==3 && textArray=="table2"){
                    itemList2.removeChild(li); 
                }
                if(i==3 && textArray=="table3"){
                    itemList3.removeChild(li); 
                }

                if(i==textArray.length-1)
                {
                    id=textArray[i]
                }
            }
        var apiUrl = "https://crudcrud.com/api/ecb4e7578ac04f64804df3a4695db911/resturentData/";

        // Append the 'id' to the URL
        var deleteUrl = apiUrl + id;

        axios.delete(deleteUrl)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}