module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // '@':'src', 默认的有
                'assets': '@/assets',
                'common': '@/common',
                'component': '@/component',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}