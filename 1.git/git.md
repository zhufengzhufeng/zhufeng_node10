## 安装git
mac http://brew.sh
```
brew install git
```

## 配置git的使用者
```
git config --global user.name 'github的名字'
git config --global user.email 'github的邮箱'
```

## svn  git的区别
- svn集中式
- git分布式
## 查看配置列表
```
git config --list
```

## clear清屏

## 三个区
- 工作区 真实写代码的地方（开发项目时的目录）
- 暂存区/缓存区 把内容暂时存放一下(过渡作用)，将代码暂存后 一起提交出一个版本，维护版本库
- 历史区/版本库 放到版本库中的东西永远不会丢失

> github 远程仓库（历史区，最终展式的内容肯定是某一个版本）

## cd (change directory) 改变目录
- 使用gitbash 切换盘符需要加cd cmd中直接盘符:

## 初始化git仓库
表示当前文件夹下归git所管理
```
git init
```
## 删除目录
```
rm -rf 文件夹名字
```
## 查看文件夹
包括隐藏文件
```
ls -al 
```
## pwd打印目录
## 编辑文件内容
```
vi index.txt
```
- 进入编辑模式 i
- 退出编辑模式 ESC+ :WQ
## cat 查看文件内容
```
cat index.txt
```
## 像文件内输出内容
如果文件不存在则创建 如果多次echo > 会覆盖掉原有的内容
```
echo hello world > index.txt
```

> 两个大于号表示追加内容

## 查看状态 
```
git status
```
## 添加到暂存区中
```
git add 文件名
git add .
git add -A
```

## 将文件提交到历史区中
```
git commit -m"提交的内容"
``` 
## 查看git的提交日志
每次提交会产生一个版本号，存着对应的内容，切换版本号，就可以切换内容
```
git log
```
## 代码比较
- 工作区和暂存区的比较
```
git diff
```
- 工作区和历史区的比较
```
git diff master
```
- 暂存区和历史区的比较
```
git diff --cached
```

## 从工作区提交到历史区一步到位
不支持首次提交
```
git commit -a -m'ok'
```

## 让暂存区回到上次的add
```
git reset HEAD 文件名
```

## 用暂存区中的内容覆盖掉工作区的内容
```
git checkout 文件名
```

## 回滚 
- 回到过去
```
git reset --hard 版本号
```
- 站在过去角度回到未来
使用reflog查看所有操作
```
git reflog
git reset --hard 版本号
```

> 显示成一行需要加 --oneline

## 连接远程仓库
```
git remote add 名字 地址
```
- 查看配置的远程地址
```
git remote -v
git remote rm 名字 //删除远程地址
```

## 推送到远程仓库上
如果增加-u 下次再提交的时候就可以git push/git pull
```
git push origin master
-u upstream
``` 

## 创建忽略文件
创建一个文件叫.gitignore 里面写上不想要的文件

## 修改了本地的文件和修改了线上的文件
改的是同一个文件
- 为了防止在pull时拉取线上代码，覆盖掉本地内容，所以先要将本地的代码进行提交
- 在取拉取文件，拉取线上代码发现和本地冲突，此时不能自动合并，需要手动合并

> 修复冲突需要修改文件中=====<<<<<>>>> 将此类符号删掉保留想要的内容即可

## gh-pages
(如果把代码提交到这个分支上，guthub会给你个地址可以直接访问这个项目)
``` 
git push origin gh-pages
```

## 创建分支
- 创建分支
```
git branch gh-pages
```
- 切换分支
```
git checkout gh-pages
```
## 删除分支
切换到其他分支进行删除
```
git branch -d gh-pages
```
## 查看分支
```
git branch
```
## 推送分支
```
git push origin gh-pages
```
## 合并分支 
合并分支在主干合并其他分支
```
git merge gh-pages
```

> 一般情况下我们会将开发的内容建立一个开发分支将代码提交到开发分支上上线的时候合并到master分支，最后删除我们开发的分支即可