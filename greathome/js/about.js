// function scrollHeader() {
//   if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
//     document.getElementsByClassName("banner").style.height = "20%";
//   } else {
//     document.getElementsByClassName("banner").style.height = "auto";
//   }
// }
//
// window.onscroll = function() {scrollHeader()};

function unhideLightbox() {

  document.getElementById('lightbox-overlay').classList.remove('hidden');
  document.getElementById('covered').classList.remove('hidden');
  document.body.style.overflow = "hidden";

}

document.getElementById('cover').onclick = unhideLightbox;



function closeLightbox(lightboxID) {

	document.getElementById('lightbox-overlay').classList.add('hidden');
	document.getElementById('covered').classList.add('hidden');

}

document.getElementById('lightbox-overlay').onclick = closeLightbox;
