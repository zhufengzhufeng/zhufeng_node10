## npm(依赖管理)
- 记录依赖
初始化记录的依赖的文件 package.json
```
npm init
```
- 安装
    - 本地安装
        - 开发依赖(开发的时候使用，上线后不需要)
        ```
         npm install gulp --save-dev
        ```
        - 发布依赖(开发时候用上线时仍需要)
        ```
         npm install jquery --save
        ```
    - 通过package.json来安装所需的依赖
        ```
        npm install
        ```
    > 默认安装到当前目录下的node_modules文件夹下
    
    - 全局安装(不是所有文件都能全局安装的,默认安装到c盘下)
        安装后可以在命令行下使用
        ```
           npm install gulp -g
        ```
    > 全局安装不会安装到自己的文件夹中
- 卸载
    - 本地的卸载
    ```
    npm uninstall gulp --save-dev
    ```
    - 全局卸载
    ```
    npm uninstall gulp -g
    ```
    - 查看全局的安装路径
    ```
    npm root -g
    ```
- 发布



## 源npm 切换源切换到国内
- cnpm taobao 
- 安装nrm工具，想在命令行下切换源
```
npm install -g nrm
```
- 显示所有源
```
nrm ls
```
- 添加源
```
nrm add zhufeng http://172.18.0.199
```
- 切换源
```
nrm use zhufeng
``` 

## 安装nodeppt
```
npm install -g nodeppt
```
- 重新指定端口
```
nodeppt start -p 3000
```
开始写ppt
必须采用markdown格式

> https://github.com/ksky521/nodePPT

## 发布包
我们写好一个包，发布到npm上
- 包里必须要有package.json文件
```
npm init -y
``` 
- 写一个包的入口文件
- 发布到npm网站上
添加用户 如果有表示登陆
```
npm add user 
```
- 发布包（第三方包）
```
npm publish
```
- 下载第三方包
```
npm install 包名 --save
```

> 引用第三方包，通过require引用包的名字，直接引用即可，node_modules必须在同级或者上级才能够找到，会默认执行package.json文字中main指定的文件

- 取消发布
```
npm unpublish --force
```

> 只有发布包时才必须要切换到npm上