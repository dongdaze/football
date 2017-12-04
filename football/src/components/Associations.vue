<template>
    <div>
       <div class="ld_row">
         <div class="input-group">
				<span class="input-group-addon"  @click="add()"><a href="javascript:;">添加</a></span>
		  </div>
          <table class="table">
            <thead>
                <tr>
                    <th>社群序号</th>
                    <th>社群名称</th>
                    <th>社群建立时间</th>
                    <th>删除/修改</th>
                </tr>
            </thead>
            <tbody>
               <tr v-for="association in associations">
                    <td>{{association._id}}</td>
					<td><a href="javascript:;" @click="see(association._id)">{{association.assName}}</a></td>
					<td>{{association.startTime}}</td>
					<td>
                        <a href="javascript:;" class="btn btn-danger col-xs" @click="delet(association._id)">删除</a>
                        <a href="javascript:;" class="btn btn-primary col-xs" @click="edit(association._id)">修改</a>
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
            associations() {
                return this.$store.state.associations;
            }
        },
         methods: {
            add() {
               this.$router.push('/admin/association/add')     
            },
            delet(id){
               this.$store.dispatch('DeleteAsstion',{id:id})
            },
            edit(id){
                this.$router.push({path:'/admin/association/'+id})
            },
            see(id){
                this.$router.push({path:'/admin/association/see/'+id})
            }
         },
         created(){
             this.$store.dispatch('getAsstion')
         }
    }
</script>

<style scoped>

</style>