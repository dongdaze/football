<template>
  <div> 
   <div class="ld_all"> 
        <ul class="nav navbar-nav side-nav ng-isolate-scope">
            <router-link to="/admin/association" exact tag="li">
                     <a href="javascript:;">社群列表管理</a>
            </router-link> 
        </ul> 
        <router-view></router-view>
   </div>
  </div>
</template>
<style scoped>

</style>