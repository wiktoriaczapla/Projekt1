async function foo(){
    let request = await fetch("https://www.boredapi.com/api/activity")
    let data = await request.json()
    console.log(data.activity)

    // Przekształć teksty na tekst zaczynający się od wielkiej litery
    let activityText = data.activity.charAt(0).toUpperCase() + data.activity.slice(1);
    let typeText = data.type.charAt(0).toUpperCase() + data.type.slice(1);


    let activityElement = document.querySelector(".activity");
    activityElement.textContent = data.activity

    let typElement = document.querySelector(".type");
    typElement.textContent = data.type

}

foo();