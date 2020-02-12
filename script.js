'use strict';
   var seattleArray=[]

    // Time arrary
    var time= ["6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"]

    function CookieStand(name,min,max,avg)
    {
        this.name=name;
        this.min=min;
        this.max= max;
        this.avg=avg;
        
    }
    var seattle= new CookieStand('Seattle',23,63,6.3 )
    var tokyo= new CookieStand('Tokyo',23,63,6.3 )
    var dubai= new CookieStand('Tubai',8,10,3.7)
    var paris=new CookieStand('Taris',8,10,203)
    var lima= new CookieStand('Lima',8,10,4.6)


    var table = document.getElementById("tableBody");
    var row = document.createElement('tr');
    table.appendChild(row);
    
    // / Grabs our table and appends a row
    var seattleRow;
    seattleRow=document.createElement('th');
    seattleRow.textContent="Store Name";
    row.appendChild(seattleRow);
    
    seattleRow=document.createElement('th');
    seattleRow.textContent="Min Customer";
    row.appendChild(seattleRow);

    seattleRow= document.createElement('th');
    seattleRow.textContent="Max Customer";
    row.appendChild(seattleRow);
    
    seattleRow= document.createElement('th');
    seattleRow.textContent="Customer Average";
    row.appendChild(seattleRow);
    for(i=0;i<time.length;i++){
        seattleRow=document.createElement('th');
    seattleRow.textContent=time[i];
    row.appendChild(seattleRow);

    }
    seattleRow= document.createElement('th');
    seattleRow.textContent="Total";
    row.appendChild(seattleRow);
    
    // Create Store data elements
    row =document.createElement('tr');
    table.appendChild(row);

    var seattle2 = document.createElement('td');
    seattle2.textContent = seattle.name;
    row.appendChild(seattle2);

    var seattle2= document.createElement('td');
    seattle2.textContent= seattle.min;
    row.appendChild(seattle2);

    var seattle2= document.createElement('td');
    seattle2.textContent= seattle.max;
    row.appendChild(seattle2);

    var seattle2= document.createElement('td');
    seattle2.textContent= seattle.avg;
    row.appendChild(seattle2);
// ----------------------Data  for Tokyo______
// var tokyo2 = document.createElement('td');
//     tokyo2.textContent = tokyo.name;
//     row.appendChild(tokyo2);

//     var tokyo2= document.createElement('td');
//     tokyo2.textContent= tokyo.min;
//     row.appendChild(tokyo2);
//     var tokyo2= document.createElement('td');
//     tokyo2.textContent= seattle.max;
//     row.appendChild(tokyo2);


   
    function randomNumber (min, max)
{
    min=Math.ceil(min);
    max=Math.floor(max);
    return Math.floor(Math.random()*(max-min))+min;
    
}


var sum=0;
for(var i=0;i<14;i++)
{
    
 
// for Seattle
    var seattleNumber= randomNumber(seattle.min,seattle.max);
    var seattleCal=Math.ceil(seattleNumber*6.3);
    seattleArray.push(seattleCal);
    
    var seattle2= document.createElement('td');
    seattle2.textContent= seattleCal;
    row.appendChild(seattle2);
    sum= sum+seattleCal;
    
    


    
   
    

//   var listEl= document.getElementById("seattle");
//   var bulbaEl= document.createElement('li');
//   bulbaEl.textContent=seattleCal;
//   listEl.appendChild(bulbaEl);

    







   




    // document.write(seattleNumber,'Seattle customer')
    // document.write(seattleCal,'Seattle calculation by hour')
   
    
    // // for Tokio
    // var tokyoNumer= randomNumber(Tokyo.min,Tokyo.max);
    // var tokyoCal= Math.ceil(tokyoNumber*1.2);
    // tokyoArray.push(tokyoCal);
    // document.write(tokyoCal,'Seattle calculation by hour')
    
    // // For Dubai
    // var dubaiNumer= randomNumber(Dubai.min,Dubai.max);
    // var dubaiCal= Math.ceil(dubaiNumber*3.7);
    // dubaiArray.push(dubaiCal);
    // console.log(dubaiNumber,'Dubai customer');
    // console.log(dubaiCal,'Dubai calculation by hour');

}
var seattle2= document.createElement('td');
seattle2.textContent= sum;
row.appendChild(seattle2);
console.log(sum)
console.log(seattleArray);
// console.log(tokyoArray);
// console.log(dubaiArray);


// var seattleNumber= randomNumber(Seattle.min,Seattle.max);
// var tokyoNumber= randomNumber(Tokyo.min,Tokyo.max);
// var dubaiNumber= randomNumber(Dubai.min,Dubai.max);
// var parisNumber= randomNumber(Paris.min,Paris.max);
// var limaNumber= randomNumber(Lima.min,Lima.max);
// console.log(seattleNumber,'Seattle customer');
// console.log(tokyoNumber,'tokyo customer');
// console.log(dubaiNumber,'Dubai customer');
// console.log(parisNumber,'Paris customer');
// console.log(limaNumber,'Lima customer');
randomNumber();


