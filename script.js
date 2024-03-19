window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.8)"; /* Change background color on scroll */
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }
}
