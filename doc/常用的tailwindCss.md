## 常用tailwindCss

### 1. flex --- 替代浮动的最佳实践

```
// flex容器

flex 将元素定义为flex容器 (针对块级元素)
inline-flex 将元素定义为内联flex (针对内联元素,width/height = auto)

// 主轴方向,默认是从左到右

flex-row 默认方向,从左到右
flex-row-reverse 从右到左
flex-col 设置为从上到下
flex-col-reverse 从下到上

// 项目主轴水平方向对齐

justify-start 正常排列
justify-center 居中对齐
justify-end 对齐终点
justify-between 均匀分布,第一个与起点对齐,最后一个跟终点对齐
justify-around 均匀分布,间距相同
justify-evenly 项目之间和两端的间距相等

// 交叉轴对齐,通常是垂直方向
item-start 对齐到起点
item-center 居中对齐
item-end 终点对齐
items-baseline 对齐到基线
items-stretch 将项目在交叉轴上拉伸以填充容器（默认）


// 是否换行
flex-wrap 换行
flex-wrap-reverse
flex-nowrap 不换行(默认)

// 单个项目的对齐

self-auto 自动对齐
self-start 单个项目对齐起点
self-center 单个项目居中
self-end 单个项目对齐终点
self-stretch 拉伸并填充容器


// flex 的大小设置 --- 默认是自动增长和收缩的,当元素超出的时候自动收缩,不会自动增大,除非没有固定大小的情况下

grow 允许项目增长以填充剩余的空间
grow-0 项目不增长
shrink 允许项目收缩以适应容器空间
shrink-0 项目不收缩

// flex自适应比例
// 通常适用于在单独的一个项目上设置
// 例如一个设置了大小,另外一个直接设置flex-1自适应大小即可

flex-1 项目占用同等份额的空间,允许增大和缩小
flex-auto 项目根据自身内容大小自动调整,允许增大和缩小
flex-initial 项目根据自身内容大小调整,但是不增长,只收缩
felx-none 防止项目增大或者收缩,保持原始大小
```

> flex适合于已知大小的情况下排列布局,适合于多种复杂的布局

### 2. grid

适合不需要关心大小,只需要均匀分布

```
grid 网格布局
grid-cols-* 创建n个大小相等列的网格
col-span-* 实现元素跨越n列(在单个元素上)
grid-rows-* 创建具有n个大小相等的行的网格
row-span-* 实现元素跨越n行(在单个元素上)

// gap 用来控制网格和flex之间的间距

gap-0  设置间距
gap-x-0 横向间距
gap-y-0 纵向间距

// 在grid布局中元素的水平方向的对齐方式
// 例子: class="grid justify-items-center"
justify-items-start
justify-items-end
justify-items-center
justify-items-stretch


// 设置某个单独的元素在grid中的水平方向的对齐方式
justify-self-auto
justify-self-start
justify-self-end
justify-self-center
justify-self-stretch



// 控制多行flex 和网格的垂直对齐方式
content-normal
content-center
content-start
content-end
content-between
content-around
content-evenly
content-baseline
content-stretch
```

> 有点像表格中的行和列,适合于那种多个相同列表元素的排版格式
