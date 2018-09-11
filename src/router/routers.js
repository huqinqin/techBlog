import Main from '@/view/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true,
      title: 'welcome',
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: 'welcome',
          notCache: true,
          icon: '_qq'
        },
        component: () => import('@/view/home/home')
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
      title: '首页',
    },
    children: [
      {
        path: '/articleList',
        name: 'article_list',
        meta: {
          hideInMenu: false,
          title: '文章列表',
          notCache: true,
          icon: '_qq'
        },
        component: () => import('@/view/article-list/articleList')
      },
      {
        path: '/articleEdit/:id?',
        name: 'article_edit',
        meta: {
          hideInMenu: true,
          title: '文章编辑',
          notCache: true,
          icon: '_qq'
        },
        component: () => import('@/view/article-list/articleEdit')
      }
    ]
  },
  {
    path: '/type',
    name: 'type',
    component: Main,
    children: [
      {
        path: 'type_list',
        name: 'typeList',
        meta: {
          icon: '_qq',
          title: '类目管理'
        },
        component: () => import('@/view/category-list.vue')
      }
    ]
  },
  {
    path: '/tag',
    name: 'tag',
    meta: {
      icon: 'logo-buffer',
      title: '标签'
    },
    component: Main,
    children: [
      {
        path: 'tag_list',
        name: 'tag_list',
        meta: {
          icon: 'ios-create',
          title: '标签管理'
        },
        component: () => import('@/view/tag-list/tagList')
      }
    ]
  },
  {
    path: '/comment',
    name: 'comment',
    meta: {
      icon: 'md-cloud-upload',
      title: ''
    },
    component: Main,
    children: [
      {
        path: 'comment_list',
        name: 'comment_list',
        meta: {
          icon: 'ios-document',
          title: '评论列表'
        },
        component: () => import('@/view/comment-list.vue')
      }
    ]
  },
  {
    path: '/talk',
    name: 'talk',
    meta: {
      icon: 'ios-stats',
      title: '留言列表'
    },
    component: Main,
    children: [
      {
        path: 'talk-list',
        name: 'talk-list',
        meta: {
          icon: 'md-add',
          title: '留言列表'
        },
        component: () => import('@/view/talk-list.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
