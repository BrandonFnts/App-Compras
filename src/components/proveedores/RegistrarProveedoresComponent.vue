<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <v-card class="mx-auto">
                    <v-card-text>
                        <p class="text-h4 text--primary">
                            Nuevo Proveedor
                        </p>
                        <div>Datos Generales</div>

                        <v-divider></v-divider>

                        <ValidationObserver v-slot="{ passes, validate }" ref="form">
                            <form @submit.prevent="validateForm(validate)">
                                <div class="text--primary">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="rfc" rules="required|rfc" v-slot="{ errors }">
                                                <v-text-field label="Rfc" color="orange" v-model="rfc" outlined clearable
                                                    dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Razón Social" rules="required|min:5|max:250"
                                                v-slot="{ errors }">
                                                <v-text-field label="Razón Social" color="orange" v-model="razonSocial"
                                                    outlined clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Contacto" rules="required|min:5|max:250"
                                                v-slot="{ errors }">
                                                <v-text-field label="Contacto" color="orange" v-model="contacto" outlined
                                                    clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Status" rules="required" v-slot="{ errors }">
                                                <v-select :items="status" outlined label="Status" color="orange"
                                                    v-model="statusSeleccionado" dense :error-messages="errors">
                                                    <v-option>{{ status }}</v-option>
                                                </v-select>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Tel. Principal" rules="required|numeros|max:10"
                                                v-slot="{ errors }">
                                                <v-text-field label="Tel. Principal" color="orange" v-model="telPrincipal"
                                                    outlined clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Tel. Movil" rules="required|numeros|max:10"
                                                v-slot="{ errors }">
                                                <v-text-field label="Tel. Movil" color="orange" v-model="telMovil" outlined
                                                    clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                                                <v-text-field label="Email" color="orange" v-model="email" outlined
                                                    clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <div>Dirección</div>
                                <v-divider></v-divider>
                                <div class="text--primary">
                                    <div class="row">
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Código Postal" rules="required|numeros|max:5"
                                                v-slot="{ errors }">
                                                <v-text-field label="Código Postal" color="orange" v-model="codigoPostal"
                                                    outlined clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Número Interior" rules="required" v-slot="{ errors }">
                                                <v-text-field label="Número Interior" color="orange"
                                                    v-model="numeroInterior" outlined clearable dense
                                                    :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Número Exterior" rules="required" v-slot="{ errors }">
                                                <v-text-field label="Número Exterior" color="orange"
                                                    v-model="numeroExterior" outlined clearable dense
                                                    :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Calle" rules="required|max:100|min:5"
                                                v-slot="{ errors }">
                                                <v-text-field label="Calle" color="orange" v-model="calle" outlined
                                                    clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Colonia" rules="required|max:100|min:5"
                                                v-slot="{ errors }">
                                                <v-text-field label="Colonia" color="orange" v-model="colonia" outlined
                                                    clearable dense :error-messages="errors"></v-text-field>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Entidad" rules="required" v-slot="{ errors }">
                                                <v-select :items="entidad" outlined label="Entidad" color="orange"
                                                    v-model="entidadSeleccionada" dense :error-messages="errors">
                                                    <v-option>{{ entidad }}</v-option>
                                                </v-select>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                                            <ValidationProvider name="Municipio" rules="required" v-slot="{ errors }">
                                                <v-select :items="municipio" outlined label="Municipio" color="orange"
                                                    v-model="municipioSeleccionado" dense :error-messages="errors">
                                                    <v-option>{{ municipio }}</v-option>
                                                </v-select>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </div>
                                <v-btn color="orange lighten-2 texto" type="submit" :disabled="!passes">Guardar</v-btn>
                            </form>
                        </ValidationObserver>
                    </v-card-text>
                </v-card>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3 col-lg3">
                <v-card class="mx-auto">
                    <v-card-text>
                        <div>Detalle del Proveedor</div>
                        <v-divider></v-divider>
                        <v-avatar class="justify-sm-center float-right" color="light-blue" size="56">
                            <span class="white--text text-h5">{{ avatar_name }}</span>
                        </v-avatar>
                        <p class="flex-wrap-reverse">Datos Capturados:</p>
                        <div class="text--primary">

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Rfc: <strong>{{ rfc }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Status: <strong>{{ statusSeleccionado }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Razón Social: <strong>{{ razonSocial }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Contacto: <strong>{{ contacto }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>E-mail: <strong>{{ email }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>Código Postal: <strong>{{ codigoPostal
                                    }}</strong></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-chip class="ma-2" color="orange" outlined>
                            <v-icon left>mdi-wrench</v-icon>
                            Update Settings
                        </v-chip>
                        <v-btn text color="orange">
                            Learn More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
import { required, max, min } from 'vee-validate/dist/rules';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import axios from 'axios';

extend('max', {
    ...max,
    message: 'El campo {_field_} no debe tener más de {_max_} caracteres',
})
extend('min', {
    ...min,
    message: 'El campo {_field_} no debe tener menos de {_min_} caracteres',
})
extend('required', {
    ...required,
    message: 'El campo {_field_} es obligatorio',
})
extend('base', {
    validate: value => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(value);
    },
    message: 'Este campo solo debe de contener letras y números',
})
extend('numeros', {
    validate: value => {
        const regex = /^[0-9]+$/;
        return regex.test(value);
    },
    message: 'El campo {_field_} solo debe de contener números',
})
extend('email', {
    validate: value => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(value);
    },
    message: 'El campo {_field_} debe ser una dirección de correo electrónico válida',
})
extend('espa', {
    validate: value => {
        const regex = /\s{2,}^[a-zA-Z0-9ñ.,:@!?¿¡áéíóú\s]*$/;
        return regex.test(value);
    },
    message: 'El campo {_field_} debe ser una dirección de correo electrónico válida',
})
extend('rfc', {
    validate: value => {
        const regex = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/;
        return regex.test(value);
    },
    message: 'El campo {_field_} debe ser un rfc valido',
})

export default {
    name: 'RegistrarProveedoresComponent',
    components: {
        ValidationObserver,
        ValidationProvider,
    },
    data() {
        return {
            items: [],
            status: [
                'Activo',
                'Inactivo',
                'Pediente'
            ],
            entidad: [
                'Hidalgo',
                'Edomex',
                'CDMX'
            ],
            municipio: [
                'Atotonilco de Tula',
                'Ecatepec',
                'los pinos'
            ],
            rfc: null,
            razonSocial: null,
            contacto: null,
            statusSeleccionado: null,
            telPrincipal: null,
            telMovil: null,
            email: null,
            codigoPostal: null,
            numeroInterior: null,
            numeroExterior: null,
            calle: null,
            colonia: null,
            entidadSeleccionada: null,
            municipioSeleccionado: null,
            avatar_name: 'BF',
            formularioCompleto: false,
        }
    },
    methods: {
        validateForm(validate) {
            validate().then(isValid => {
                if (isValid) {
                    this.enviarFormulario();
                }
            });
        },
        enviarFormulario() {
            this.$refs.form.validate().then(isValid => {
                if (isValid) {
                    const data = {
                        rfc: this.rfc,
                        razon_social: this.razonSocial,
                        contacto: this.contacto,
                        status: this.statusSeleccionado,
                        tel_principal: this.telPrincipal,
                        tel_movil: this.telMovil,
                        email: this.email,
                        codigo_postal: this.codigoPostal,
                        numero_interior: this.numeroInterior,
                        numero_exterior: this.numeroExterior,
                        calle: this.calle,
                        colonia: this.colonia,
                        entidad: this.entidadSeleccionada,
                        municipio: this.municipioSeleccionado,
                    };
                    console.log('Datos a enviar:', data);
                    axios.post('https://localhost:44331/api/documento/proveedor/registro', data)
                        .then(response => {
                            console.log('Proveedor creado:', response.data);
                        })
                        .catch(error => {
                            console.error('Error al crear proveedor:', error);
                        });
                }
            });
        },
        actualizarFormularioCompleto() {
            if (this.$refs.observer && this.$refs.observer.flags) {
                this.formularioCompleto = !this.$refs.observer.flags.invalid;
            }
        },

    },
    watch: {
        rfc: 'actualizarFormularioCompleto',
        razonSocial: 'actualizarFormularioCompleto',
        contacto: 'actualizarFormularioCompleto',
        tipo: 'actualizarFormularioCompleto',
        telPrincipal: 'actualizarFormularioCompleto',
        telMovil: 'actualizarFormularioCompleto',
        email: 'actualizarFormularioCompleto',
        codigoPostal: 'actualizarFormularioCompleto',
        numeroInterior: 'actualizarFormularioCompleto',
        numeroExterior: 'actualizarFormularioCompleto',
        calle: 'actualizarFormularioCompleto',
        colonia: 'actualizarFormularioCompleto',
        entidadSeleccionada: 'actualizarFormularioCompleto',
        municipioSeleccionado: 'actualizarFormularioCompleto',
    }

}
</script>

<style>
.texto {
    color: white !important;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
}
</style>