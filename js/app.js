//Selectors
let items=document.querySelector("#items");
let quantity=document.querySelector("#quantity");
let addBtn=document.querySelector("#addBtn");
let inputForm=document.querySelector("#inputForm");
let rows=document.querySelector("#rows");
let total=document.querySelector("#total");
//functions'
function calcTotal()
{
  let costs=document.querySelectorAll('.cost');
  total.innerText=[...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
}
function del(event)
{ if(confirm('Are you sure to delete??'))
 {
   event.target.parentElement.parentElement.remove();
   calcTotal();
 }
}

//process
products.forEach(function(product){
  // console.log(product)
  // let newOption=document.createElement("option");
  //WebApi
  let newOption=new Option(product.name,product.id);
  items.append(newOption);
})
// let newOption=new Option();
// newOption.innerText="mango";
// newOption.value=5;
// console.log(newOption);
inputForm.addEventListener('submit',function(e){
  e.preventDefault();
  let currentProduct=products.find(product=>product.id==items.value)
  let cost=currentProduct.price*quantity.valueAsNumber;
  let newTr=document.createElement("tr");
  newTr.innerHTML=`
                  <td>
                    ${currentProduct.name}
                    <p class="small text-danger mb-0 del-btn" onclick="del(event)">Delete</p>
                  </td>
                  
                  <td class="text-end">${currentProduct.price}</td>
                  <td class="text-end">${quantity.valueAsNumber}</td>
                  <td class="text-end cost">${cost}</td>
                 `;
  rows.append(newTr);
  inputForm.reset();
  // quantity.value=items.value=null;
  let costs=document.querySelectorAll('.cost');
  let costTotal=[...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
  // console.log([...costs]);
  total.innerText=costTotal;
});


