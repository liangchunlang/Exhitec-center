# 智能展馆中控系统

## 特性

-   使用 react ，ant-design ，dva   企业级后台管理系统最佳实践
-   基于 Mock 生成模拟数据  当然有些数据是自己直接写死的 （害羞~~）
-   组件UI使用的都是ant design 没有自己写的组件，但是可在utils/theme.js中改小小的颜色，（懒惰~~~）



## 开发及构建

文件夹命名说明:

-   components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件夹内主文件与文件夹同名，多文件以`index.js`导出对象（如`./src/components/Layout`）
-   routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如`UIElement`）,文件夹内主文件以`index.js`导出，多文件时可建立`components`文件夹（如`./src/routes/dashboard`），如果有子路由，依次按照路由层次建立文件夹（如`./src/routes/UIElement`）

### 使用方法

开发：

```bash
npm run dev    # 使用mock拦截请求，数据存储在localStroge里

打开 http://localhost:8086
```

构建：

```bash
npm run build

将会生成dist目录
```

代码检测：

```bash
npm run lint
```

### 注意事项

由于参考了很多官方网站和官方gihub项目中的案例代码，所以会有一些莫名其妙的BUG ，目前还没有时间完善（逃~~~~~）

