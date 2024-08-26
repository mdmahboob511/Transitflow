document.addEventListener('DOMContentLoaded',function(){
  
  const observer = new IntersectionObserver(function (entries) {
  
    entries.forEach(function (entry) {
      console.log(entry);
      
      if (entry.isIntersecting) {
        console.log(entries);
        entry.target.classList.add("sho");
      }
    });
  });
  
  let elements = document.querySelectorAll(".opaq");
  
  elements.forEach(function (ele) {
    console.log(ele);
    
    observer.observe(ele);
  });
})





