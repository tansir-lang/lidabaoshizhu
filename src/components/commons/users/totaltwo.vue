<template>
  <div>
      <iframe id="one" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    name:'totaltwo',
    data(){
        return {
            srcUrl:'',
            arr:[
                {
                    name:'baidu',id:1,url:'http://www.baidu.com'
                },
                {
                    name:'4399',id:2,url:'http://www.4399.com'
                },
                {
                    name:'taobao',id:3,url:'http://www.taobao.com'
                }
            ]
        }
        // }
    },
    computed:{
        url(){
            let urlName = this.$route.query.name
            console.log(urlName)
            let urlA = '';
            this.arr.forEach(e=>{
                switch (urlName) {
                    case e.name:
                        if(urlName == e.name){
                            urlA = e.url
                        }
                        break;
                }
            })
            return urlA
        }
    }
}
</script>

<style scoped>
 iframe {
     width: 100%;
     height: 800px;
 }
</style>