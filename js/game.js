var app;

function load(){
	loadVue();	
};

function loadVue(){
	app = new Vue({
		el:"#app",
		data:{
			player,
			VERSION,
			mouseX,
			mouseY,
		}
	})
}
