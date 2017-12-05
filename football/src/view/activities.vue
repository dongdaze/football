<template>
    <div>
        <div class="w16 JoinActivities">
            <div class="fs36 activityTitle"><div class="w674">科技圈</div></div>

            <div class="w16 boxWrap2">
                <div class="listBox">
                
                <ul>
                    <li>
                        <div class="h20"></div>
                        <div class="activityList">
                        <div class="clearfix">
                            <div class="fl pic"><a><img src="./../assets/images/activity/activity.png"></a></div>
                            <div class="fr w590">
                                <a>社群活动&nbsp;</a><a href="#" class="red">爱乐汇 More Than Love 如爱有天意——浪漫经典名曲情人节</a> | <a>2月20日</a>
                            </div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fl"></div>
                            <div class="fl"></div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fr"></div>
                        </div>
                        <div class="h20"></div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl marR80">
                            <div class="area fs23">石景山</div>
                        </div>
                        <div class="fl marR80">
                            <div class="time fs23">2017-02-04</div>
                        </div>
                        <div class="fl marR80">
                            <div class="number fs23">人数：15人</div>
                        </div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl">
                            <div class="fl photo"><a><img src="./../assets/images/activity/author.jpg"></a></div>
                            <div class="fl name"><a href="#" class="fs23">龙的传人</a></div>
                        </div>
                        <div class="fr free state">免费</div>
                        </div>
                        <div class="h20"></div>
                    </li>
                    <li>
                        <div class="h20"></div>
                        <div class="activityList">
                        <div class="clearfix">
                            <div class="fl pic"><a><img src="./../assets/images/activity/activity.png"></a></div>
                            <div class="fr w590">
                                <a>社群活动&nbsp;</a><a href="#" class="red">爱乐汇 More Than Love 如爱有天意——浪漫经典名曲情人节</a> | <a>2月20日</a>
                            </div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fl"></div>
                            <div class="fl"></div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fr"></div>
                        </div>
                        <div class="h20"></div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl marR80">
                            <div class="area fs23">石景山</div>
                        </div>
                        <div class="fl marR80">
                            <div class="time fs23">2017-02-04</div>
                        </div>
                        <div class="fl marR80">
                            <div class="number fs23">人数：15人</div>
                        </div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl">
                            <div class="fl photo"><a><img src="./../assets/images/activity/author.jpg"></a></div>
                            <div class="fl name"><a href="#" class="fs23">龙的传人</a></div>
                        </div>
                        <div class="fr  free state">免费</div>
                        </div>
                        <div class="h20"></div>
                    </li>
                    <li>
                        <div class="h20"></div>
                        <div class="activityList">
                        <div class="clearfix">
                            <div class="fl pic"><a><img src="./../assets/images/activity/activity.png"></a></div>
                            <div class="fr w590">
                                <a>社群活动&nbsp;</a><a href="#" class="red">爱乐汇 More Than Love 如爱有天意——浪漫经典名曲情人节</a> | <a>2月20日</a>
                            </div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fl"></div>
                            <div class="fl"></div>
                        </div>
                        <div class="clearfix">
                            <div class="fl"></div>
                            <div class="fr"></div>
                        </div>
                        <div class="h20"></div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl marR80">
                            <div class="area fs23">石景山</div>
                        </div>
                        <div class="fl marR80">
                            <div class="time fs23">2017-02-04</div>
                        </div>
                        <div class="fl marR80">
                            <div class="number fs23">人数：15人</div>
                        </div>
                        </div>
                        <div class="h20"></div>
                        <div class="w674 clearfix">
                        <div class="fl">
                            <div class="fl photo"><a><img src="./../assets/images/activity/author.jpg"></a></div>
                            <div class="fl name"><a href="#" class="fs23">龙的传人</a></div>
                        </div>
                        <div class="fr free state">免费</div>
                        </div>
                        <div class="h20"></div>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/css/reset.css'
    import '@/assets/css/index.css'
    import axios from 'axios';
    export default {
        
        data() {
            return {
                
            }
        },
        mounted(){
            this.autoRem();
            this.init();
        },
        methods:{
            autoRem(){
                var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;

                var _html = document.getElementsByTagName('html')[0];
                view_width>1242?_html.style.fontSize = 1242 / 16 + 'px':_html.style.fontSize = view_width / 16 + 'px';
            },
            init(){
                axios.get("http://localhost:8888/activities").then((response)=>{
                    let res = response.data;
                    console.log(response)
                }).catch((err)=>{
                    console.log(err)
                })
            }
        }

    }
</script>

<style scoped>

</style>