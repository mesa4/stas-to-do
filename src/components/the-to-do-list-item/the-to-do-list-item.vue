<template>
    <div class="the-to-do-list-item">
        <div v-if="!isEditMode">
            {{ taskName }}
            <TheButton
                text="edit"
                @click.native="handleEditTask"
            />
            <TheButton
                text="delete"
                @click.native="handleDeleteTask"
            />
        </div>
        <div v-else>
            <input
                v-model="localTaskName"
                type="text"
            >
            <TheButton
                text="save"
                @click.native="handleUpdateTask"
            />
            <TheButton
                text="cancel"
                @click.native="handleCancelTask"
            />
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
