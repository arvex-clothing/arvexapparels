document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".nav");
  const menu=document.querySelector(".menu");
  if(menu&&nav){
    menu.addEventListener("click",()=>{
      nav.classList.toggle("open");
      menu.setAttribute("aria-expanded",nav.classList.contains("open"));
    });
  }

  const reveals=document.querySelectorAll(".reveal");
  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(entries=>{
      entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})
    },{threshold:.12});
    reveals.forEach(el=>io.observe(el));
  }else reveals.forEach(el=>el.classList.add("in"));

  // Subtle "fly" / magnetic hover on desktop.
  document.querySelectorAll("[data-float]").forEach(el=>{
    el.addEventListener("mousemove",e=>{
      if(window.matchMedia("(hover:hover)").matches){
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left-r.width/2)/r.width;
        const y=(e.clientY-r.top-r.height/2)/r.height;
        el.style.transform=`translate(${x*8}px,${y*8}px)`;
      }
    });
    el.addEventListener("mouseleave",()=>el.style.transform="");
  });

  const year=document.querySelector("#year");
  if(year) year.textContent=new Date().getFullYear();

  const form=document.querySelector("#inquiry-form");
  if(form){
    form.addEventListener("submit",e=>{
      const status=document.querySelector("#form-status");
      const action=form.getAttribute("action")||"";
      if(!action || action.includes("REPLACE_WITH")){
        e.preventDefault();
        if(status){status.textContent="Inquiry form is ready — connect Formspree or Web3Forms before publishing.";status.style.display="block";}
      }
    });
  }
});
