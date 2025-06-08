function calculateLove(){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    
    if (name1 === "" || name2 === "") {
        alert("Please Enter Both Names");
    }else{
        const lovePercentage = Math.floor(Math.random() * 101);

        const result = document.getElementById("result");

        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}`;

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match 😔"
        }else if(lovePercentage >= 30 && lovePercentage < 50){
            result.innerHTML += "<br> Might Workout 😉"
        }else if(lovePercentage >= 51 && lovePercentage < 70){
            result.innerHTML += "<br> Good Match 😔"
        }else if(lovePercentage >= 71 && lovePercentage < 89){
            result.innerHTML += "<br> Perfect Match 😔"
        }else{
            result.innerHTML += "<br> One in Thousand Match!!!💘 Love is in the Air💞💖"
        }
    }
}