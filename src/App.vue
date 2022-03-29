<template>
    <div id="app">
        <div class="a-to-do">
            <div class="to-do__header">
                {{ title }}
            </div>
            <div class="to-do__body">
                <div class="to-do__task">
                    <ACreateTask @createTask="handleCreateTask" />
                    <div>
                        <TheToDoListItem
                            v-for="(todo, index) in todoList"
                            :key="index"
                            :task-name="todo"
                            :task-id="index"
                            @updateTask="handleUpdateTask"
                            @deleteTask="handleDeleteTask"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ACreateTask from "@/components/a-create-task/a-create-task";
import TheToDoListItem from "@/components/the-to-do-list-item/the-to-do-list-item";

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
    methods: {
        handleCreateTask(value) {
            this.todoList.push(value);
        },
        handleUpdateTask(taskObj) {
            this.todoList.splice(taskObj.taskId, 1, taskObj.taskName);
        },
        handleDeleteTask(obj) {
            this.todoList.splice(obj.taskId, 1);
        }
    }
};
</script>

<style lang="scss" src="./assets/scss/main.scss"/>

<!--@click.native="editTodo(index, taskName)"-->
<!--@click.native="deleteTodo(index)"-->
