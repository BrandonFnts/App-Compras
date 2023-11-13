<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <v-data-table :headers="headers" :items="proveedores" class="elevation-1">
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Proveedores</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <v-card>
                  <v-card-title>
                    <span class="text-h5">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="rfc" rules="required|rfc" v-slot="{ errors }">
                            <v-text-field label="Rfc" color="orange" v-model="editedItem.rfc" outlined clearable dense
                              :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Razón Social" rules="required|min:5|max:250" v-slot="{ errors }">
                            <v-text-field label="Razón Social" color="orange" v-model="editedItem.razon_social" outlined
                              clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Contacto" rules="required|min:5|max:250" v-slot="{ errors }">
                            <v-text-field label="Contacto" color="orange" v-model="editedItem.contacto" outlined clearable
                              dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Status" rules="required" v-slot="{ errors }">
                            <v-select :items="status" outlined label="Status" color="orange" v-model="editedItem.status"
                              dense :error-messages="errors">
                              <v-option>{{ status }}</v-option>
                            </v-select>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Tel. Principal" rules="required|numeros|max:10" v-slot="{ errors }">
                            <v-text-field label="Tel. Principal" color="orange" v-model="editedItem.tel_principal"
                              outlined clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Tel. Movil" rules="required|max:10" v-slot="{ errors }">
                            <v-text-field label="Tel. Movil" color="orange" v-model="editedItem.tel_movil" outlined
                              clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
                            <v-text-field label="Email" color="orange" v-model="editedItem.email" outlined clearable dense
                              :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Código Postal" rules="required|numeros|max:5" v-slot="{ errors }">
                            <v-text-field label="Código Postal" color="orange" v-model="editedItem.codigo_postal" outlined
                              clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Número Interior" rules="required" v-slot="{ errors }">
                            <v-text-field label="Número Interior" color="orange" v-model="editedItem.numero_interior"
                              outlined clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Número Exterior" rules="required" v-slot="{ errors }">
                            <v-text-field label="Número Exterior" color="orange" v-model="editedItem.numero_exterior"
                              outlined clearable dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Calle" rules="required|max:100|min:5" v-slot="{ errors }">
                            <v-text-field label="Calle" color="orange" v-model="editedItem.calle" outlined clearable dense
                              :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Colonia" rules="required|max:100|min:5" v-slot="{ errors }">
                            <v-text-field label="Colonia" color="orange" v-model="editedItem.colonia" outlined clearable
                              dense :error-messages="errors"></v-text-field>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Entidad" rules="required" v-slot="{ errors }">
                            <v-select :items="estados" outlined label="Entidad" color="orange"
                              v-model="editedItem.entidad" dense :error-messages="errors"
                              @input="cargarMunicipiosPorEstado">
                              <template v-slot:item="{ item }">
                                {{ item }}
                              </template>
                            </v-select>
                          </ValidationProvider>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <ValidationProvider name="Municipio" rules="required" v-slot="{ errors }">
                            <v-select :items="municipios" outlined label="Municipio" color="orange"
                              v-model="editedItem.municipio" dense :error-messages="errors">
                              <template v-slot:item="{ item }">
                                {{ item }}
                              </template>
                            </v-select>
                          </ValidationProvider>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" text @click="close">
                      Cancelar
                    </v-btn>
                    <v-btn color="orange" text @click="save">
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">¿Quieres borrar este elemento?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="orange" text @click="closeDelete">Cancelar</v-btn>
                    <v-btn color="orange" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>

      </div>
    </div>
  </div>
</template>

