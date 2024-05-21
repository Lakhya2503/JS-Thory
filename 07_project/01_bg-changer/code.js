const button = document.querySelectorAll("button")
const body = document.querySelector("body")

button.forEach((btn)=>{
  btn.addEventListener("click", (even)=>{
    if(even.target.className == "Red"){
      body.style.backgroundColor = "Red"
    } else if (even.target.className == "Orange"){
      body.style.backgroundColor = "Orange"
    }else if (even.target.className == "Yellow"){
      body.style.backgroundColor = "Yellow"
    }else if (even.target.className == "Green"){
      body.style.backgroundColor = "Green"
    }else if (even.target.className == "Blue"){
      body.style.backgroundColor = "Blue"
    }else if (even.target.className == "Indigo"){
      body.style.backgroundColor = "Indigo"
    }else if (even.target.className == "Violet"){
      body.style.backgroundColor = "Violet"
    }
    
  })
})