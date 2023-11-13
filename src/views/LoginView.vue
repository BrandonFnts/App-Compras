<template>
    <div>
        <login-component></login-component>
    </div>
</template>

<script>
import LoginComponent from "@/components/autenticacion/LoginComponent.vue"
export default {
    name: 'LoginView',
    components: {
        LoginComponent
    }
}
</script>