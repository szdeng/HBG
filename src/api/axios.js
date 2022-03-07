import axios from 'axios';

//  让请求在浏览器中允许跨域携带cookie
axios.defaults.withCredentials = true;

// 使用自定义配置新建一个 axios 实例
const service= axios.create({
   // 基础的请求地址
    // baseURL: 'http://127.0.0.1:8000',
   // 设置超时时间 5s
    timeout: 5000,
});

// 请求拦截器，例如请求的时候在头部加上请求的token
service.interceptors.request.use(config => {
    if(sessionStorage.getItem("userToken")){
        config.headers['Authorization'] = 'JWT ' + sessionStorage.getItem("userToken")
    }
    

    return config;  //  有且必须有一个config对象被返回

}, error => {
   //   对请求错误做些什么
    console.log(error);
    return Promise.reject();
});


// 响应拦截器,例如判断服务器返回的状态，400，500啥的，其实超时可以写到这里面来，我分开写了一个比较直观
service.interceptors.response.use(
    response => {
        if (response.status === 201 || response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            console.log('服务器太垃圾了');
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200或201的情况,这些自定义（需要与后台商量返回）
    error => {
        // if (
        //    400 <= error.response.status <500
        // ) {
        //     this.$alert("用户信息过期，请重新登录！");
        //     // 清除token
        //     // localStorage.removeItem("token");
        //     // 跳转登录
        //     setTimeout(() => {
        //         window.location.href = "/login";
        //     }, 1000);
        // } else {
        //     if (error.response.status >= 500) {
        //         this.$alert("服务器错误，请稍后再试！");
        //     } else {
        //         this.$alert("服务器错误，请稍后再试！");
        //         return Promise.reject(error)
        //     }
        // }
        console.log('服务器太垃圾了1');
        return error.response.data
    }
);


/*
 *  get请求
 *  url:请求地址
 *  params:参数
 * */
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'get',
            params: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

/*
 *  post请求
 *  url:请求地址
 *  params:参数
 * */
export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'post',
            data: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export function put(url, params = {}) {
    return new Promise((resolve, reject) => {
        service({
            url: url,
            method: 'put',
            data: params
        }).then(response => {
            resolve(response);
        }).catch(error => {
            reject(error);
        });
    });
}

export default {
    get,
    post,
    put
}