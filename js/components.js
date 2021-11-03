function loadVue(){
  Vue.component('upgrade',{
    template: '<button>a</button>'
  })
  
  
  
	app = new Vue({
		el:"#app",
		data:{
			player,
			VERSION,
			mouseX,
			mouseY,
			upgrade1: true
		}
	})
}
