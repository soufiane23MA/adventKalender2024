
const gridEl = document.querySelectorAll('.grid');

const textDisplay = document.getElementById('full');

const player = document.getElementById('player');
//const gridEl1 = document.getElementById('grid1');



 
 

/*gridEl.forEach(grid => {
	grid.addEventListener('click',()=> {
 console.log('hallo');
 grid.classList.toggle('active');
 grid.innerHTML='';})
});

 /**
	* il faut mettre la musique et changer la foto, car tous les grid prennent la meme foto
  */


		
	
		
			gridEl.forEach((grid,index) => {
				// Sauvegarder l'état initial
				grid.addEventListener('click', () => {
				const originalContent = grid.innerHTML;
				const originalClass = grid.className;
				let isplaying = false;
			// Vérifier si la classe 'active' est déjà présente
			if (grid.classList.contains('active')) {
				// Revenir à l'état initial
				grid.className = originalClass;
				grid.innerHTML = originalContent;
			} else {
				// Appliquer les modifications
				grid.classList.add('active');
				grid.innerHTML = '';
				//(audio.paused) ? audio.play():audio.pause();
				const image = grid.getAttribute('data_image');
				grid.style.backgroundImage = `url(${image})`;
				textDisplay.innerHTML=`${messages[index]}`;
				 
				//grid.style.backgroundImage = `url=(${imageData[index]})`;
		const player =document.getElementById("player");
		player.src= musicData[index];
		player.play();
				 
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


  
	/*btnEl.addEventListener('click',()=> {
		const containerEl = document.querySelector(".container");
		const gridsEl = array.from(containerEl.children);
		gridsEl.sort(() => Math.random() - 0.5); // Mélange aléatoire
		gridsEl.forEach(grid=> containerEl.appendChild(grid));

	});*/
 

 
			
			
	
				
				
				// Ajouter une nouvelle image ou musique ici si nécessaire
		
		
	
	 
		
		
	
























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