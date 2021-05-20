const strips = [...document.querySelectorAll(".strip")];

setInterval(clock, 1000);

function clock() {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    slider(0,hours);
    slider(2,minutes);
    slider(4,seconds);

}


function slider(strip, numbers) {
    n1 = Math.floor(numbers/10);
    n2 = numbers %10;
    strips[strip].style.transform = `translateY(${n1*-4}vh)`;
    highlight(strip, n1);
    strips[strip+1].style.transform = `translateY(${n2*-4}vh)`;
    highlight(strip+1, n2);

}

function highlight(strip, digit) {
    strips[strip].querySelector(`.number:nth-of-type(${digit+1})`).classList.add("highlight");

    setTimeout(() => {
        strips[strip].querySelector(`.number:nth-of-type(${digit+1})`).classList.remove("highlight");
    }, 950);
}

clock();