import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    base: 'vueApp/',
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
        }
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    build: {
        //指定输出路径
        outDir: 'dist',
        //生成静态资源的存放路径
        assetsDir: "assets",
        //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
        minify: 'terser',
        terserOptions: {
            compress: {
                //生产环境时移除console
                drop_console: true,
                drop_debugger: true,
            }
        },
        // 拆分打包
        rollupOptions: {
            output: {
                // 方法一
                // // key自定义 value[] 插件同步package.json名称 或 src/相对路径下的指定文件
                // manualChunks: {
                //     // vue vue-router合并打包
                //     vue: ['vue', 'vue-router'],
                //     // 将 Lodash 库的代码单独打包
                //     lodash: ['lodash-es'],
                //     // 将组件库的代码打包
                //     library: ['element-plus'],
                //     // 两个文件合并成一个pages文件
                //     pages: ['src/pages/page-a/index.vue', 'src/pages/page-b/index.vue'],
                // }

                // 方法二：根据路径名
                manualChunks(id) {
                    if (id.includes("element-plus")) {
                        return 'library';
                    }
                    // 将src下的page-a和page-b文件夹单独打包
                    if (id.includes("page-a") || id.includes("page-b")) {
                        return 'pages'
                    }
                    // 最小化拆分包
                    if (id.includes("node_modules")) {
                        return id
                            .toString()
                            .split("node_modules/")[1]
                            .split("/")[0]
                            .toString();
                    }
                }

            }
        },
        // // 设置最终构建的浏览器兼容目标
        // target: 'es2015',
        // // 构建后是否生成 source map 文件
        // sourcemap: false,
        // //  chunk 大小警告的限制（以 kbs 为单位）
        // chunkSizeWarningLimit: 2000,
        // // 启用/禁用 gzip 压缩大小报告
        // reportCompressedSize: false,
    },
    server: {
        // 是否开启 https
        https: false,
        // 端口号
        port: 4000,
        // 监听所有地址
        host: '0.0.0.0',
        // 服务启动时是否自动打开浏览器
        open: true,
        // 允许跨域
        cors: true,
        // 自定义代理规则
        proxy: {},
        // hmr: { overlay: false }
    },
})
