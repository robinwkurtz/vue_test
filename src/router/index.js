import Vue from 'vue'
import Router from 'vue-router'

// Components
import Login from '@/components/Login'
import Survey from '@/components/Survey'

Vue.use(Router)

export default new Router({
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
        }
    ]
})
