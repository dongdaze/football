<template>
    <div>
      <div class="ld_row">
          <div class="row">
                <div class="col-xs-10"><div class="h4">编辑活动</div></div>
                <div class="col-xs-2">
                    <a href="javascript:;" class="btn btn-success" @click="save">保存</a>
                    <a href="javascript:;" class="btn btn-danger" @click="cancel()">取消</a>
                </div>
            </div>

            <div class="row">
		<div class="col-xs-12">
			<div class="form-group">
				<label>标题</label>
				<input type="text" ref="title" class="form-control">
			</div>
			<div class="form-group">
				<label>开始时间</label>
				<input type="datetime" ref="startDate" class="form-control">
			</div>
			<div class="form-group">
				<label>结束时间</label>
				<input type="datetime" ref="endDate" class="form-control">
			</div>
			<div class="form-group">
				<label>描述</label>
				<input type="text" ref="des" class="form-control">
			</div>
			<div class="form-group">
				<label>地点</label>
				<input type="text" ref="place" class="form-control">
			</div>
			<div class="form-group">
				<label>活动人数</label>
				<input type="text" ref="currentPeopleNumber" class="form-control">
			</div>
			<div class="form-group">
				<label>电话</label>
				<input type="text" ref="tel" class="form-control">
			</div>
			<div class="form-group">
				<label>昵称</label>
				<input type="text" ref="nickName" class="form-control">
			</div>
			<div class="form-group">
				<label>图片地址</label>
				<input type="text" ref="authorImg" class="form-control">
			</div>
			<div class="form-group">
				<label>创建时间</label>
				<input type="datetime" ref="createdTime" class="form-control">
			</div>
			<div class="form-group">
				<label>当前活动人数</label>
				<input type="text" ref="peopleNumber" class="form-control" >
			</div>
				<div class="form-group">
				<label>头图</label>
        	     <input type="file" @change='add_img' name="avatar" class="form-control" ref="avatarUrl">
					</div>
			<div>
				<img :src='assImg'/>
			</div>
			<div class="form-group">
				<label>社群ID</label>
				<select class="form-control" ref="associationIdTitle" >
					<option v-for="item in associations" :value ='item._id'>{{item.assName}}</option>
				</select>
			</div>
		</div>
	</div>

      </div>
    </div>
</template>

<script>
//随机生成id
function getUid() {
	var S4 = function () {
		return Math.floor(Math.random() * 0x10000).toString(16);
	};
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
export default {
	data() {
		return {
			assImg: '',
			file:'',
		}
	},
	computed: {
            associations() {
                return this.$store.state.associations;
            }
    },
  methods: {
	  save(event){
        event.preventDefault();
        var $route = this.$router;
        let data = new FormData();
        data.append('_id', getUid());
        data.append('title', this.$refs.title.value);
		data.append('startDate', this.$refs.startDate.value);
		data.append('endDate', this.$refs.endDate.value);
		data.append('des', this.$refs.des.value);
		data.append('place', this.$refs.place.value);
		data.append('currentPeopleNumber', this.$refs.currentPeopleNumber.value);
		data.append('tel', this.$refs.tel.value);
		data.append('nickName', this.$refs.nickName.value);
		data.append('authorImg', this.$refs.authorImg.value);
		data.append('createdTime', this.$refs.createdTime.value);
		data.append('peopleNumber', this.$refs.peopleNumber.value);
		data.append('startDate', this.$refs.startDate.value);
		data.append('picture', this.file);
		data.append('associationIdTitle', this.$refs.associationIdTitle.value);
		data.append('isAudit',false);
        this.$store.dispatch('ActiveAdd',{ data:data,route:$route })
    },
	add_img(event){
                //base64
                this.file = event.target.files[0]
                let files = event.target.files
				const postFiles = Array.prototype.slice.call(files)
				
				//前端展示
				//1创建对象
				const reader = new FileReader();
				// 2.readAsDataURL=>base 64 (result)
				reader.readAsDataURL(postFiles[0]);
				//3.onload 
                reader.onload = (readerEvent)=>{
                //    const myImage = new Image();
                //    myImage.src = readerEvent.target.result;
                   this.assImg = readerEvent.target.result
                }
	 }
  },
  created(){
	   this.$store.dispatch('getAsstion')
  }
};
</script>

<style scoped>

</style>