<template>
    <div class="container">
        <footer class="footer bg-light text-center py-3">
            <p>&copy; {{ year }} <a href="https://www.3wonline.com.br" target="_blank" style="text-decoration: none;">Company</a>, Inc. All rights reserved.</p>
        </footer>
    </div> 
</template>

<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
  
<style scoped>
  .footer {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
</style>
  