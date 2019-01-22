// add solution here
function iLoveTheBeatles(number){
    var song = [];
    do{
        song.push("I love the Beatles!");
      number++;
    }while(number < 15)
    return song;
}

function theBeatlesPlay (musicians,instruments){
    var emp = [];
    for(var i =0; musicians.length;i++){
          if(i=0){
           emp[i] = "John Lennon plays guitar";
        }
        else {
          emp[i] = instruments;
        }
    }
    return emp
}
