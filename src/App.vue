<template>
    <wrapper id="app">
        <styled-header>
            <nav-list>
                <li><router-link :to="{ name: 'Survey' }">Survey</router-link></li>
                <li><router-link :to="{ name: 'Request' }">Request</router-link></li>
                <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
            </nav-list>
        </styled-header>
        <styled-body>
            <router-view/>
        </styled-body>
    </wrapper>
</template>

<script>
// Styles
import './styles/global'
import { Wrapper, NavList, StyledHeader, StyledBody } from './styles/app'

export default {
    name: 'App',
    components: {
        'wrapper': Wrapper,
        'nav-list': NavList,
        'styled-body': StyledBody,
        'styled-header': StyledHeader
    }
}
</script>
