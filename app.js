let ID=0;
const body=document.getElementsByTagName(`body`);
const table=document.getElementsByTagName(`table`);

var val=0;
function Foods(val,foodName,foodType,price){
    this.id=val;
    this.name=foodName;
    this.type=foodType
    this.price=price;
    this.print();
}

Foods.prototype.print=function(){
   const row=document.createElement("tr");
   table[0].appendChild(row);
   const rowId=document.createElement("td");
   rowId.textContent=(`${this.id}`);
   row.appendChild(rowId);
   const  rowName=document.createElement("td");
   rowName.textContent=(`${this.name}`);
   row.appendChild(rowName);
   const rowType=document.createElement('td');
   rowType.textContent=(`${this.type}`);
   row.appendChild(rowType);
   const rowPrice=document.createElement('td');
   rowPrice.textContent=(`${this.price}`);
   row.appendChild(rowPrice);
}

let form=document.getElementById("form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
let name=event.target.name.value;
let type=event.target.foodType.value
let price=event.target.Price.value;
let id=uniqueId();
const menu=new Foods(id,name,type,price);


}
function uniqueId(){
    val=Math.floor(1000+Math.random()*9000);
    return val;
}