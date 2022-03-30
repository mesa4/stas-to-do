<template>
    <div class="a-create-task">
        <form @submit.prevent="handleSubmit">
            <input
                v-model="taskName"
                type="text"
            >
            <TheButton
                :button-type="BUTTON_TYPES.SUBMIT"
                text="add text"
            />
        </form>
    </div>
</template>

<script>

import TheButton from './../the-button';
import { BUTTON_TYPES } from "./../../constants/button-constants";

export default {
    name: 'ACreateTask',
    components: { 
        TheButton
    },
    data() {
        return {
            BUTTON_TYPES,
            taskName: '',
        };
    },
    // watch: {
    //     '$store.state.list': {
    //         handler() {
    //             this.saveTodo();
    //         },
    //         immediate: true
    //     }
    // },
    // mounted() {
    //     if (localStorage.getItem('taskName')){
    //         try {
    //             this.taskName = JSON.parse(localStorage.getItem('taskName'));
    //         } catch (e) {
    //             localStorage.removeItem('taskName');
    //         }
    //     }
    // },
    methods: {
        handleSubmit: function () {
            if (!this.taskName) {
                return alert('write some todo');
            }
            this.$emit('createTask', this.taskName);
            this.taskName = '';
        },
        // saveTodo() {
        //     const parsed = JSON.stringify(this.taskName);
        //     localStorage.setItem('createTask', parsed);
        // }

    }
};
</script>

<style lang="scss" src="./a-create-task.scss" />

