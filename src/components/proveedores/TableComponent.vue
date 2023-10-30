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
                          <v-text-field v-model="editedItem.rfc" label="Rfc"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.razon_social" label="Razón Social"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.contacto" label="Contacto"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.tel_principal" label="Tel. Principal"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.tel_movil" label="Tel. Movil"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.codigo_postal" label="Código Postal"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.numero_interior" label="Número Interior"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.numero_exterior" label="Número Exterior"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.calle" label="Calle"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.colonia" label="Colonia"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.entidad" label="Entidad"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.municipio" label="Municipio"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5">¿Quieres borrar este elemento?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancelar</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
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
import axios from 'axios';

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
      formTitle: '',
    }
  },
  methods: {
    initialize() {
      axios.get('https://localhost:44331/api/documento/proveedor')
        .then(response => {
          if (response.data && Array.isArray(response.data.data)) {
            this.proveedores = response.data.data;
            console.log('Datos de proveedores cargados correctamente:', this.proveedores);
          } else {
            console.error('La respuesta no contiene la estructura esperada');
          }
        })
        .catch(error => {
          console.error('Error al obtener los datos de proveedores desde MongoDB', error);
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