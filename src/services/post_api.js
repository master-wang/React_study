import { get } from 'axios'
// 发送api请求获取数据
export function getPosts(){
    return get('http://jsonplaceholder.typicode.com/posts')
}