<script>
import { required, max, min } from 'vee-validate/dist/rules';
import { extend, ValidationProvider } from 'vee-validate';
import axios from 'axios';
import { mapGetters } from 'vuex';

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
  name: 'TableComponent',
  data() {
    return {
      formularioCompleto: false,
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Rfc',
          align: 'start',
          sortable: false,
          value: 'rfc',
        },
        { text: 'Razón Social', value: 'razon_social' },
        { text: 'Contacto', value: 'contacto' },
        { text: 'Status', value: 'status' },
        { text: 'Tel. Principal', value: 'tel_principal' },
        { text: 'Tel. Movil', value: 'tel_movil' },
        { text: 'Email', value: 'email' },
        { text: 'Código Postal', value: 'codigo_postal' },
        { text: 'Número Interior', value: 'numero_interior' },
        { text: 'Número Exterior', value: 'numero_exterior' },
        { text: 'Calle', value: 'calle' },
        { text: 'Colonia', value: 'colonia' },
        { text: 'Entidad', value: 'entidad' },
        { text: 'Municipio', value: 'municipio' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      proveedores: [],
      editedIndex: -1,
      editedItem: {
        rfc: '',
        razon_social: '',
        contacto: '',
        status: '',
        tel_principal: '',
        tel_movil: '',
        email: '',
        codigo_postal: '',
        numero_interior: '',
        numero_exterior: '',
        calle: '',
        colonia: '',
        entidad: '',
        municipio: '',
      },
      defaultItem: {
        rfc: '',
        razon_social: '',
        contacto: '',
        status: '',
        tel_principal: '',
        tel_movil: '',
        email: '',
        codigo_postal: '',
        numero_interior: '',
        numero_exterior: '',
        calle: '',
        colonia: '',
        entidad: '',
        municipio: '',
      },
      status: [
        'Activo',
        'Inactivo',
        'Pendiente'
      ],
      estados: [],
      municipios: [{}],
      formTitle: '',
    }
  },
  computed: {
    ...mapGetters(['getUserName']),
  },
  methods: {
    initialize() {
      const nombreUsuario = this.getUserName;

      axios.get(`https://localhost:44331/api/documento/proveedor/usuario/${nombreUsuario}`)
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.proveedores = response.data.data;
          } else {
            console.error('La respuesta no contiene la estructura esperada');
          }
        })
        .catch(error => {
          console.error('Error al obtener los datos de proveedores desde MongoDB', error);
        });
      axios.get('https://localhost:44331/api/documento/entidad')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.estados = response.data.data.map(estado => estado.estado);
          } else {
            console.error('La respuesta no contiene la estructura esperada');
          }
        })
        .catch(error => {
          console.error('Error al obtener los estados desde MongoDB', error);
        });
    },
    close() {
      this.dialog = false;
    },
    closeDelete() {
      this.dialogDelete = false;
    },
    async save() {
      try {
        await axios.put(`https://localhost:44331/api/documento/proveedor/actualizacion/${this.editedItem.id}`, this.editedItem);

        this.initialize();

        this.close();
      } catch (error) {
        console.error('Error al guardar los datos en MongoDB:', error);
      }
    },
    async deleteItemConfirm() {
      try {
        if (this.editedIndex > -1) {
          await axios.delete(`https://localhost:44331/api/documento/proveedor/${this.editedItem.id}`);
          this.initialize();
        }
        this.closeDelete();
      } catch (error) {
        console.error('Error al eliminar el elemento en MongoDB:', error);
      }
    },
    editItem(item) {
      this.formTitle = 'Editar';
      this.editedItem = { ...item };
      this.editedIndex = this.proveedores.indexOf(item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.proveedores.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    buscarEstadoId(estadoSeleccionado) {
      for (let i = 0; i < this.estados.length; i++) {
        if (this.estados[i] === estadoSeleccionado) {
          return i + 1;
        }
      }
      console.log('Estado no encontrado:', estadoSeleccionado);
      return null;
    },
    cargarMunicipiosPorEstado() {
      if (this.editedItem.entidad) {
        const estadoId = this.buscarEstadoId(this.editedItem.entidad);

        if (estadoId !== null) {
          axios.get(`https://localhost:44331/api/documento/municipioEstado/${estadoId}`)
            .then(response => {
              if (response.data && Array.isArray(response.data.data)) {
                this.municipios = response.data.data.map(municipio => municipio.municipio);
              } else {
                console.error('La respuesta no contiene la estructura esperada');
              }
            })
            .catch(error => {
              console.error('Error al obtener los municipios desde MongoDB', error);
            });
        }
      }
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.initialize();
  },

}
</script>