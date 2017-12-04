<template>
  <div> 
   <div class="ld_all"> 
        <ul class="nav navbar-nav side-nav ng-isolate-scope">
            <router-link to="/admin/userManagement" exact tag="li">
                     <a href="javascript:;">用户列表管理</a>
            </router-link> 
        </ul> 
        <router-view></router-view>
   </div>
  </div>
</template>
<style scoped>

</style>