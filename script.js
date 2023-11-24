const button = document.querySelectorAll("button")
let string = "";
button.forEach((values,index) => {
    values.addEventListener("click", (val,i) => {

        if(val.target.innerHTML == "="){
            string = eval(string)    
            document.getElementById("input").value = string;
        }else if(val.target.innerHTML == "C"){
            string = "";
            document.getElementById("input").value = string;
        }else{
            string += val.target.innerHTML
            document.getElementById("input").value = string;
        }

    })
})


// function deleted () {
//     document.getElementById("input").value = "";

// }