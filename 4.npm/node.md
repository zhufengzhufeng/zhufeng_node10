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
