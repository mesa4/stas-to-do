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
    methods: {
        handleSubmit: function () {
            this.$emit('createTask', this.taskName);
        }
    }
};
</script>

<style lang="scss" src="./a-create-task.scss" />

