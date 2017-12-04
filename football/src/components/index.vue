<template>
    <div>
        <div class="navbar-inverse">
            <a class="navbar-brand" href="javascript:;">足球后台</a>
            <ul class="nav navbar-nav navbar-right navbar-user">
                <router-link to="/admin/active"  tag="li">
                     <a href="javascript:;">活动 </a>
                </router-link>
                <router-link to="/admin/association" exact tag="li">
                      <a href="javascript:;">社群</a>
                </router-link>
                <router-link to="/admin/userManagement" exact tag="li">
                       <a href="javascript:;">用户管理</a>
                </router-link>
                <router-link to="/userManagement" exact tag="li">
                      <a href="javascript:;">admin</a>
                </router-link>
                <router-link to="/logout" exact tag="li">
                     <a href="javascript:;">退出</a>
                </router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>