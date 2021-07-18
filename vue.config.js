module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                // '@':'src', 默认的有
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },

    lintOnSave: false
}
