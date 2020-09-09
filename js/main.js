document.getElementById("resume").innerHTML = "résumé";
document.getElementById("contact").innerHTML = "contact";
document.getElementById("other").innerHTML = "other";

anime({
  targets: ['div.resume', 'div.contact', 'div.other'],
  translateY: 100,
  delay: anime.stagger(50)
});
