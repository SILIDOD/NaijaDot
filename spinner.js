

window.addEventListener("load",()=>{

  const spinner = document.getElementById("spinner");
  const projectContent = document.getElementById("project-content");

  setTimeout(()=>{
spinner.style.display = "none";
projectContent.style.display =" block";
  } ,3000);
})






document.querySelector(".animated-text").classList.add("animate");

$(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.return-to-top').fadeIn('slow');
    } else {
        $('.return-to-top').fadeOut('slow');
    }
});
$('.return-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});


