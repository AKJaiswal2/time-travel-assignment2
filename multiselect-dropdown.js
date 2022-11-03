let arr = [];
let hobbies="";
let name="";
function addnq(){
   name = document.getElementById('client_name').value;
   let qualification = document.getElementById('client_qualification').value;
   let header = document.getElementById('header');
   header.innerHTML=`I,${name}, would like to apply for an internship at your organisation.<br>
   My Qualification is ${qualification}.`;
   addfooter();
}


function addHobbies(){
  hobbies="";
  arr=[];

  let Singing = document.getElementById('Singing');
  if(Singing.checked)
  arr.push(Singing.value);
  let Dancing = document.getElementById('Dancing');
  if(Dancing.checked)
  arr.push(Dancing.value);
  let cricket = document.getElementById('Cricket');
  if(cricket.checked)
  arr.push(cricket.value);
  let football = document.getElementById('Football');
  if(football.checked)
  arr.push(football.value);
  let skating = document.getElementById('Skating');
  if(skating.checked)
  arr.push(skating.value);
  for(let i=0;i<arr.length;i++)
  {
    if(i==0)
    {
      hobbies=hobbies+arr[i];
    }
    else
    {
    hobbies=hobbies+","+arr[i];
    }
  }
    
  
  let body = document.getElementById('body');
  body.innerHTML=`My hobbies are ${hobbies}.`;


}

function addfooter()
{
  let footer = document.getElementById('footer');
  footer.innerHTML=`Thanking you,<br>
  Your Sincerely<br>
  ${name}.`;
}