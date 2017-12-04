<template>
  <div> 
   <div class="ld_all"> 
        <ul class="nav navbar-nav side-nav ng-isolate-scope">
            <router-link to="/admin/active/add" exact tag="li">
                     <a href="javascript:;">发起活动</a>
            </router-link> 
            <router-link to="/admin/active/check" tag="li">
                     <a href="javascript:;">审核</a>
            </router-link> 
            <router-link to="/admin/active" exact tag="li">
                     <a href="javascript:;">活动列表</a>
            </router-link> 
        </ul> 
        <router-view></router-view>
   </div>
  </div>
</template>
<style scoped>

</style>