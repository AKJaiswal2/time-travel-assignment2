let arr = [];
let extra=[];

let hobbies="";
let name="";
let counter=1;
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
  let k=0;
  if(counter>1)
{
  let id = "extrahobbies"+counter;
  let extrahobbies = document.getElementById(id).value;
  extra[counter-2]=extrahobbies;
}

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
  for(let i=0;i<extra.length;i++)
  {
    arr.push(extra[i]);
  }
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
   for(let i=0;i<hobbies.length;i++)
   {
      if(hobbies.charAt(i)==',')
      {
        k=i;
      }
   }
   if(k!=0)
      {
        let result = hobbies.slice(0,k);
        let result2 = hobbies.slice(k+1,hobbies.length);
        hobbies=result+"&"+result2;
      }



    
  
  let body = document.getElementById('body');
  if(arr.length<=1)
  body.innerHTML=`My Hobbie is ${hobbies}.`;
  else
  body.innerHTML=`My Hobbies are ${hobbies}`;


}

function addfooter()
{
  let footer = document.getElementById('footer');
  footer.innerHTML=`Thanking you,<br>
  Your Sincerely<br>
  ${name}.`;
}

function creatediv()
{
  let fetch = document.getElementById('fetcher');
  counter++;
  fetch.innerHTML =`<input type="text" placeholder="Add Hobbies..." id='extrahobbies${counter}' oninput="addHobbies()">`;
  
}