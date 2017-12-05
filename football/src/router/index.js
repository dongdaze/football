import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Active from '@/components/active'
import ActiveAdd from '@/components/active_add'
import Activities from '@/components/activities'
import ActiveCheck from '@/components/active_check'
import ActiveList from '@/components/active_list'
import Association from '@/components/association'
import Associations from '@/components/Associations'
import AssociationAdd from '@/components/Association_add'
import AssociationList from '@/components/AssociationList'
import AssociationSee from '@/components/AssociationSee'
import UserManagement from '@/components/UserManagement'
import UserManagements from '@/components/UserManagements'
import UserManagementAdd from '@/components/UserManagementAdd'
import "@/assets/css/main.css"

// 前端部分
import Factivities from '@/view/activities'


Vue.use(Router)
export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path:'/',
      name: Factivities,
      component: Factivities
    },
    {
      path: '/admin',
      name: 'Index',
      component: Index,
      children: [
        {
          path: 'active',
          name: 'Active',
          component: Active,
          children: [
            {
              path: 'add',
              name: 'ActiveAdd',
              component: ActiveAdd,
            },
            {
              path: 'check',
              name: 'ActiveCheck',
              component: ActiveCheck,
            },
            {
              path: '',
              name: 'Activities',
              component: Activities,
            },
            {
              path: ':id',
              name: 'ActiveList',
              component: ActiveList,
            }
          ]
        },
        {
          path: 'association',
          name: 'Association',
          component: Association,
          children: [
            {
              path: '',
              name: 'Associations',
              component: Associations,
            },
            {
              path: 'add',
              name: 'AssociationAdd',
              component: AssociationAdd,
            },
            {
              path: 'see/:id',
              name: 'AssociationSee',
              component: AssociationSee,
            },
            {
              path: ':id',
              name: 'AssociationList',
              component: AssociationList,
            }
          ]
        },
        {
          path: 'userManagement',
          name: 'UserManagement',
          component: UserManagement,
          children: [
            {
              path: '',
              name: 'UserManagements',
              component: UserManagements,
            },
            {
              path: 'add',
              name: 'UserManagementAdd',
              component: UserManagementAdd,
            },
          ]
        }
      ]
    }
  ]
})
