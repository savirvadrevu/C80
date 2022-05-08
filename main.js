name_of_the_student_array = [];

function submit()
{
var display_student_array = [];

for (var s=1 ; s <=4; s++  )

{
var name_of_the_student = document.getElementById ("name_of_the_student_"+s).Value;
console.log(name_of_the_student);
name_of_the_student_array.push (name_of_the_student);   
}
var lenght_of_name_of_students_array = name_of_the_student_array.length;
console.log(lenght_of_name_of_students_array);
for (var a=0 ; a <lenght_of_name_of_students_array; a++  )

{
    display_student_array.push("<h4>NAME- "+ name_of_the_student_array[a] + "</h4>");
console.log(display_student_array)
}
document.getElementById("display_name_with_commas").innerHTML = display_student_array
var remove_commas = display_student_array.join(" ");
 console.log(remove_commas);
  document.getElementById("display_name_without_commas").innerHTML = remove_commas;

document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() 
{
    name_of_the_student_array.sort();
 console.log(name_of_the_student_array);
  var display_student_array_sorting = [];
   var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);
     for (var k = 0; k < lenght_of_name_of_students_array;k++)
      { display_student_array_sorting.push("NAME- " + name_of_the_student_array[k] + "</h4>");
       console.log(display_student_array_sorting); }   
       var remove_commas = display_student_array_sorting.join(" ");
        console.log(remove_commas);
        document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}