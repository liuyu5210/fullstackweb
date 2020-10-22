# fullstackweb
>这是一个简单的全栈web app,基于Deno + Vue +Mysql.

## client
>运行在brower(浏览器)里的应用程序“code”（html + js + css）

## Server
>运行在Linux上的web服务
功能：
响应浏览器http请求
```sh
# 安装unzip解压工具
sudo apt install unzip
# 安装deno
curl -fsSL https://deno.land/x/install/install.sh | sh
# 拷贝二进制文件
sudo cp .deno/bin/deno /usr/bin
# 检测是否安装成功
deno --version

git clone  这个地址

```
```sh
touch mod.js
vim mod.js # add helloworld    和  index.html ork文件里
deno run --allow-net mod.js   启动服务：deno run --allow-net --allow-read mod.js 
curl localhost:8080
```
## DataBase
>持久化数据，保存brower(浏览器)用户需要的数据

- client：html页面，用户点击，发起http请求
- server 层 api：响应client端用户http请求 (通过deno三方库实现mysql使用)
- linux 系统层; install mysql 服务.
- 数据库：创建用户、表、插入数据
