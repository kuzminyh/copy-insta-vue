import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', //. если адреса, который вводим в адрсн строку нет, то всё равно выводится стартовая стран index.html
    routes: [
        {
            path: '/',
            component: () => import ('@/pages/Index.vue')
        },
        {
            path: '/sample',
            component: () => import ('@/pages/Sample.vue')
        },
        {
            path: '/wall',
            component: () => import ('@/pages/Wall.vue')
        },
        {
            path: '/post/:id',
            component: () => import ('@/pages/Post.vue')
        },
        {
            path: '/post/:id/edit',
            component: () => import ('@/pages/PostEditor.vue')
        },
        {
            path: '/', //по очереди перебираются пути, в конце любой путь будет перенаправлен на wall
            redirect: '/wall'
        },
    ]
})