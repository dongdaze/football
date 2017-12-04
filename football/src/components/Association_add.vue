<template>
    <div>
      <div class="ld_row">
        <div class="row">
            <div class="col-xs-10">
                <div class="h4">添加社群</div>
            </div>
            <div class="col-xs-2">
                <a href="javascript:;" class="btn btn-success" @click="save">保存</a>
                <a href="javascript:;" class="btn btn-danger" @click="cancel()">取消</a>
            </div>
        </div>
      </div>
      <div class="ld_row">
			<div class="form-group">
				<label>社群名称</label>
				<input type="text" class="form-control" ref="name">
			</div>
			<div class="form-group">
				<label>社群简介</label>
				<input type="text" class="form-control" ref="des">
			</div>
			<div class="form-group">
				<label>开始时间</label>
				<input type="datetime" class="form-control" ref="startTime">
			</div>
			<div class="form-group">
				<label>社群头像</label>
        	<input type="file" @change='add_img' name="avatar" class="form-control" ref="assImg">
          <img-upload></img-upload>
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
import imgUpload from '@/components/image-upload'
export default {
  data() {
    return {
      assImg:'',
      file:'',
    }
  },
  methods: {
    cancel() {
      this.$router.push("/admin/association");
    },
    save(event){
        event.preventDefault();
        var $route = this.$router;
        let data = new FormData();
        data.append('_id', getUid());
        data.append('name', this.$refs.name.value);
        data.append('des', this.$refs.des.value);
        data.append('startTime', this.$refs.startTime.value);
        data.append('picture', this.file);
        this.$store.dispatch('AddAsstion',{ data:data,route:$route })
    },
    add_img(event){
                //base64
                this.file = event.target.files[0]
                var upload=  event.target.files[0]
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
  },
   template: '<imgUpload/>',
    components: { imgUpload }
};
</script>

<style scoped>

</style>