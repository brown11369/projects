let products = [
    {
        id:1,
        name:"Maggie Noodles",
        price: 10,
        category: "food",
        quantity: 150,
        pic: "https://www.bigbasket.com/media/uploads/p/l/266160_17-maggi-masala-instant-noodles-vegetarian.jpg"
    },
    {
        id:2,
        name:"Coca Cola",
        price: 30,
        category: "drink",
        quantity: 200,
        pic: "https://www.bigbasket.com/media/uploads/p/l/266160_17-maggi-masala-instant-noodles-vegetarian.jpg"
    },
    {
        id:3,
        name:"Go Cheese",
        price: 20,
        category: "Dairy",
        quantity: 150,
        pic: "https://www.bigbasket.com/media/uploads/p/l/266160_17-maggi-masala-instant-noodles-vegetarian.jpg"
    },
    {
        id:4,
        name:"Gatorate",
        price: 70,
        category: "Drink",
        quantity: 250,
        pic: "https://www.bigbasket.com/media/uploads/p/l/266160_17-maggi-masala-instant-noodles-vegetarian.jpg"
    },
    {
        id:5,
        name:"Amul Cheese",
        price: 50,
        category: "dairy",
        quantity: 150,
        pic: "https://www.bigbasket.com/media/uploads/p/l/266160_17-maggi-masala-instant-noodles-vegetarian.jpg"
    }
]

function displayData(arr)
{


    document.getElementById("data").innerHTML=""

    arr.forEach((product,index)=>{
        let row=document.createElement("tr");

        let numberTD=document.createElement("td");
        numberTD.append(index+1);

        let nameTD=document.createElement("td");
        nameTD.append(product.name);

        let priceTD=document.createElement("td");
        priceTD.append(product.price);

        let categoryTD=document.createElement("td");
        categoryTD.append(product.category);

        let quantityTD=document.createElement("td");
        quantityTD.append(product.quantity);

        let picTD=document.createElement("td");
        let propic=document.createElement("img");
        propic.setAttribute("src",product.pic);
        picTD.appendChild(propic);

        row.appendChild(numberTD);
        row.appendChild(nameTD);
        row.appendChild(priceTD);
        row.appendChild(categoryTD);
        row.appendChild(quantityTD);
        row.appendChild(picTD);


        document.getElementById("data").appendChild(row);

    })
}



displayData(products);

let filterstatus=false;
function openfilter(){
    if(filterstatus===false){
        document.getElementById("filter_box").style.marginLeft="0px"
        filterstatus=true;
    }
    else{
        document.getElementById("filter_box").style.marginLeft="-30%"
        filterstatus=false;
    }
    
}

let filters={
    category:null,
    quantity:null,
    minPrice:null,
    maxPrice:null
}

function setFilters(property,value){

    if(value!==""){
        filters[property]=value;

        if(property==="minPrice"){
            document.getElementById("maxPrice").min=Number(value)+1;

            document.getElementById("lowprice").innerText=Number(value)+1;
        }

    }
    else{
        filters[property]=null;
    }

    console.log(filters);

}


function filter(){

    let filteredData =products;


    if(filters.category!==null){

        filteredData=filteredData.filter((product,index)=>{
            return product.category.toUpperCase()===filters.category.toUpperCase();
        })

    }

    if(filters.quantity!==null){

        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.quantity)<=product.quantity;
        })
    }


    if(filters.minPrice!==null){
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.minPrice)<=product.price;
        })
    }


    if(filters.maxPrice!==null){
        filteredData=filteredData.filter((product,index)=>{
            return Number(filters.maxPrice)>=product.price;
        })
    }



    displayData(filteredData);
    console.log(filteredData);
}
 













































// let arr =[
//     {name:"Rahul",age:21},
//     {name:"Pankaj",age:45},
//     {name:"Rohan",age:37},
//     {name:"Koan",age:12},
//     {name:"Manju",age:23}
// ]
// 1st logic

// let data = arr.filter((ele,index)=>{

//     return ele.age===23;
// })
//     console.log(data);


// 2nd logic

// let data =[];


// for(let i=0;i<arr.length;i++)
// {
//     if(arr[i].age===23)
//     {
//         data.push(arr[i]);
//     }
// }

// console.log(data);