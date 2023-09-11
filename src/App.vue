<template>
    <el-container>
        <el-aside width="200px">
            <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item index="1">
                    <el-icon><icon-menu /></el-icon>
                    <router-link to="/page-a">page-a</router-link>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <router-link to="/page-b">page-b</router-link>
                </el-menu-item>
                <el-menu-item index="3">
                    <el-icon><icon-menu /></el-icon>
                    <router-link to="/page-c">page-c</router-link>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: 'App'
    }
</script>
