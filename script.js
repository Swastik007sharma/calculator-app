let toggleSwitch = document.getElementsByClassName('themeSwitch')[0]
let OutputValue = "";
const outputElement = document.getElementById("output")

function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    changeTheme(1)
}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    changeTheme(2)
}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    changeTheme(3)
}

function changeTheme(n) {
    /* Changing main background and color */
    document.body.style.background = `var(--T${n}_MainBackground`;
    document.body.style.color = `var(--T${n}_PrimaryTextColor`;

    /* Changing background of Output Screen */
    document.querySelector('.output').style.backgroundColor = `var(--T${n}_ScreenBackgroundColor)`;

    /* Changing background of input pad*/
    document.querySelector('.inputPad').style.backgroundColor = `var(--T${n}_KeypadBackgroundColor)`

    /* Changing buttons background and color */
    document.querySelectorAll(".button").forEach((curr) => {
        curr.style.backgroundColor = `var(--T${n}_NumberKeyBackground)`;
        curr.style.color = `var(--T${n}_SecondTextColor)`;
        curr.style.boxShadow = `inset 0 -4px var(--T${n}_NumberKeyShadow)`; 
    });

    /* Changing color, box shadow and background of reset and  del key */
    document.getElementById('reset').style.backgroundColor = `var(--T${n}_KeyBackground)`;
    document.getElementById('reset').style.color = `var(--T${n}_ThirdTextColor)`;
    document.getElementById('reset').style.boxShadow = `inset 0 -4px var(--T${n}_KeyShadow)`;
    
    document.getElementById('del').style.backgroundColor = `var(--T${n}_KeyBackground)`;
    document.getElementById('del').style.color = `var(--T${n}_ThirdTextColor)`;
    document.getElementById('del').style.boxShadow = `inset 0 -4px var(--T${n}_KeyShadow)`;

    /* Changing color, box shadow and background of reset and  del key */
    document.getElementById('equall').style.backgroundColor = `var(--T${n}_ToggleKeyColor)`;
    document.getElementById('equall').style.color = `var(--T${n}_ForthTextColor)`;
    document.getElementById('equall').style.boxShadow = `inset 0 -4px var(--T${n}_ToggleKeyShadow)`;

    /* Changing toggle Switch background */
    document.getElementById('buttonContainer').style.backgroundColor = `var(--T${n}_ToggleBackgroundColor)`;

    /* Changing toggle Switch color */
    document.querySelector('.themeSwitch').style.backgroundColor = `var(--T${n}_ToggleKeyColor)`
}

document.querySelectorAll(".button").forEach((curr) => {
    curr.addEventListener("click", () => {
        OutputValue += curr.value;
        outputElement.innerText = OutputValue;
    }) 
    
});

document.getElementById("reset").addEventListener("click", () => {
    outputElement.innerText = 0
    OutputValue = ""
})

document.getElementById("del").addEventListener("click", () => {
    OutputValue = OutputValue.slice(0, -1);
    if(OutputValue == '' || OutputValue == "0"){
        outputElement.innerText = 0;
    }else{
        outputElement.innerText = OutputValue;
    }
})

document.getElementById("equall").addEventListener("click", () => {
    OutputValue = math.evaluate(outputElement.innerText);
    outputElement.innerText = OutputValue;
})