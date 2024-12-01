
const gridEl = document.querySelectorAll('.grid');

const textDisplay = document.getElementById('full');

const player = document.getElementById('player');
 const overlay = document.createElement('div');


 
/**
* il faut mettre la musique et changer la foto, car tous les grid prennent la meme foto,
*c'est bon j'ai régler ça , pour l'affichage sombre, je met un 
style overley
*/
	
overlay.style.position = 'fixed';
overlay.style.top = 0;
overlay.style.left = 0;
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
overlay.style.zIndex = 1000;
overlay.style.display = 'none';
document.body.appendChild(overlay);
/**
 * mettre en place le localStoreg; 
 */


/**
 * pour ouvrire les boites dans l'ordre,
 * créer
 */

let ordreBoxIndex = 0; 


gridEl.forEach((grid,index) => {
// Sauvegarder l'état initial
grid.addEventListener('click', () => {
	
	if(index === ordreBoxIndex){
		const originalContent = grid.innerHTML;
const originalClass = grid.className;
//let isplaying = false;
// Vérifier si la classe 'active' est déjà présente
if (grid.classList.contains('active')) {
// Revenir à l'état initial
//grid.className = originalClass;
//grid.innerHTML = originalContent;
	grid.classList.remove('active');
	player.pause();
	textDisplay.innerHTML='';
	overlay.style.display = 'none';
	
	} else {
		// Appliquer les modifications
		grid.classList.add('active');
		grid.innerHTML = '';
		//(audio.paused) ? audio.play():audio.pause();
		const image = grid.getAttribute('data_image');
		if(!grid.style.backgroundImage){
			 
			grid.style.backgroundImage = `url(${image})`; // Appliquer l'image seulement si elle n'existe pas
			grid.style.backgroundSize = 'cover'; // Ajuster la taille pour couvrir la grid
			grid.style.backgroundPosition = 'center'; // Centrer l'image
			grid.style.backgroundRepeat = 'no-repeat';// permet que l'image s'affiche une seule fois

		};
		
		textDisplay.innerHTML=`${messages[index]}`;
		overlay.style.display ='block';
		player.src= musicData[index];
		player.play();
	};// Afficher le message temporairement
	setTimeout(() => {
		if (grid.classList.contains('active')) {
			textDisplay.innerHTML = '';
overlay.style.display = 'none';
}
}, 3000); // Message disparaît après 3 secondes
ordreBoxIndex++;
localStorage.setItem('index','hallo');

	};
		
	});
}) ;


/**
 * le code pous actionner le changement aléatoir du calandreir
 * j'utilise Array.from() pour transformer le container en tableau, de ce fais 
 * j'utilise la methode sort qui melange le positiement des grid dans
 * le tableau et j'utilise Math.randum, pour le mélange soit aléatoir
 */
	
	
		const btnEl = document.getElementById("btn");
		const containerEl = document.querySelector('.container');
		btnEl.addEventListener('click',()=>{
			const nouveauContainer = Array.from(containerEl.children);
			const melangeGrid = nouveauContainer.sort(()=>Math.random()-0.5);
			containerEl.innerHTML='';
			melangeGrid.forEach(grid =>containerEl.appendChild(grid));
 
	});
	/**
	 * pour sauvgarder les boxs déjà cliquées , j' ai crée un tableau
	 * vide et j'ai utilisé la méthode push, qui rajoute chaque
	 * box clické au tableau, et je vais stocker ce tableau dans 
	 * LocalStoreg.
	 */
	 


	 
	 
	
	 
	 
	 
	 
	console.log(localStorage)
;


	

				
				
			 
		
	
	 
		
		
	
























/**
 * ici c'est les élément du button affiche message et 
 * le meloudie qui va avec , 
 */
/*const btnEl = document.getElementById('btn');
const audioEl = document.getElementById('music_el');

 
let isplaying = false;
btnEl.addEventListener('click',()=> {


if (isplaying){
	audioEl.pause();
	btnEl.textContent = 'ecoute ce morcaux';
}else{
	audioEl.currentTime = 0;
	audioEl.play();
	btnEl.textContent = 'met pause';
}
isplaying = !isplaying;
 
})

gridEl.forEach((grid)=> {

	grid.addEventListener(('click',()=>{
		
	}))
})};*/