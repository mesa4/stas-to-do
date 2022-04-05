<template>
    <div class="the-to-do-list-item">
        <div class="container">
            <div class="to-do-list-item__inner">
                <template
                    v-if="!isEditMode"
                >
                    <div
                        class="to-do-list-item__text"
                        :title="taskName"
                    >
                        {{ taskName }}
                    </div>
                    <TheButton
                        text="edit"
                        class="to-do-list-item__button"
                        @click.native="handleEditTask"
                    />
                    <TheButton
                        text="delete"
                        class="to-do-list-item__button"
                        @click.native="handleDeleteTask"
                    />
                </template>
                <template v-else>
                    <input
                        v-model="localTaskName"
                        type="text"
                        class="todo-input"
                    >
                    <TheButton
                        text="save"
                        class="to-do-list-item__button"
                        @click.native="handleUpdateTask"
                    />
                    <TheButton
                        text="cancel"
                        class="to-do-list-item__button"
                        @click.native="handleCancelTask"
                    />
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import TheButton from "./../../components/the-button/the-button.vue";

export default {
    name: 'TheToDoListItem',
    components: {
        TheButton,
    },
    props: {
        taskName: {
            type: String,
            default: ''
        },
        taskId: {
            type: Number,
            required: true
        }
    },

    data() {
        return {
            isEditMode: false,
            localTaskName: this.taskName,
        };
    },
    methods: {
        handleEditTask() {
            this.isEditMode = true;
        },
        handleDeleteTask() {
            this.$emit('deleteTask', {taskName: this.localTaskName, taskId: this.taskId});
        },
        handleUpdateTask() {
            this.$emit('updateTask', {taskName: this.localTaskName, taskId: this.taskId});
            this.isEditMode = false;
        },
        handleCancelTask() {
            this.isEditMode = false;
        },
    }
};

</script>

<style lang="scss" src="./the-to-do-list-item.scss" />
