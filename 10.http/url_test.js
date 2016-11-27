var url = require('url');
var urlObj = url.parse('https://username:password@www.baidu.com:80/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=62095104_oem_dg&wd=asd&rsv_pq=e003d0670009b092&rsv_t=c0d5DkzrBHa1onMmeYHB9Ei011zK%2FITGIMVQC47xbFQrg14t%2B%2FqgIUVmLYtkXGHc1LkR20kH&rqlang=cn&rsv_enter=0&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&prefixsug=asd&rsp=0&inputT=1022&rsv_sug4=1022#hello',true);
console.log(urlObj);

/*
Url {
    protocol: 'https:', 协议
        slashes: true, 是否有/
        auth: 'username:password', 账号密码
        host: 'www.baidu.com:80', 主机
        port: '80', 端口号
        hostname: 'www.baidu.com',主机名
        hash: '#hello',  锚点
        search: '?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=62095104_oem_dg&wd=asd&rsv_pq=e003d0670009b092&rsv_t=c0d5DkzrBHa1onMmeYHB9Ei011zK%2FITGIMVQC47xbFQrg14t%2B%2FqgIUVmLYtkXGHc1LkR20kH&rqlang=cn&rsv_enter=0&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&prefixsug=asd&rsp=0&inputT=1022&rsv_sug4=1022', 查询串
        query:   查询对象
    { ie: 'utf-8',
        f: '3',
        rsv_bp: '0',
        rsv_idx: '1',
        tn: '62095104_oem_dg',
        wd: 'asd',
        rsv_pq: 'e003d0670009b092',
        rsv_t: 'c0d5DkzrBHa1onMmeYHB9Ei011zK/ITGIMVQC47xbFQrg14t+/qgIUVmLYtkXGHc1LkR20kH',
        rqlang: 'cn',
        rsv_enter: '0',
        rsv_sug3: '3',
        rsv_sug1: '1',
        rsv_sug7: '100',
        prefixsug: 'asd',
        rsp: '0',
        inputT: '1022',
        rsv_sug4: '1022' },
    pathname: '/s',  访问的路径
        path: '/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=62095104_oem_dg&wd=asd&rsv_pq=e003d0670009b092&rsv_t=c0d5DkzrBHa1onMmeYHB9Ei011zK%2FITGIMVQC47xbFQrg14t%2B%2FqgIUVmLYtkXGHc1LkR20kH&rqlang=cn&rsv_enter=0&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&prefixsug=asd&rsp=0&inputT=1022&rsv_sug4=1022',
        href: 'https://username:password@www.baidu.com:80/s?ie=utf-8&f=3&rsv_bp=0&rsv_idx=1&tn=62095104_oem_dg&wd=asd&rsv_pq=e003d0670009b092&rsv_t=c0d5DkzrBHa1onMmeYHB9Ei011zK%2FITGIMVQC47xbFQrg14t%2B%2FqgIUVmLYtkXGHc1LkR20kH&rqlang=cn&rsv_enter=0&rsv_sug3=3&rsv_sug1=1&rsv_sug7=100&prefixsug=asd&rsp=0&inputT=1022&rsv_sug4=1022#hello' }
*/
