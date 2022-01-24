这是最简单的 express js 框架，有 controller, 有 rounter

$ mkdir tsapi
$ cd tsapi
# 初始化工程
$ npm init -y
# 安装依赖包
$ npm install -D typescript
$ npm install -D @types/node
$ npm install -D ts-node
$ npm install -D nodemon
# 初始化 TypeScript 设置文件
$ npx tsc --init
# 安装 express.js
$ npm install express
$ npm install -D @types/express
# 建立启动文件
$ nano app.ts
...
# 执行启动文件
$ npx ts-node app.ts



### 设置 tsconfig.json 修改输出

```json
...
  "rootDir": "./src/",
  "outDir": "./dist/",
...
```

### 设置 package.json 增加调试命令

```json
...
    "watch": "npx tsc -w",
    "dev": "npx nodemon ./dist/app.js"
...


### 调试执行

```bash
# 监视 ts 文件修改
$ npm run watch
# 监视 js 文件生成
$ npm run dev