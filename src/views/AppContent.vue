<template>
    <v-container>
        <v-layout
                text-xs-center
                wrap
        >
            <v-flex xs12>
                <v-btn @click="$emit('logout')">Logout</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "app-content"
    }
</script>

<style scoped>

</style>