<template>
    <div>
      <div class="ld_row">

            <div class="row">
		<div class="col-xs-12">
			<div class="form-group">
				<label>标题</label>
				<input type="text" :value='activeForm.title' ref="title" class="form-control">
			</div>
			<div class="form-group">
				<label>开始时间</label>
				<input type="datetime" :value='activeForm.startDate' ref="startDate" class="form-control">
			</div>
			<div class="form-group">
				<label>结束时间</label>
				<input type="datetime" :value='activeForm.endDate' ref="endDate" class="form-control">
			</div>
			<div class="form-group">
				<label>描述</label>
				<input type="text" ref="des" :value='activeForm.des' class="form-control">
			</div>
			<div class="form-group">
				<label>地点</label>
				<input type="text" ref="place" :value='activeForm.place' class="form-control">
			</div>
			<div class="form-group">
				<label>活动人数</label>
				<input type="text" ref="currentPeopleNumber" :value='activeForm.currentPeopleNumber' class="form-control">
			</div>
			<div class="form-group">
				<label>电话</label>
				<input type="text" ref="tel" :value='activeForm.tel' class="form-control">
			</div>
			<div class="form-group">
				<label>昵称</label>
				<input type="text" ref="nickName" :value='activeForm.nickName' class="form-control">
			</div>
			<div class="form-group">
				<label>图片地址</label>
				<input type="text" ref="authorImg" :value='activeForm.authorImg' class="form-control">
			</div>
			<div class="form-group">
				<label>创建时间</label>
				<input type="datetime" ref="createdTime" :value='activeForm.createdTime' class="form-control">
			</div>
			<div class="form-group">
				<label>当前活动人数</label>
				<input type="text" ref="peopleNumber" :value='activeForm.peopleNumber' class="form-control" >
			</div>
			<div class="form-group">
				<label>头图</label>
				 <img :src='ImgSrc'/>
			</div>
			<div class="form-group">
				<label>社群ID</label>
				<input type="text" ref="associationIdTitle" :value='activeForm.associationIdTitle' class="form-control" >
			</div>
		</div>
	</div>

      </div>
    </div>
</template>
<<script>
export default {
     computed: {
         activeForm() {
             return this.$store.state.activeForm 
		 },
		 ImgSrc() {
		   return "http://localhost:8888" + this.activeForm.avatarUrl;
		 }
     },
     created(){
         var id = this.$route.params.id;
         this.$store.dispatch('listActiveFormAction', { id: id })
     }
}
</script>
