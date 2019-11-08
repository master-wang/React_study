//react router 的封装,变得和 vue router差不多
import MyApp from '../components/MyApp'
import HomePage from '../components/HomePage'
import Menu from '../components/Menu'
let router = [
    {
        path:'/home',
        componentName:HomePage,
        chirlds:[
            {
                path:'/home/a',
                componentName:Menu,
            }
        ]
    },
    {
        path:'/about',
        componentName:MyApp,
        exact:true
    }
]
export default router