<template>
    <div>

    </div>
</template>

<script>
 
import EditUser from '@/components/EditUser.vue'
export default {
  components: {
    EditUser
    
  },
  
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch('fetchUser');
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUserFUNC', userID);
    },
  }
};
</script>

<style scoped>

</style>