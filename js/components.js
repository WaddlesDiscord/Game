function loadVue(){
  Vue.component('upgrade',{
	props: ['name']
    template: '<button>{{name}}</button>'
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
