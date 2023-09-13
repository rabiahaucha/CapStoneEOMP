<template>
  <div>
    <div>
      <h1 class="text-center p-3 heading-text">My Account</h1>

      <div class="card mx-auto my-3 p-5 w-75 user-card">
        <div class="m-3 text-center">
          <img
            :src="$store.state.user?.userProfile"
            :alt="$store.state.user?.firstName"
            class="img-fluid mb-5"
            style="max-width: 60%; border-radius: 50%;"
          />

          <h2 class="gold-text">
            {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
          </h2>
          <cite>{{ $store.state.user?.userRole }}</cite>
        </div>

        <div>
          <div class="card mb-5 p-3 info-card">
            <span><strong>User ID: </strong>{{ $store.state.user?.userID }}</span> <br> <br>
            <span><strong>Gender: </strong>{{ $store.state.user?.Gender}}</span> <br> <br>
            <span><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span> <br> <br>
            <span><strong>Age: </strong>{{ $store.state.user?.userAge }}</span> <br> <br>
          </div>

          <div class="d-flex justify-content-between">
            <update-user-comp class="btn edit-btn" />
            <button type="submit" class="btn del-btn" @click="confirmDelete">Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
</style>
