<template>
    <div>
        <div class="ld_row">
            <h2>{{associationsEdit.assName}}</h2>
            <div class="see_div">
                <ul v-for="active in seeActives">
                    <li><span>_id:</span>{{active._id}}</li>
                    <li><span>标题:</span>{{active.title}}</li>
                    <li><span>开始时间:</span>{{active.startDate}}</li>
                    <li><span>结束时间:</span>{{active.endDate}}</li>
                    <li><span>简介:</span>{{active.des}}</li>
                    <li><span>地点:</span>{{active.place}}</li>
                    <li><span>创建世界:</span>{{active.currentPeopleNumber}}</li>
                    <li><span>电话:</span>{{active.tel}}</li>
                    <li><span>发起人:</span>{{active.nickName}}</li>
                    <li><span>头像:</span>{{active.authorImg}}</li>
                    <li><span>创建世界:</span>{{active.createdTime}}</li>
                    <li><span>参与人数:</span>{{active.peopleNumber}}</li>
                    <li><span>头图:</span>{{active.avatarUrl}}</li>
                    <li><span>是否通过验证:</span>
                       <span v-if='active.isAudit==true'>是</span>
                       <span v-if='active.isAudit==false'>否</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    associationsEdit() {
      return this.$store.state.associationsEdit;
    },
    seeActives(){
       return this.$store.state.seeActives;
    }
  },
  created() {
    var $route = this.$router;
    var id = this.$route.params.id;
    this.$store.dispatch("EditAsstion", { id: id, route: $route });
    this.$store.dispatch("seeActivesT", { id: id, route: $route });
    
  }
};
</script>

<style scoped>

</style>