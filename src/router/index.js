import { createRouter, createWebHistory } from 'vue-router'

import ACTIVITY2 from '@/views/ACTIVITY2.vue'
import Admission from '@/views/Admissions.vue'
import Academics from '@/views/Academics.vue'
import Campus from '@/views/CampusLife.vue'
import About from '@/views/About.vue'
import News from '@/views/News.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({

history:createWebHistory(),

routes:[

{
    path:'/',
    name:'ACTIVITY2',
    component:ACTIVITY2
  },
  {
    path:'/admissions',
    name:'Admissions',
    component:Admission
  },
  {
    path:'/academics',
    name:'Academics',
    component:Academics
  },
  {
    path:'/campus',
    name:'Campus',
    component:Campus  
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/news',
    name:'News',
    component:News
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  }


  

]

})

export default router