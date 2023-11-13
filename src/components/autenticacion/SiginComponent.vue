<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <v-card elevation="4" width="500" class="mx-auto justify-md-center float-right">
                    <v-toolbar dark class="nav-color">
                        <v-toolbar-title class="title-nav-bar-text">
                            <i class="fas fa-user-lock"></i> &nbsp;
                            ¡Bienvenido!</v-toolbar-title>
                    </v-toolbar>
                    <form @submit.prevent="handleform">
                        <v-card-text>
                            <v-text-field label="Nombre de Usuario" outlined v-model="usuario.userName" color="orange"
                                clearable dense class="pa-1">
                            </v-text-field>
                            <div class="text--primary">
                                <v-text-field label="Password" v-model="usuario.password" outlined color="orange" clearable
                                    dense class="pa-1" type="password">
                                </v-text-field>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn outlined class="ma-1 pa-4 ml-auto" color="orange" @click="registerUser">
                                <i class="fas fa-sign-in-alt"></i>&nbsp; Create user
                            </v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </div>
        </div>
    </div>
</template>

<style>
.nav-color {
    background-color: orange !important;
}

.title-nav {
    color: white !important;
    font-family: "Roboto", "sans-serif";
    font-weight: 400;
}

.title-nav-bar-text {
    font-family: "Roboto", "sans-serif";
    font-weight: 300;
}
</style>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';

export default {
    name: 'SiginComponent',
    data() {
        return {
            usuario: {
                userName: "",
                password: "",
            },
        }
    },
    methods: {
        ...mapMutations(['setUserName']),
        async registerUser() {
            try {
                const response = await axios.post('https://localhost:44331/api/documento/login/registro', {
                    nombre_usuario: this.usuario.userName,
                    password: this.usuario.password,
                });

                alert('Usuario creado ' + this.usuario.userName);

                this.$router.push('/login');
            } catch (error) {
                alert('Error al registrar usuario. Por favor, inténtalo de nuevo.');
            }
        },
    },
}
</script>