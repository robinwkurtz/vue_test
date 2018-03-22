<template>
    <div class="request">
        <list>
            <list-item v-for="(post, index) in posts" v-bind:key="post.id">
                <number>{{index}}</number>
                <list-body>
                    <list-title>{{post.title}}</list-title>
                    <p>{{post.body}}</p>
                    <div v-if="index < posts.length - 1">
                        <br/>
                        <hr>
                    </div>
                </list-body>
            </list-item>
      </list>
    </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

// Styles
import {
    List,
    ListBody,
    ListItem,
    ListTitle,
    Number
} from '../styles/request'

// Request
Vue.use(VueResource)
// Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk';

// Exports
export default {
    name: 'Request',
    components: {
        'list': List,
        'list-body': ListBody,
        'list-item': ListItem,
        'list-title': ListTitle,
        'number': Number
    },
    data () {
        return {
            posts: []
        }
    },
    methods: {
        fetchPosts: function () {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.posts = response.data
                })
        }
    },
    created () {
        this.fetchPosts()
    }
}
</script>
