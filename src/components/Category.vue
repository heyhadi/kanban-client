<template>
    <div class="col">
        <h5 v-if="category.title == 'Backlog'" class="card-title card bg-danger">{{category.title}}</h5>
        <h5 v-if="category.title == 'Production'" class="card-title card bg-warning">{{category.title}}</h5>
        <h5 v-if="category.title == 'In Progress'" class="card-title card bg-primary">{{category.title}}</h5>
        <h5 v-if="category.title == 'Done'" class="card-title card bg-success">{{category.title}}</h5>
        <div class="card card-luar" style="width: 18rem">
            <div class="card-body">
                <taskscard
                v-for="(task,i) in filteredTasks"
                :key="i"
                :task="task"
                @deleteTask="deleteTask"
                @patchTask="patchTask"
                @showEdit="showEdit"
                >
                </taskscard>
            </div>
        </div>
    </div>
</template>

<script>
import taskscard from './Tasks'
export default {
    props: ['tasks','category'],
    components: {
        taskscard
    },
    computed: {
        filteredTasks(){
            console.log(this.category.category);
            console.log(this.tasks);
            if(!this.tasks){

            }else{
                return this.tasks.filter(task=>{
                    return task.category==this.category.category
                 })
            } 
        }
    },
    methods: {
        deleteTask(payload){
            this.$emit('deleteTask', payload)
        },
        patchTask(payload){
            this.$emit('patchTask', payload)
        },
        showEdit(payload){
            // console.log(payload);
            this.$emit('showEdit', payload)
        }
    }
}
</script>

<style>

</style>