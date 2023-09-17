<template>
    <el-container>
        <el-aside width="200px">
            <side-bar />
        </el-aside>
        <el-main>
            <router-view />
        </el-main>
    </el-container>
</template>
<script>
import SideBar from './components/SideBar.vue'
export default {
    name: 'layout',
    components: {
        'side-bar': SideBar,
    },
    
}
</script>


