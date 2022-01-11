const app = new Vue({
 el: '#app',
 data: {
    titulo: 'Lista de tareas pendientes',
    tareas: [],
    nuevaTarea: ''
 },
 methods:{
    agregarTarea: function(){
        this.nuevaTarea
        this.tareas.push({
            nombre: this.nuevaTarea,
            estado: false
        });
        this.nuevaTarea = '';
        localStorage.setItem('lista-datos', JSON.stringify(this.tareas));
    },
    editarTarea: function (index){
        this.tareas[index].estado = true;
        localStorage.setItem('lista-datos', JSON.stringify(this.tareas));
    },
    eliminarTarea: function(index){
        this.tareas.splice(index, 1);
        localStorage.setItem('lista-datos', JSON.stringify(this.tareas));
    }
 },
 created: function(){
     let datosDB = JSON.parse(localStorage.getItem('lista-datos'));
     if(datosDB === null){
         this.tareas = [];
     }else {
         this.tareas = datosDB;
     }
 }
})