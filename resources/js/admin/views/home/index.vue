<template>
    <h1>Rent a flat</h1>
    <button @click="$router.push({name: 'dashboard'})">Go to dashboard</button>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
    name: 'home'
})
</script>
