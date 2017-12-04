<template>
    <div>
<div class="ld_row"> 
                <table class="table"> 
                <thead> 
                <tr> 
                    <th>活动主题</th> 
                    <th>发布时间</th> 
                    <th>发起人</th> 
                    <th>审核</th> 
                </tr> 
                </thead> 
                <tbody>
                <tr v-for="active in actives">
                    <td @click="activeList(active._id)" class="ng-binding"><a herf="javascript:;">{{active.title}}</a></td>
                    <td class="ng-binding">{{active.createdTime}}</td>
                    <td class="ng-binding">{{active.nickName}}</td>
                    <td class="ng-binding">已通过</td>
                </tr>
            </tbody>
                </table> 
        </div> 
    </div>
</template>

<<script>
export default {
     computed: {
       actives() {
         return this.$store.state.actives 
       }
     },
     methods: {
         activeList(id) {
             this.$router.push({path:'/admin/active/'+id})
         }
     },
     created(){
       this.$store.dispatch('getActivesA')
     }
}
</script>

<style scoped>

</style>