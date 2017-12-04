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
                        <td class="ng-binding">{{active.title}}</td>
                        <td class="ng-binding">{{active.createdTime}}</td>
                        <td class="ng-binding">{{active.nickName}}</td>
                        <td>
                      <a href="javascript:;" class="btn btn-success btn-xs" @click="online(active._id)">通过</a>
                      <a href="javascript:;" class="btn btn-warning btn-xs" @click="offonline(active._id)">不通过</a>
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
            actives() {
                return this.$store.state.activeies
            }
        },
        methods: {
            online(id) { 
                var route = this.$router;
                this.$store.dispatch('onLineActivesAction',{'id':id,'route':route})
            },
            offonline(id) { 
                var route = this.$router;
                this.$store.dispatch('offonLineActivesAction',{'id':id,'route':route})
            }
        },
        created(){
            this.$store.dispatch('getActivesAction')
        }
    }
</script>

<style scoped>

</style>