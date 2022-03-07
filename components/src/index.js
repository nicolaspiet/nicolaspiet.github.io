const delay = 800;
let lastExecution = 0;
layers = document.querySelectorAll('.layer')


function removeElement(target, targetToAppear) {
    if (targetToAppear.hasClass("actualTarget")) return;
    if ((lastExecution + delay) < Date.now()){
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

document.addEventListener("mousemove", parallax);
function parallax(e){
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed)/1200
        const y = (window.innerHeight - e.pageY * speed)/1200

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}