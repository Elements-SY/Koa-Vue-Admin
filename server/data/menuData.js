// 根据不同的角色分配不同的导航菜单
module.exports = [
   {
      auth: 'root',
      menuList: [
         {
            path: '/html',
            title: 'HTML',
            icon: 'icon-html',
            children: []
         }, {
            path: '/style',
            title: 'Style',
            icon: 'icon-CSS',
            children: [
               {
                  path: '/style/css',
                  title: 'CSS',
                  icon: 'icon-CSS',
               }, {
                  path: '/style/less',
                  title: 'Less',
                  icon: '',
               }, {
                  path: '/style/sass',
                  title: 'Sass',
                  icon: '',
               },
            ]
         }, {
            path: '/js',
            title: 'js',
            icon: 'icon-javascript-map',
            children: []
         }, {
            path: '/TypeScript',
            title: 'TypeScript',
            icon: 'icon-typescript',
            children: []
         }, {
            path: '/upload',
            title: 'Upload',
            icon: 'icon-shangchuan',
            children: []
         }, {
            path: '/download',
            title: 'Download',
            icon: 'icon-xiazai1',
            children: []
         }, {
            path: '/FrameWork',
            title: 'FrameWork',
            icon: 'icon-framework',
            children: [
               {
                  path: '/FrameWork/vue',
                  title: 'Vue',
                  icon: 'icon-vuejs-fill',
               },
               {
                  path: '/FrameWork/vue-cli',
                  title: 'Vue-Cli',
                  icon: 'icon-jichengrenwu',
               },
               {
                  path: '/FrameWork/vue3',
                  title: 'Vue3',
                  icon: 'icon-vuejs-fill',
               },
            ]
         }, {
            path: '/node',
            title: 'NodeJS',
            icon: 'icon-Nodejs',
            children: []
         }, {
            path: '/PackTools',
            title: 'PackTools',
            icon: 'icon-webpack',
            children: []
         }, {
            path: '/babel',
            title: 'Babel',
            icon: 'icon-babel',
            children: []
         }, {
            path: '/Eslint',
            title: 'ESLint',
            icon: 'icon-eslint',
            children: []
         },{
            path: '/Excel',
            title: 'Excel',
            icon: 'icon-export_excel',
            children: [
               {
                  path: '/Excel/export',
                  title: 'Export',
                  icon: 'icon-export-file',
               }, 
               {
                  path: '/Excel/import',
                  title: 'Import',
                  icon: 'icon-share2',
               },
            ]
         }, {
            path: '/npm',
            title: 'NPM',
            icon: 'icon-npm',
            children: []
         }, {
            path: '/h5',
            title: 'HTML5',
            icon: 'icon-html',
            children: []
         }, {
            path: '/pc',
            title: 'PC',
            icon: 'icon-diannao',
            children: []
         }, {
            path: '/MiniProgram',
            title: 'MiniProgram',
            icon: 'icon-xiaochengxu',
            children: []
         }, {
            path: '/WechatAccount',
            title: 'WechatAccount',
            icon: 'icon-weixin1',
            children: []
         }, {
            path: '/layout',
            title: 'Layout',
            icon: 'icon-drawable-layout-',
            children: []
         }, {
            path: '/chart',
            title: 'Chart',
            icon: 'icon-Charts',
            children: [
               {
                  path: '/chart/echarts',
                  title: 'Echarts',
                  icon: 'icon-Charts',
               }
            ]
         }, {
            path: '/map',
            title: 'The Map',
            icon: 'icon-map1',
            children: [
               {
                  path: '/map/baidu',
                  title: 'Baidu Map',
                  icon: 'icon-baiduMaps',
               },
               {
                  path: '/map/gaode',
                  title: 'Gaode Map',
                  icon: 'icon-mapOfGaud',
               },
            ]
         }, {
            path: '/plug-in',
            title: 'Plug-in',
            icon: 'icon-library1',
            children: []
         },
         {
            path: '/interview',
            title: 'Interview',
            icon: 'icon-library',
            children: []
         }, {
            path: '/WMAP',
            title: 'WMAP',
            icon: 'icon-drxx86',
            children: []
         }, {
            path: '/cors',
            title: 'CORS',
            icon: 'icon-share',
            children: []
         },
      ],
   },

   {
      auth: 'admin',
      menuList: [
         {
            path: '/movie',
            title: '电影',
            icon: 'icon-video',
            children: [
               {
                  path: '/movie/action',
                  title: '动作片',
                  icon: '',
               },
               {
                  path: '/movie/comedy',
                  title: '喜剧片',
                  icon: '',
               },
               {
                  path: '/movie/scary',
                  title: '惊悚片',
                  icon: '',
               }
            ]
         },
         {
            path: '/game',
            title: '游戏',
            icon: 'icon-Game_Controller',
            children: [
               {
                  path: '/game/online',
                  title: '网络游戏',
                  icon: '',
                  children: [
                     {
                        path: '/game/online/starsWar',
                        title: '星际争霸',
                        icon: '',
                     }
                  ]
               },
               {
                  path: '/game/offline',
                  title: '单机游戏',
                  icon: '',
                  children: [
                     {
                        path: '/game/offline/redWar',
                        title: '红色警戒',
                        icon: '',
                     }
                  ]
               },
            ]
         }
      ],
   },

   {
      auth: 'user',
      menuList: [
         {
            path: '/game',
            title: '游戏',
            icon: 'icon-Game_Controller',
            children: [
               {
                  path: '/game/online',
                  title: '网络游戏',
                  icon: '',
                  children: [
                     {
                        path: '/game/online/starsWar',
                        title: '星际争霸',
                        icon: '',
                     }
                  ]
               },
               {
                  path: '/game/offline',
                  title: '单机游戏',
                  icon: '',
                  children: [
                     {
                        path: '/game/offline/redWar',
                        title: '红色警戒',
                        icon: '',
                     }
                  ]
               },
            ]
         }
      ]
   }
]
