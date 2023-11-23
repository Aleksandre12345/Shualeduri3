let boxes = document.querySelectorAll(".box")
let procenti = document.querySelectorAll(".numb")
let angarishi = document.querySelector(".firstinput")
let secondinput = document.querySelector(".secondinput")
let tip = document.querySelector(".greenboxnum1")
let total = document.querySelector(".greenboxnum2")
let custom = document.querySelector(".custom")
let cant = document.querySelector(".cant")
let Button = document.querySelector(".greentxtbutton")
let percent = 0;
let validation = /^[0-9]+$/;


    for ( let i = 0; i < boxes.length; i ++) {
        boxes[i].addEventListener("click", function () {
            boxes[i].classList.toggle('cisferi')
            procenti[i].classList.toggle('mwvane')
            for (let j = 0; j < boxes.length; j ++) {
                if (j != i) {
                    boxes[j].classList.remove('cisferi')
                    procenti[j].classList.remove('mwvane')
                }
            }
            custom.value = ""
            percent = parseInt(procenti[i].innerText);
            if (isNaN(percent)) {
                percent = 0;
            }
           calculateall();
        });
    }

    angarishi.addEventListener('focus', function () {
        angarishi.classList.toggle("Outline")
    })
    angarishi.addEventListener("input", function () {
       calculateall();
    });

    custom.addEventListener('focus', function () {
        custom.classList.toggle("Outline")
    })
    secondinput.addEventListener('focus', function () {
        secondinput.classList.toggle("Outline1")
    })
    angarishi.addEventListener('blur', function () {
        angarishi.classList.remove("Outline")
    })

    custom.addEventListener('blur', function () {
        custom.classList.remove("Outline")
    })
    secondinput.addEventListener('blur', function () {
        secondinput.classList.remove("Outline1")
    })

    function calculateall() {
        if (secondinput.value === "0") {
            cant.innerHTML = "Can't Be Zero"
            tip.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
        } else if (secondinput.value.trim() === "") {
            tip.innerHTML = "$0.00"
            total.innerHTML = "$0.00"
            cant.innerHTML = ""
        } else if (secondinput.value < "0") {
            cant.innerHTML = "Can't Be Negative"
        } else {
              if (custom.value) {
                    percent = Number(custom.value)
                }
                cant.innerHTML = ""
                const tipAmount = Number(angarishi.value * percent / 100) / Number(secondinput.value);
                tip.innerHTML = "$" + tipAmount.toFixed(2);
    
                const totalAmount = (Number(angarishi.value * percent / 100) + Number(angarishi.value)) / Number(secondinput.value);
                total.innerHTML = "$" + totalAmount.toFixed(2);
            
        }
    }


    secondinput.addEventListener("input", function () {
       calculateall();
    });
    
    Button.addEventListener("click", function () {
        percent = 0
        angarishi.value = "";
        secondinput.value = "";
        custom.value = "";
        tip.innerHTML = "$0.00";
        total.innerHTML = "$0.00";
    
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("cisferi");
            procenti[i].classList.remove("mwvane");
        }
    
        cant.innerHTML=""
    });
    
    custom.addEventListener("focus", function () {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.remove("cisferi");
            procenti[i].classList.remove("mwvane");
        }
        
    })
    
    custom.addEventListener("input", function () {
       calculateall();
    })




