<template>
    <div class="error">
        <h1>{{ msg }}</h1>
        <p>{{ body }}</p>
    </div>
</template>

<script>
export default {
    name: '404 Page Derped',
    data () {
        return {
            msg: '404!',
            body: 'Oops! Someone herp derped and we got lost.'
        }
    }
}
</script>
