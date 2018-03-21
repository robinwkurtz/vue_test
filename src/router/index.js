import Vue from 'vue'
import Router from 'vue-router'

// Components
import Login from '@/components/Login'
import NotFoundComponent from '@/components/NotFoundComponent'
import Survey from '@/components/Survey'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Survey',
            component: Survey
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        { path: '*', component: NotFoundComponent }
    ]
})
