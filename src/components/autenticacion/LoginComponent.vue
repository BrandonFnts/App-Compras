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
                        <v-card-actions class="justify-content-between">
                            <v-btn outlined class="ma-1 pa-4" color="orange" @click="redirectToSignIn">
                                <i class="fas fa-sign-in-alt"></i>&nbsp; Sign in
                            </v-btn>
                            <v-btn outlined class="ma-1 pa-4" color="orange" @click="validateUser">
                                <i class="fas fa-sign-in-alt"></i>&nbsp; Login
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
    name: 'LoginComponent',
    data() {
        return {
            usuario: {
                userName: "",
                password: "",
            }
        }
    },
    methods: {
        ...mapMutations(['setUserName']),
        async validateUser() {
            try {
                const response = await axios.get('https://localhost:44331/api/documento/login', {
                    params: {
                        username: this.usuario.userName,
                        password: this.usuario.password,
                    }
                });

                if (response.data && response.data.status_code === 200) {
                    const users = response.data.data;

                    const matchingUser = users.find(user => user.nombre_usuario === this.usuario.userName && user.password === this.usuario.password);

                    if (matchingUser) {
                        this.setUserName(matchingUser.nombre_usuario);
                        localStorage.setItem('userName', this.usuario.userName);
                        alert('Bienvenido ' + this.usuario.userName);
                        this.$router.push('/manager-proveedores');
                    } else {
                        alert('Usuario no existente o contraseña incorrecta');
                    }
                } else {
                    alert('Error en la autenticación');
                }
            } catch (error) {
                console.error('Error al autenticar usuario', error);
                alert('Error al autenticar usuario. Por favor, inténtalo de nuevo.');
            }
        },
        redirectToSignIn() {
            this.$router.push('/sigin');
        },
    },
}
</script>