<template>
  <div class='product-list'>
  <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
    <h2 class="display-4">User Management</h2>
    <!-- <button><router-link to='/user/create'>Add new</router-link></button> -->
  </div>

  <div class="container">
    <div class="card-deck mb-3 text-center">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(user, index) in users">
            <th scope="row">{{ user.id}}</th>
            <td width="250">{{ user.name }}</td>
            <td width="200">{{ user.email }}</td>
            <td width="150">{{ user.password }}</td>
            <td>
              <router-link to="/user/create">
                <button class="btn btn-info">Add user</button> &nbsp;
              </router-link>

              <router-link :to="{ name : 'user.edit', params: {id: user.id }}">
                <button class="btn btn-primary">Edit</button> &nbsp;
              </router-link>
              <button class="btn btn-danger" @click="onDelete(user.id)">Delete</button>
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
    name: 'UserForm',
      data() {
        return {
         users: []
        }
      },
      created() {
        this.getAllUsers();
      },
      methods: {
        getAllUsers() {
          this.$request.get('http://localhost:8000/api/users').then(res => {
            this.users = res.data
          })
        },

        onDelete(userId) {
          this.$swal.fire({
          title: "Do you want to delete?",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonText: "Okay",
        }).then((result) => {
          if (result.isConfirmed) {
            this.$request.delete(`http://localhost:8000/api/users/${userId}`).then(res => {
              if(res.data.success) {
                this.$swal.fire('Deleted', '', 'success')
                this.getAllUsers()
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