
var images = [
"https://s3-projectsassets.whjr.online/Monkey_01.png",
"https://s3-projectsassets.whjr.online/Monkey_02.png",
"https://s3-projectsassets.whjr.online/Monkey_03.png",
"https://s3-projectsassets.whjr.online/Monkey_04.png",
"https://s3-projectsassets.whjr.online/Monkey_05.png",
"https://s3-projectsassets.whjr.online/Monkey_06.png",
"https://s3-projectsassets.whjr.online/Monkey_07.png",
"https://s3-projectsassets.whjr.online/Monkey_08.png",
"https://s3-projectsassets.whjr.online/Monkey_09.png",
"https://s3-projectsassets.whjr.online/Monkey_10.png"
];

var i = 0;
function nextslide() { 
 
   if(i == 9)
     {
       i=0;
     }
   
    document.getElementById("album").src = images[i];
  i++;
 
}


