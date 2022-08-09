let ID=0;
const body=document.getElementsByTagName(`body`);
const table=document.getElementsByClassName(`tr1`);
const table2=document.getElementsByClassName(`tr2`);
function foods(foodId,foodName,isfruit,isstarchy,isdairy,isprotein,isfat,price){
    this.id=foodId;
    this.id=++ID;
    this.name=foodName;
    this.isFruit=isfruit;
    this.isStarchy=isstarchy;
    this.isDairy=isdairy;
    this.isProtein=isprotein;
    this.isFat=isfat;
    this.price=price;
}
foods.prototype.uniqueId=function(){
    this.id=++ID;
}
foods.prototype.print=function(){
   const p1=document.createElement('th');
   p1.textContent=(`Id`);
   table[0].appendChild(p1);
   const p2=document.createElement('th');
   p2.textContent=(`name`);
   table[0].appendChild(p2);
   const p3=document.createElement('th');
   p3.textContent=(`Type`);
   table[0].appendChild(p3);
   const p4=document.createElement('th');
   p4.textContent=(`Price`);
   table[0].appendChild(p4);
   const w1=document.createElement('td');
   w1.textContent=(`${this.id}`);
   table2[0].appendChild(w1);
   const w2=document.createElement('td');
   w2.textContent=(`${this.name}`);
   table2[0].appendChild(w2);
   const w3=document.createElement('td');
   w3.textContent=(`${this.isFat}`);
   
   if(w3.textContent=="true"){
w3.textContent="Fat";
   }
   else 
   w3.textContent=("");
   
   table2[0].appendChild(w3);
   const w4=document.createElement('td');
   w4.textContent=(`${this.price}`);
   table2[0].appendChild(w4);
   
}
let form=document.getElementById("form");
form.addEventListener("submit",handleSubmit);
function handleSubmit(event){
    event.preventDefault();
let name=event.target.name.value;
let fruit= event.target.Fruit.checked;
let starchy= event.target.Starchy.checked;
let dairy=event.target.Dairy.checked;
let protein=event.target.Protein.checked;
let fat=event.target.Fat.checked;
let price=event.target.Price.value;

const menu=new foods("",name,fruit,starchy,dairy,protein,fat,price);
menu.print();

}
