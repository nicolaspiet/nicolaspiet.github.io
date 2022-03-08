const delay = 1200;
let lastExecution = 0;
let layers = document.querySelectorAll('.layer')
const checkbox = document.querySelector(".checkbox-theme")
let root = document.documentElement;

function removeElement(target, targetToAppear) {
    if ((lastExecution + delay) < Date.now()){
        if (targetToAppear.hasClass("actualTarget")) return;
        target.fadeOut(800, function() {
            target.addClass("hiddenTarget");
            target.removeClass("actualTarget");
            targetToAppear.removeClass("hiddenTarget");
            targetToAppear.addClass("actualTarget");
            targetToAppear.addClass("target");
            targetToAppear.fadeIn(800);
        });
        lastExecution = Date.now();
    }
}

checkbox.addEventListener("change", e => {
    if ($('.checkbox-theme').is(":checked")) {
        root.style.setProperty('--primary-color', '#191919');
        root.style.setProperty('--text-color', '#white');
        root.style.setProperty('--image-background', 'url("../images/layered-waves-haikei.svg")');
        $('.button').addClass("is-outlined")
    } else {
        root.style.setProperty('--primary-color', '#fff');
        root.style.setProperty('--text-color', '#131516');
        root.style.setProperty('--image-background', 'url("../images/layered-waves-haikei_light.svg")');
        $('.button').removeClass("is-outlined")
    }
})

document.addEventListener("mousemove", parallax);
function parallax(e){
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed)/1200
        const y = (window.innerHeight - e.pageY * speed)/1200

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}