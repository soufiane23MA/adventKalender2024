
const gridEl = document.querySelectorAll('.grid');

const textDisplay = document.getElementById('full');

const musicEL = document.getElementById('music-el');
 

gridEl.forEach((grid)=> {
	grid.addEventListener('click', ()=> {

		/**
		 * l'élément qui affiche le message , il faut trouver comment 
		 * je peux l'afficher avec une annimation ,
		 * et povoir rajouter a chaque grid son propre message 
		 */
		const text = grid.getAttribute('data');
		textDisplay.textContent = text;
		
		if (isplaying){
			musicEL.pause();
			 
		}else{
			musicEL.play();
			 
		}

		isplaying = !isplaying ;
		
  grid.classList.toggle('active');
		 
	})


});
/**
 * ici c'est les élément du button affiche message et 
 * le meloudie qui va avec , 
 */
const btnEl = document.getElementById('btn');
const audioEl = document.getElementById('music_el');

 
let isplaying = false;
btnEl.addEventListener('click',()=> {


if (isplaying){
	audioEl.pause();
	btnEl.textContent = 'ecoute ce morcaux';
}else{
	audioEl.play();
	btnEl.textContent = 'met pause';
}
isplaying = !isplaying;
audioEl.currentTime = 0;
})

gridEl.forEach((grid)=> {

	grid.addEventListener(('click',()=>{
		grid.classList.toggle('active');
	}))
})