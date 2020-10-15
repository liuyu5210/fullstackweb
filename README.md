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
vim mod.js # add helloworld
deno run --allow-net mod.js
curl localhost:8080
```
## DataBase
>持久化数据，保存brower(浏览器)用户需要的数据
