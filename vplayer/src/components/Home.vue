<template>
    <div class="home">
        <Header></Header>
        <Menu></Menu>
    </div>
</template>

<script>
import Header from '@/components/Header'
import Menu from '@/components/Menu'

export default {
    name: 'Home',
    components: {
        Header,
        Menu
    }
}
</script>
