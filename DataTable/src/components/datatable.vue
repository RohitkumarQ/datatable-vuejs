<template>
  <div class="container">
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="action" slot-scope="{ row }">
        <button v-on:click="view(row._id)" class="mr-3">
          <font-awesome-icon icon="eye" />
        </button>
        <button>
          <font-awesome-icon icon="trash" />
        </button>
      </span>
    </v-client-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: ["first_name", "last_name", "email", "phone_number", "action"],
      tableData: [],
      options: {
        headings: {
          id: "ID",
          name: "Song Name",
          album: "Album",
          actiov: "Action",
        },
        sortable: ["first_name", "last_name", "email", "phone_number"],
        filterable: ["first_name", "last_name", "email", "phone_number"],
      },
    };
  },
  mounted() {
    this.axios
      .post("http://159.65.158.18:3000/customers/allcustomers")
      .then((res) => {
        this.tableData = res.data.customers;
        console.log(this.tableData);
      });
  },
  methods:{
    view(id){
      this.axios
      .get(`http://159.65.158.18:3000/adminuser/getcustomer/${id}`)
      .then((res) => {
        this.tableData = res.data.data;
        console.log(this.tableData);
      });
    }
  }
};
</script>

<style>
#app {
  width: 95%;
  margin-top: 50px;
}
.VuePagination {
  text-align: center;
}
.vue-title {
  text-align: center;
  margin-bottom: 10px;
}
.vue-pagination-ad {
  text-align: center;
}
.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}
th:nth-child(3) {
  text-align: center;
}
.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}
.VueTables__child-row-toggler--closed::before {
  content: "+";
}
.VueTables__child-row-toggler--open::before {
  content: "-";
}
</style>