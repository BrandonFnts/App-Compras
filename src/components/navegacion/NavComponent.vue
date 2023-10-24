<template >
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav-color">
            <div class="container-fluid">
                <a class="navbar-brand tittle-nav" href="#">Compras para el hogar S.A. de C.V.</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active tittle-nav" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="/form" class="nav-link tittle-nav" href="#">Captura de datos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/form-articulos" class="nav-link tittle-nav" href="#">Artículos</router-link>
                        </li>

                        <proveedor-dropdown-component></proveedor-dropdown-component>

                        <li class="nav-item">
                            <a class="nav-link disabled tittle-nav" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <v-btn class="btn btn-outline tittle-nav" type="submit">Search</v-btn>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import RegistrarProveedoresComponent from '../proveedores/RegistrarProveedoresComponent.vue';
import ProveedorDropdownComponent from '../navegacion/dropdowns/ProveedorDropdownComponent.vue';

export default {
    name: 'NavComponent',
    components: {
        RegistrarProveedoresComponent,
        ProveedorDropdownComponent
    }
}
</script>

<style scoped>
.nav-color {
    background-color: #ff9f1c !important;
}

.tittle-nav {
    color: white !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

.btn-outline {
    outline-color: white;
    stroke: white;
    background-color: #ff9f1c !important;
}
</style>