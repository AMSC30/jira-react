# 项目总结

## 涉及技术

### 覆盖 antd 组件库样式

### css in js

### react-router-dom

### redux-toolkit

### react-query

### 单元测试

## 知识拓展

### 逻辑复用历史实现

mixin->HOC->render props ->hook

1. mixin：mixin 是最早实现状态和逻辑复用的方式，其实现时将 class 中公共的方法抽取成一个对象，在需要用到 mixin 中逻辑的组件中通过 mixin 属性进行混入

> 缺陷：
>
> -   隐式依赖导致关系不透明
> -   命名可能发生冲突

2. HOC：hoc 的使用思路是将公共的状态和逻辑抽取成一个组件，并返回一个接受组件的函数，在函数中定义可复用的组件，并将传入的组件与共用组件进行组合，返回新的组件

> 缺陷：
>
> -   扩展性不能完全代替 mixin，比如生命周期
> -   wrapper hell 导致代码难以理解和维护
> -   ref 传递问题

3. render props：将公共的状态和逻辑通过组件的方式封装起来，将需要定义的渲染结果通过 props 的方式传入到组件中，props 可以是一个组件也可以是一个返回 react 元素的函数

> 缺陷
>
> -   使用繁琐: HOC 使用只需要借助装饰器语法通常一行代码就可以进行复用,Render Props 无法做到如此简单
> -   嵌套过深: Render Props 虽然摆脱了组件多层嵌套的问题,但是转化为了函数回调的嵌套

4. hook：因为组件本质上是由状态、逻辑和渲染组成的，而如果一个组件不同，往往渲染是不同的，但存在相同的状态和逻辑，hook 就是通过闭包的方式，将公共的状态和逻辑进行抽离
