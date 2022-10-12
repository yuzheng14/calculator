# Calculator

![](README.assets/Logotype%20primary.png)

React 计算器

[ahfarmer/calculator](https://github.com/ahfarmer/calculator) 的个人实现，原版已于2019年停更，个人复现并修复一定 bug

## 在线访问 Try it online

[ahfarmer.github.io/calculator](https://ahfarmer.github.io/calculator/)

## 使用 Usage

```bash
npm install
npm start
```

## 与原版差异 Difference

- 没有状态的组件全部使用函数组件
- 修复 bug：输入第二个数时先输入 0 会导致显示的数前有 0
- 修复 bug：除以 0 时条件判断始终为 false
- 增加每一步的教程

## 教程 Tutorial

从零开始的手把手[教程](docs/教程.md)

## 待改进

- [ ] 历史状态
- [ ] 点击历史状态可直接将该结果输入