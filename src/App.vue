<template>
    <div id="app">
        <div class="a-to-do">
            <div class="to-do__header">
                {{ title }}
            </div>
            <div class="to-do__body">
                <div class="to-do__task">
                    <ACreateTask @createTask="handleCreateTask" />
                    <transition-group
                        name="list"
                        tag="div"
                    >
                        <TheToDoListItem
                            v-for="(todo, index) in todoList"
                            :key="todo"
                            :task-name="todo"
                            :task-id="index"
                            @updateTask="handleUpdateTask"
                            @deleteTask="handleDeleteTask"
                        />
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ACreateTask from "@/components/a-create-task/a-create-task";
import TheToDoListItem from "@/components/the-to-do-list-item/the-to-do-list-item";
import {setToStorage, getFromStorage} from "@/services/loca-storage-service";

export default {
    name: 'App',
    components: {
        ACreateTask,
        TheToDoListItem
    },
    data() {
        return {
            isEditing: false,
            selectedIndex: null,
            title: 'Todo list',
            taskName: '',
            todoList: [],
        };
    },
    watch: {
        todoList: {
            handler(value) {
                setToStorage('todoList', value);
            },
            // deep: false,
            // immediate: false
        }
    },
    created() {
        this.setInitialData();
    },
    // mounted() {
    //     if (localStorage.getItem('todoList')) {
    //         try {
    //             this.todoList = JSON.parse(localStorage.getItem('todoList'));
    //         } catch (e) {
    //             localStorage.removeItem('todoList');
    //         }
    //     }
    // },
    methods: {
        handleCreateTask(value) {
            this.todoList.push(value);
            // this.saveTodo();
        },
        handleUpdateTask(taskObj) {
            this.todoList.splice(taskObj.taskId, 1, taskObj.taskName);
            // this.saveTodo();
        },
        handleDeleteTask(obj) {
            this.todoList.splice(obj.taskId, 1);
            // this.saveTodo();
        },
        // saveTodo() {
        //     const parsed = JSON.stringify(this.todoList);
        //     localStorage.setItem('todoList', parsed);
        // },
        setInitialData() {
            this.todoList = getFromStorage('todoList') || [];
        }

    }
};
</script>

<style lang="scss" src="./assets/scss/main.scss"/>

