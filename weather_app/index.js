let api_key = "7d02c7b3f8b7e917f18b2107f4b7cdcc"
let api = "https://api.openweathermap.org/data/2.5/weather"
let city = document.getElementById("city");
let cityname = document.getElementById("cityname");
let tamperature = document.getElementById("tamp");
let map = document.getElementById("map")



// ?q={city name}&appid={7d02c7b3f8b7e917f18b2107f4b7cdcc}




const getWeather =async()=>{
    let cityvalue = city.value
    let res = await fetch(`${api}?q=${cityvalue}&appid=${api_key}&units=metric`);
// console.log(res)
    let data = await res.json()
    console.log(data)
    display(data)
    
}


const display = ({name,main: {temp}}) =>{
    tamperature.innerText = temp;
    cityname.innerText = name
    map.src =`https://www.google.com/maps/embed/v1/place?q=${name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`;
    
    
}

// getWeather(api,"chikhali",api_key)