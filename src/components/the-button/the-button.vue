<template>
    <button 
        :type="buttonType"
        class="the-button"
    >
        {{ text }}
    </button>
</template>

<script>
import { BUTTON_TYPES } from './../../constants/button-constants';

export default {
    name: 'TheButton',
    props: {
        buttonType: {
            type: String,
            validator: val => Object.values(BUTTON_TYPES).includes(val), // expected arr with two values ['button', 'submit'];
            default: BUTTON_TYPES.BUTTON
        },
        text: {
            type: String,
            default: ''
        },
    },
};

</script>

<style lang='scss' src='./the-button.scss' />
