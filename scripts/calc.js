const answer = document.querySelector('.value')
let start=true
loading()
let actRequest;

function calcit(fn) {
    return new Function('return ' + fn)();
}

document.querySelector('.calckeys').addEventListener('click', (e) => {
    if(start==true) {
        answer.textContent = ""
        start=false
    }
    if(e.target.closest('div').classList.contains('math')) {
        actRequest = e.target.closest('div').textContent
        if(actRequest == "x") {
            actRequest = "*"
        } else if (actRequest == "÷") {
            actRequest = "/"
        }
        answer.textContent = answer.textContent + actRequest}
    else if(e.target.closest('div').classList.contains('clear')) {
        answer.textContent = ""
    }
    else if(e.target.closest('div').classList.contains('get')) {
        answer.textContent = calcit(answer.textContent)
    }
    })
