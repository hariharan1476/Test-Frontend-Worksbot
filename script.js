const grid = document.getElementById("grid");
const rows = 18;
const cols = 35;
for(let i = 0; i < rows * cols; i++){
    let plus = document.createElement("div");
    plus.className = "plus";
    plus.innerHTML = "+";
    grid.appendChild(plus);
}
const pluses = document.querySelectorAll(".plus");
document.addEventListener("mousemove", function(event){
    pluses.forEach(function(item){
        item.classList.remove("active");
        let rect = item.getBoundingClientRect();
        let x = rect.left + rect.width / 2;
        let y = rect.top + rect.height / 2;
        let distance = Math.sqrt(
            (event.clientX - x) * (event.clientX - x) +
            (event.clientY - y) * (event.clientY - y)
        );
        if(distance < 60){
            item.classList.add("active");
        }
    });
});