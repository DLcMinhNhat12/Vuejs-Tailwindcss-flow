<template>
  <div class='product-list'>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="display-4">Product Management</h2>
    <!-- <button type="button" class="btn btn-dark"><router-link to='/product/create'>Add new</router-link></button> -->
  </div>

  <div class="container">
    <div class="card-deck mb-3">
      <table class="table table-bordered ">
        <thead>
          <tr>
            <th scope="col" width="120">#</th>
            <th scope="col" width="220">Product name</th>
            <th scope="col" width="120">Price</th>
            <th scope="col" width="400">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(product, index) in products">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.description }}</td>
            <td width="320" align="left">
              <router-link to="/product/create">
                <button class="btn btn-info">Add new</button> &nbsp;
              </router-link>

              <router-link :to="{ name : 'product.edit', params: {id: product.id }}">
                <button class="btn btn-primary">Edit</button> &nbsp;
              </router-link>
              <button class="btn btn-danger" @click="onDelete(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
</template>

<script>
 export default {
    name: 'ProductForm',
      data() {
        return {
         products: []
        }
      },
      created() {
        this.getAllProducts();
      },
      methods: {
        getAllProducts() {
          this.$request.get('http://localhost:8000/api/products').then(res => {
            this.products = res.data
          })
        },

        onDelete(productId) {
          this.$swal.fire({
          title: "Do you want to delete?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(res => {
              if(res.data.success) {
                this.$swal.fire('Deleted', '', 'success')
                this.getAllProducts()
              }
            })
          } 
        });
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>