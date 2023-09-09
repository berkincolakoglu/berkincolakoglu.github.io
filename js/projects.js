const projectBtn = document.querySelectorAll(".project");

projectBtn.forEach(btn => {
    btn.addEventListener("click", ()=>{
        btn.nextElementSibling.classList.toggle("visible");
        btn.querySelector(".arrow").classList.toggle("rotated");
    })
});
