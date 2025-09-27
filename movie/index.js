let api = "http://www.omdbapi.com/?i=tt3896198&apikey=8d1f2c26";
let input = document.querySelector("input");
let main = document.getElementById("main");


const getData = async()=>{
      let res = await fetch(`${api}&s=${input.value}`);
    //   console.log(res)
    let data = await res.json()
    // console.log(data)
    let x = data.Search;
//     console.log(x)  
    display(x) 
};



const delay = (time)=>{
     setTimeout(getData, time);
};


const display = (movies)=>{
     // console.log(movies)
     movies.map((el)=>{
     //  console.log(el.Title)
     let div = document.createElement("div")
     let title = document.createElement("h2")
     title.innerText = el.Title
     let img = document.createElement("img")
     img.src = el.Poster
     div.append(img,title)

     // console.log(div);
     

     main.append(div)


})
}

