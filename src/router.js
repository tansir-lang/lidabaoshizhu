import Vue from 'vue'
import Router from 'vue-router'
import index from './components/pages/index'
    import Taobao from '@/components/commons/users/taobao.vue'
    import A4399 from '@/components/commons/users/4399.vue'
    import Baidu from '@/components/commons/users/baidu.vue'
    import Total from '@/components/commons/users/total.vue'
    import TotalTwo from '@/components/commons/users/totaltwo.vue'
Vue.use(Router);
export default new Router({
    routes:[
        {
            path:'/index',
            component:index,
            children:[
                {
                    path:'taobao',
                    component:Taobao
                },
                {
                    path:'4399',
                    component:A4399
                },
                {
                    path:'baidu',
                    component:Baidu
                },
                {
                    path:'total',
                    component:Total
                },
                {
                    path:'totaltwo',
                    component:TotalTwo
                }
            ]
        }
    ]
})