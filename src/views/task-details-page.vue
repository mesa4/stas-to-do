<template>
    <div class="task-details-page">
        TASK NAME: {{ taskName }}
        <hr>
        <TheButton
            text="GO BACK"
            @click.native="navigateBack"
        />
        <router-link to="/">
            GO BACK
        </router-link>
    </div>
</template>

<script>
import { getFromStorage } from '@/services/loca-storage-service';
import TheButton from '@/components/the-button/the-button';

export default {
    name: 'TaskDetailsPage',
    components: { TheButton },
    computed: {
        taskName() {
            return getFromStorage('todoList')[this.$route.params.task_id];
        }
    },
    mounted() {
        console.log('this.$route: ', this.$route.params.task_id);
    },
    methods: {
        navigateBack() {
            this.$router.go(-1);
        }
    }
};
</script>