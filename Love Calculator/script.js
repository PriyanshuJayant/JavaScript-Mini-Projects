function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        alert("Please Enter Both Names");
    } else {

        const cleanName1 = name1.toLowerCase().replace(/[^a-z]/g, "");
        const cleanName2 = name2.toLowerCase().replace(/[^a-z]/g, "");
        const combined = cleanName1 + cleanName2;

        let sum = 0;
        for (let i = 0; i < combined.length; i++) {
            sum += combined.charCodeAt(i) - 96;
        }

        const primeConstant = 193;
        let lovePercentage = Math.sin(sum * primeConstant) * 100;
        lovePercentage = Math.abs(lovePercentage);
        lovePercentage = Math.floor(lovePercentage % 101);

        const result = document.getElementById("result");
        result.innerHTML = `${name1} and ${name2}'s Love Percentage: ${lovePercentage}%`;

        if (lovePercentage < 30) {
            result.innerHTML += "<br> Not a Great Match 😔";
        } else if (lovePercentage >= 30 && lovePercentage < 50) {
            result.innerHTML += "<br> Might Workout 😉";
        } else if (lovePercentage >= 51 && lovePercentage < 70) {
            result.innerHTML += "<br> Good Match 😊";
        } else if (lovePercentage >= 71 && lovePercentage < 89) {
            result.innerHTML += "<br> Perfect Match ❤️";
        } else {
            result.innerHTML += "<br> One in a Thousand Match!!! 💘 Love is in the Air 💞💖";
        }
    }
}
