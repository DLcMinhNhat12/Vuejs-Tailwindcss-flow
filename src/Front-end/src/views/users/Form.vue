<template>
  <div class="product-info">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">User Infomation</h3>
      <router-link to="/user">Back</router-link>
    </div>

    <div class="container">
      <form @submit.prevent="save()">
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >User name</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control"
            v-model="user.name"
              @blur="validate()"
              v-bind:class="{'is-invalid': errors.name}"
              />
              <div class="invalid-feedback" v-if="errors.name">{{ errors.name }}</div> 
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail" class="col-sm-3 col-form-label"
            >Email</label
          >
          <div class="col-sm-9">
            <input type="text" class="form-control" 
              v-model="user.email" placeholder="Email phải chứa ký tự @"
              @blur="validate()"
              v-bind:class="{'is-invalid': errors.email}"
              />
              <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"
            >User password</label
          >
          <div class="col-sm-9">
            <input class="form-control"
            v-model="user.password"
            @blur="validate()"
            v-bind:class="{'is-invalid': errors.password}"/>
            <div class="invalid-feedback" v-if="errors.password">{{ errors.password }}</div>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword" class="col-sm-3 col-form-label"></label>
          <div class="col-sm-9 text-left">
            <button type="submit" class="btn btn-primary">Save</button> &nbsp;
            <button type="reset" class="btn btn-danger" @click="cancel()">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
 export default {
    name: 'UserForm',
    data() {
      return {
        errors: {
          name: '',
          email: '',
          password: '',
        },
// Constructor
        user: {
          name: '',
          email: '',
          password: '',
        }
      }
    },

    created() {
      let userId = this.$route.params.id
      
      if(userId) {
        this.getUser(userId)
      }

    },

    methods: {
      validate() {
        let isValid = true

        this.errors = {
          name: '',
          email: '',
          password: '',
        }

        if(!this.user.name) {
          this.errors.name = 'Name name is required ❌'
          isValid = false
        }

        if(!this.user.email) {
          this.errors.email = 'Email is required ❌'
          isValid = false
        } else if (!this.isEmail(this.user.email)) {
          this.errors.email = 'Invalid email 🙄'
          isValid = false
        }

        if(!this.user.password) {
          this.errors.password = 'User password is required ❌'
          isValid = false
        }

        return isValid
      },
      // Validate Email  
      isEmail() {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(this.user.email);
      },

      async save() {
        if(this.validate()){
          if(this.user.id) {
            // Update user
            this.$request.put(`http://localhost:8000/api/users/${this.user.id}`, this.user).then(res => {
            if(res.data.success) {
              this.$router.push({name: 'user.list'})

              return
            }
              alert('Something went wrong!')
          })
            return;
          }
          // Add new data
          this.$request.post('http://localhost:8000/api/users', this.user).then(res => {
            if(res.data.success) {
              this.$router.push({name: 'user.list'})

              return
            }
              alert('Something went wrong!')
          })
        }
      },

      getUser(userId) {
        this.$request.get(`http://localhost:8000/api/users/${userId}`).then(res => {
          this.user = res.data
        })
      },

      cancel() {
        this.user.name = ''
        this.user.email = ''
        this.user.password = ''
      },
    }
    
  }
</script>

<style lang="scss" scoped></style>
