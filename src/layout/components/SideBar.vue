<template>
    <!-- <el-menu
        :default-active="activeMenu"
        @select="handleMenuSelect" router   
    >
        <el-menu-item index="/page-a">
            <el-icon><icon-menu /></el-icon>
            page-a
        </el-menu-item>
        <el-menu-item index="/page-b">
            <el-icon><icon-menu /></el-icon>
            page-b
        </el-menu-item>
        <el-menu-item index="/page-c">
            <el-icon><icon-menu /></el-icon>
            page-c
        </el-menu-item>
    </el-menu> -->

    <el-menu
        :default-active="activeMenu"
    >
        <el-menu-item index="/page-a">
            <el-icon><icon-menu /></el-icon>
            <router-link to="/page-a">page-a</router-link>
        </el-menu-item>
        <el-menu-item index="/page-b">
            <el-icon><icon-menu /></el-icon>
            <router-link to="/page-b">page-b</router-link>
        </el-menu-item>
        <el-menu-item index="/page-c">
            <el-icon><icon-menu /></el-icon>
            <router-link to="/page-c">page-c</router-link>
        </el-menu-item>
    </el-menu>

</template>

<script>
export default {
    data() {
        return {
            activeMenu: '/page-a', 
        };
    },
    methods: {
        handleMenuSelect(index) {
            this.activeMenu = index; // 更新选中的菜单项
            this.$router.push(index); // 切换路由
        },
    },
}
</script>

<style>

</style>