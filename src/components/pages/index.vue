<template>
  <div class="index">
      <Top></Top>
      <div class="body">
          <div class="bodyleft">
              <ul>
                  <li v-for="item in arr" :key="item.id">
                      <router-link :to="{path:'/index/totaltwo',query:{name:item.name}}">{{item.name}}</router-link>
                  </li>
              </ul>
          </div>
          <div class="body_right">
              <router-view></router-view>
          </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
import Top from '@/components/commons/header.vue'
import Footer from '@/components/commons/footer.vue'
export default {
    name:'index',
    components:{ Top,
    Footer 
    },
    data(){
        return {
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
    }
}
</script>

<style scoped>
    .body {
        display: flex;
        height: 800px;
        width: 100%;
    }
    .bodyleft {
        width: 10%;
        height: 100%;
        background-color: yellow;
    }
    .body_right {
        flex: 1;
        height: 100%;
        background-color: tan;
    }
</style>