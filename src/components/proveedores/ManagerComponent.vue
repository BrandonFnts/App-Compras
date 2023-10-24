<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <v-btn outlined color="orange" class="pa-1 ml-auto ma-1 d-flex align-end flex-colum" @click="navigateRegister">
                    <v-icon dark>
                        mdi-plus
                    </v-icon>
                    Agregar Nuevo
                </v-btn>
                <v-card class="mx-auto" max-width="100%">
                    <v-card-text>
                        <div class="letter text-h4">Administración de Proveedores</div>
                        <p class="letter">Filtro de Busqueda</p>
                    </v-card-text>
                    <table-component></table-component>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import TableComponent from './TableComponent.vue';
export default {
    name: 'ManagerComponent',
    components: {
        TableComponent
    },
    methods: {
        navigateRegister() {
            this.$router.push("/registrar-proveedores");
        }
    }
}
</script>

<style>
.letter {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
}
</style>