<template>
    <div id="app">
        <div class="a-to-do">
            <div class="to-do__header">
                {{ title }}
            </div>
            <div class="to-do__body">
                <div class="to-do__task">
                    <div v-if="!isEditing">
                        <input
                            v-model="taskName"
                            type="text"
                        >
                        <button 
                            type="submit"
                            value="add"
                            @click="storeTodo"
                        >
                            add
                        </button>
                    </div>

                    <div v-else>
                        <input
                            v-model="taskName"
                            type="text"
                        >
                        <button 
                            type="submit"
                            value="update"
                            @click="updateTodo"
                        >
                            update
                        </button>
                    </div>

                    <ol>
                        <li
                            v-for="(todo, index) in todoList" 
                            :key="index"
                        > 
                            {{ todo }}

                            <button @click="editTodo(index)">
                                edit
                            </button>
                            
                            <button @click="deleteTodo(index)">
                                delete
                            </button>
                        </li> 
                    </ol>
                </div>
            </div>
        </div>
        <!-- <AToDo /> -->
    </div>
</template>

<script>
// import AToDo from '@/components/a-to-do';

export default {
    // name: 'App',
    // components: {
    //     AToDo
    // }
    data() {
        return {
            isEditing: false,
            selectedIndex: null,
            title: 'Todo list',
            taskName: '',
            todoList: []
        }; 
    },

    methods: {
        storeTodo() {
            this.todoList.push(this.taskName);
            this.taskName = ''; 
        },
        deleteTodo(index) {
            this.todoList.splice(index, 1);
        },
        editTodo(index, taskName) {
            this.isEditing = true;
            this.selectedIndex = index;
            this.taskName = taskName;
        },
        updateTodo() {
            this.todoList.splice(this.selectedIndex, 1, this.taskName);
            this.isEditing = false;
            this.taskName = '';
        },
    }
};
</script>

<style lang="scss" src="./assets/scss/main.scss"/>
