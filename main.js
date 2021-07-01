var GuestName = []
var Names = []

function submit()
{
var GuestName = document.getElementById("Guest_name").value;
Names.push(GuestName);

   console.log(Names);
    document.getElementById("between_lines").innerHTML = Names;
 
}

function show()
{
document.getElementById("tall_list").innerHTML = Names;
}

function sort()
{

var Sorted_Names = Names.sort();

console.log(Names);
        
var Names = Names.length;

document.getElementById("sorted_list").innerHTML = Sorted_Names;
}

function search()
{
var s = document.getElementById("Search Name").value;
var found=0;
var j;
for (j=0; j<Names.length; j++)
     {
         if(s==Names[j]){
             found=found+1;
         }
     }
document.getElementById("found_#'s_div").innerHTML="name found "+found+" time/s";
console.log("found name "+found+" times/s");
}