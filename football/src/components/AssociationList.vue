<template>
    <div>
      <div class="ld_row">
        <div class="row">
            <div class="col-xs-10">
                <div class="h4">修改社群</div>
            </div>
            <div class="col-xs-2">
                <a href="javascript:;" class="btn btn-success" @click="save">保存</a>
                <a href="javascript:;" class="btn btn-danger" @click="cancel()">取消</a>
            </div>
        </div>
      </div>
      <div class="ld_row">
            <input type="hidden" ref="_id" :value="associationsEdit._id"/>
			<div class="form-group">
				<label>社群名称</label>
				<input type="text" class="form-control" ref="name" :value='associationsEdit.assName'>
			</div>
			<div class="form-group">
				<label>社群简介</label>
				<input type="text" class="form-control" ref="des" :value='associationsEdit.des'>
			</div>
			<div class="form-group">
				<label>开始时间</label>
				<input type="datetime" class="form-control" ref="startTime" :value='associationsEdit.startTime'>
			</div>
			<div class="form-group">
				<label>社群头像</label>
        <input type="file" @change='add_img' name="avatar" class="form-control" ref="assImg">
        <img :src='ImgSrc' v-show="assImg==''"/>
        <img :src='assImg'/>
			</div>
		</div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      assImg: "",
      postImg: null,
      file: ""
    };
  },
  computed: {
    associationsEdit() {
      return this.$store.state.associationsEdit;
    },
    ImgSrc() {
      return "http://localhost:8888" + this.associationsEdit.deassImgs;
    }
  },
  methods: {
    cancel() {
      this.$router.push("/admin/association");
    },
    // var $route = this.$router;
    // var data = {};
    // data._id = this.$refs._id.value;
    // data.name = this.$refs.name.value;
    // data.des = this.$refs.des.value;
    // data.startTime = this.$refs.startTime.value;
    // data.assImg = "";
    // this.$store.dispatch("EditSaveAsstion", { data: data, route: $route });
    save(event) {
      event.preventDefault();
      var $route = this.$router;
      let data = new FormData();
      data.append("_id", this.$refs._id.value);
      data.append("name", this.$refs.name.value);
      data.append("des", this.$refs.des.value);
      data.append("startTime", this.$refs.startTime.value);
      data.append("picture", this.file);
      this.$store.dispatch("EditSaveAsstion", { data: data, route: $route });
    },
    add_img(event) {
      //base64
      this.file = event.target.files[0];
      var upload = event.target.files[0];
      let files = event.target.files;
      const postFiles = Array.prototype.slice.call(files);
      const reader = new FileReader();
      reader.readAsDataURL(postFiles[0]);
      reader.onload = readerEvent => {
        const myImage = new Image();
        myImage.src = readerEvent.target.result;
        this.assImg = readerEvent.target.result;
      };
    }
  },
  created() {
    var $route = this.$router;
    var id = this.$route.params.id;
    this.$store.dispatch("EditAsstion", { id: id, route: $route });
  }
};
</script>

<style scoped>

</style>