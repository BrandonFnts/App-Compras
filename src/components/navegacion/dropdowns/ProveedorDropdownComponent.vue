<template>
    <div>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle tittle-nav texto" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="fa-solid fa-user-tie"></i>
                Proveedores
            </a>
            <ul class="dropdown-menu">
                <li>
                    <router-link to="/manager-proveedores" class="nav-link tittle-app textoDropdown">Registrar</router-link>
                </li>
                <li><a class="dropdown-item textoDropdown" href="#">Manager</a></li>
                <li>
                    <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item textoDropdown" href="#">Clientes</a></li>
            </ul>

        </li>
    </div>
</template>

<script>
export default {
    name: 'ProveedorDropdownComponent',
}
</script>

<style>
.texto {
    color: white !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}

.textoDropdown {
    color: #ff9f1c !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
</style>