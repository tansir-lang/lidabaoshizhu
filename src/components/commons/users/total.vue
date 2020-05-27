<template>
  <div>
      <p>增加一个P标签</p>
      <iframe id="one" :src="url" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
    name:'total',
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
    mounted(){
        //ainiyo
        // let urlId = this.$route.query.id;
        // // console.log(urlId);
        // // // console.log(this.$nextTick(function(){
        // // //     //  console.log(this.arr);
        // // // }))
        // // console.log(this.arr)
        // let newArr = this.arr
        // newArr.forEach(e=>{
        //     if(e.id==urlId){
        //         console.log(e.url)
        //         this.srcUrl=e.url
        //         console.log(this.srcUrl)
        //         // this.$router.push(url:'')
        //     }
        // })

    },
    computed:{
        url(){
            // console.log(this.$route.query.id);
 
            // switch(urlId){
            //     case '1':
            //         this.arr.forEach(e=>{
            //             if(urlId==e.id){
            //                 // url1 = e.url
            //                 console.log(e.url)
            //                 url1 = e.url;
            //             }
            //         })
            //         break;
            //     case '2':
            //         this.arr.forEach(e=>{
            //             if(urlId==e.id){
            //                 url1 =e.url
            //             }
            //         })
            //         break;
            //     case '3':
            //         this.arr.forEach(e=>{
            //             if(urlId==e.id){
            //                 url1 = e.url
            //             }
            //         })
            //         break;
            // }
            console.log(this.$route.query.name)
            // let urlId =this.$route.query.id;

            let urlName =this.$route.query.name;

            // urlId = String(urlId)

            console.log(typeof urlName)
            let urlAd = '';
            switch (urlName) {
                case 'baidu':
                    this.arr.forEach(e=>{
                        console.log(e)
                        if(urlName == e.name){
                            urlAd =e.url
                        }
                    });
                    break;
                case '4399':
                    this.arr.forEach(e=>{
                        if(urlName == e.name){
                            urlAd = e.url
                        }
                    });
                    break;
                case 'taobao':
                    this.arr.forEach(e=>{
                        if(urlName == e.name){
                            urlAd = e.url
                        }
                    });
                    break;
            
                // default:
                //     break;
            }
            // let url1 = '';
            // switch(urlName){
            //     case 1:
            //         this.arr.forEach(e=>{
            //             if(urlName == e.name){
            //                 url1 = e.name
            //             }
            //         });
            //         break;
            //     case 2:
            //         this.arr.forEach(e=>{
            //             if(urlName == e.name){
            //                 url1 = e.name
            //             }
            //         });
            //         break;
            //     case 3:
            //         this.arr.forEach(e=>{
            //             if(urlName == e.name){
            //                 url1 = e.name
            //             }
            //         });
            //         break;
            // }
            return urlAd
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