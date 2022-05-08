function sleep(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}

async function progress() {
    const thumb = document.getElementsByClassName("progress-bar-thumb")[0];
    let thumbWidth = thumb.clientWidth;
    let percent = parseInt(document.getElementsByClassName("progress-bar-value")[0].innerHTML);
    const trackWidth = document.getElementsByClassName("progress-bar-track")[0].clientWidth;
    thumb.style.display = "flex";
    
    while(thumbWidth < trackWidth){
        thumbWidth = thumbWidth + 20;
        percent = parseInt(thumbWidth/trackWidth * 100);
        document.querySelector(".progress-bar-thumb").style.width = thumbWidth + "px"
        document.querySelector(".progress-bar-value").innerHTML = percent + "%";
        await sleep(200);
        if(thumbWidth >= trackWidth) {
            thumb.style.backgroundColor = "green";
            document.querySelector(".heading").innerHTML = "Complete!"
            break
        };
    }
}
progress();

const button = document.querySelector(".reset-button");

button.addEventListener("click", () => location.reload());