<template>
    <div id="app">
        <div class="a-to-do">
            <div class="to-do__header">
                {{ title }}
            </div>
            <div class="to-do__body">
                <div class="to-do__task">
                    <ACreateTask @createTask="handleCreateTask" />
                  
                    <ol>
                        <li
                            v-for="(todo, index) in todoList" 
                            :key="index"
                        > 
                            {{ todo }}

                            <!--                            <button @click="editTodo(index)">-->
                            <!--                                edit-->
                            <!--                            </button>-->
                            <TheButton
                                text="edit"
                                @click.native="editTodo(index)"
                            />

                            <TheButton
                                text="delete"
                                @click.native="deleteTodo(index)"
                            />
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import TheButton from './components/the-button';
import ACreateTask from "@/components/a-create-task/a-create-task";

export default {
    name: 'App',
    components: {
        ACreateTask,
        TheButton,
    },
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
        handleCreateTask(value) {
            this.todoList.push(value);
        },
        // storeTodo() {
        //     this.todoList.push(this.taskName);
        //     this.taskName = '';
        // },
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