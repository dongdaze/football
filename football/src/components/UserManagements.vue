<template>
    <div>
       <div class="ld_row">
         <div class="input-group">
				<span class="input-group-addon"  @click="add()"><a href="javascript:;">添加</a></span>
		  </div>
           <table class="table">
            <thead>
                <tr>
                    <th>用户序号</th>
                    <th>用户名</th>
                    <th>用户密码</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users">
                    <td>{{user._id}}</td>
                    <td>{{user.userName}}</td>
                    <td>{{user.passWord}}</td>
                    <td>
                        <a href="javascript:;" class="btn btn-danger col-xs" @click="delet(user._id)">删除</a>
                    </td>
                </tr>
            </tbody>
        </table>
       </div>
    </div>
</template>

<script>
    export default {
        computed: {
            users() {
                return this.$store.state.users 
            }
        },
        methods: {
            add() {
                this.$router.push('/admin/userManagement/add')
            },
            delet(id){
               this.$store.dispatch('deleteUsersAction',{id:id})
            }
        },
        created(){
            this.$store.dispatch('getusersAction')
        }
    }
</script>

<style scoped>

</style>