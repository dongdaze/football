<template>
    <div>
      <div class="ld_row">
        <div class="row">
            <div class="col-xs-10">
                <div class="h4">添加用户</div>
            </div>
            <div class="col-xs-2">
                <a href="javascript:;" class="btn btn-success" @click="save">保存</a>
                <a href="javascript:;" class="btn btn-danger" @click="cancel()">取消</a>
            </div>
        </div>
      </div>
      <div class="ld_row">
			<div class="form-group">
				<label>用户名</label>
				<input type="text" class="form-control" ref="userName">
			</div>
			<div class="form-group">
				<label>密码</label>
				<input type="password" class="form-control" ref="passWord">
			</div>
      	<div class="form-group">
				<label>用户头像</label>
        	<input type="file" @change='add_img' name="avatar" class="form-control" ref="assImg">
			</div>
      <div>
        <img :src='assImg'/>
      </div>
		</div>
      </div>
    </div>
</template>

<script>
function getUid() {
	var S4 = function () {
		return Math.floor(Math.random() * 0x10000).toString(16);
	};
	return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
export default {
  data() {
    return {
      assImg:'',
      file:'',
    }
  },
  methods: {
    cancel() {
      this.$router.push("/admin/userManagement");
    },
    save(event){
        event.preventDefault();
        var $route = this.$router;
        //
        let data = new FormData();
        data.append('_id', getUid());
        data.append('userName', this.$refs.userName.value);
        data.append('passWord', this.$refs.passWord.value);
        data.append('picture', this.file);
        this.$store.dispatch('AddUserAtion',{ data:data,route:$route })
    },
    add_img(event){
                //base64
                this.file = event.target.files[0]
                console.log(this.file)
                let files = event.target.files
                const postFiles = Array.prototype.slice.call(files)
                const reader = new FileReader();
                reader.readAsDataURL(postFiles[0]);
                reader.onload = (readerEvent)=>{
                   const myImage = new Image();
                   myImage.src = readerEvent.target.result;
                   this.assImg = readerEvent.target.result
                }
		 	  }
  }
};
</script>

<style scoped>

</style>