css的选择器，
并集选择器，直接用，隔开
 div,
  p,
  span {
    color: red;
  }

交集选择器，选择器之间连写，没有任何符号，但是顺序是：标签名+#id+.class的顺序排列
p#tab.box.text {
    color: red;
}

伪类选择器，伪类表示元素状态，选择器：状态
a:hover {
    color: red;
  }
也可以根据元素的解构关系来查找元素
E:before
E:after
li：first-child{
  background-color:green;
}
:nth-child公式：
偶数标签 2n
奇数标签 2n-1或者2n+1
找到五的倍数的标签 5n
找到第5个以后的标签 n+5
找到第五个以前的标签 -n+5
提示：公式中的n取值从0开始

其中超链接一共有四个状态
：link访问签
：visited访问后
：hover鼠标悬停
：active点击时

伪元素：以双冒号(::)开头，用于在文档中!!!!!!!!插入!!!!!!!!虚构的元素
::first-letter
::first-line
::before
::after

<!-- 如果一个块级元素包含子元素，text-align 也会对这些内联子元素产生影响。例如，在父元素中应用 text-align: center; 会使所有内联或内联块级子元素（如 <span> 或 <img>) 在父元素内居中对齐。 -->

子级会默认继承父级的文字控制属性
相同的属性会覆盖，不同的属性会都生效

优先级，选中标签的范围越大，优先级越低

通配符选择器<标签选择器<类选择器<id选择器<行内样式<!important

显示模式：
块级元素，独占一行，宽度默认是父级的100%，添加宽高属性生效，例如 div，p,h1-h5,section,ul,ol,li,table,form等

行内元素，一行可以显示多个，设置宽高属性不生效，宽高尺寸由内容撑开，例如span，label,a，code,mark等（如果想设置行高的话，可以设置line-height，或者将行内元素转换为行内块元素display：inline-block）

行内块元素，一行可以显示多个，设置宽高属性可以生效，宽高尺寸也可以由内容撑开，img，input，button，select，textarea

盒子模型：
内容区域：width&height
内边距：padding，不能为负
边框线：border，不能为负
外边距：margin，两个兄弟元素垂直方向的外边距会取较大者，如果是父子元素，可能会发生塌陷问题水平方向不会合并。如果有负边距，则是相加

塌陷问题：父元素和其第一个或最后一个元素的外边距可能会发生塌陷，子元素的外边距会合并到父元素
<div style="margin-top: 20px;">
  <p style="margin-top: 30px;">子元素</p>
</div>
这时的父元素的margin-top会变成30px

清除默认样式
*{
  margin：0；
  padding：0；
}

overflow：
hidden 隐藏溢出
scroll 溢出滚动，无论溢出都显示滚动条位置
auto 溢出滚动，只有溢出才显示滚动条位置

box-shadow可以设置元素阴影效果
属性值：X轴偏移量，Y轴偏移量，模糊半径，扩散半径，颜色，内外阴影

标准流：指的是标签在页面中默认的排布规则，例如块元素一行，行内元素可以一行多个等

浮动
作用：让块元素水平排列
属性名：float
属性值：left左对齐，right右对齐
特点：浮动后的盒子顶对齐，具有行内块特点，浮动后的盒子脱离标准流，不占用标准流的位置

清除浮动
如果父元素没有高度，子元素无法撑开父元素的高度，可能会导致页面布局错乱，需要清除浮动

方法1：额外标签法
在父元素内容的最后添加一个块级元素，设置CSS属性 clear:both

方法2：单伪元素法
向父元素的末尾插入一个不可见的块级伪元素，强制父元素包含浮动的子元素，从而解决高度塌陷的问题。
.container::after {
  content: "";//伪元素需要有内容，即使这个内容是一个空字符串。
  display: table;//使伪元素成为一个块级元素
  clear: both;
}

方法3：双伪元素法
双伪元素清除浮动法是通过同时使用 ::before 和 ::after 伪元素来清除浮动。这种方法的目的是在父元素的前后都插入伪元素，确保浮动清除的效果更强大和更可靠，特别适用于一些复杂的布局。
.container::before,
.container::after {
  content: "";
  display: table;
}

.container::after {
  clear: both;
}

方法4：overflow
使用 overflow 属性来清除浮动的原理是通过创建一个新的块格式化上下文（Block Formatting Context, BFC）。BFC 是一种独立的布局环境，容器内部的元素不会影响外部的元素布局，同时会自动包含浮动的子元素。因此，当我们给父元素设置 overflow 属性时，父元素就会扩展自身高度来包含浮动的子元素，从而避免高度塌陷的问题。

Flex布局
默认情况下，主轴方向尺寸是靠内容撑开，侧轴默认拉伸
设置方式：给父元素（弹性容器）设置display：flex，子元素（弹性盒子）可以自动挤压或者拉伸
主轴默认是水平，所以弹性盒子是横向排列
主轴对齐方式： justify-content/侧轴是align-content
flex-start 默认值，弹性盒子从起点开始依次排列
flex-end 弹性盒子从终点开始依次排列（靠右，顺序不变）
center 弹性盒子沿居中排列
space-bewteen（-around，-evenly）空间均匀分布在弹性盒子之间（两侧间距是中间间距的一半，各个间距相等）
父元素的剩余尺寸分配为间距

侧轴对齐方式 属性名：align-items加给容器的
align-self加给某个弹性盒子的
属性值： 
stretch：弹性盒子验证侧轴线被拉伸至填满容器（侧轴没有设置尺寸才能拉伸，并且弹性盒子是默认拉伸）
center：弹性盒子沿侧轴居中排列
flex-start：弹性盒子从起点开始依次排列
flex-end

修改主轴方向flex-direction，修改主轴以后侧轴默认会修改
属性值：row水平方向，从左往右，默认
column竖直方向，从上往下
row-reverse或者column-reverse

flex-wrap（弹性盒子可以自动挤压或拉伸，所有弹性盒子都在一行显示）属性值wrap 换行，nowrap不换行（默认）

flex：数字，数字值父元素剩余尺寸的份数，可以用来设置主轴方向的宽度
如果有多个子元素都设置了flex，就按数字份数进行分；如果只有一个元素设置了，就是所有剩余位置

定位position定位模式，left/right/top/bottom边偏移。灵活改变盒子在网页中的位置

相对定位 position：relative直接使用，用的少，都是配合其他的用
不脱标，占用自己原来的位置，显示模式特点保持不变（原来是块级，现在还是块级），设置边偏移，则相对自己原来位置移动

绝对定位position：absolute 
脱标，不占位，显示模式具有行内块特点，子绝父相（将子级元素设置成position：absolute 父级元素设置成position：relative
设置的left/right/top/bottom不会超过父级范围内。
如果父级不设置relative，会参照浏览器进行定位。

如果要居中的话，先参照父元素居中，top/left先50%，再调整向左向上挪自身的50%实现完全居中transform:translate(-50%,-50%)
也可以通过调整margin为负数来挪自身的50%的px实现完全居中（需要计算px）

总：参照物会找到最近的 已经定位的祖先元素，如果所有祖先元素都没有定位，就参照浏览器。

固定定位position：fixed 元素在网页滚动时位置不会改变
脱标，不占位，具有行内块的特点，设置偏移相对浏览器窗口改变位置即参照物是浏览器


堆叠层级：z-index
默认是按照标签书写顺序，后来者居上
可以设置定位元素的层级顺序，改变元素的显示顺序
属性值是整数数字，默认为0，取值越大，层级越高

transform属性用于对元素进行平移，缩放，旋转，倾斜等操作，不会影响其他元素的布局位置

平移：
transform: translateX(50px);
transform: translateY(100px); 
transform: translate(50px, 100px);

缩放：
transform: scale(1.5); 
transform: scaleX(2); 
transform: scaleY(0.5);

旋转：
transform: rotate(45deg);
transform: rotate(-90deg)

倾斜：
transform: skewX(30deg); 
transform: skewY(20deg);
transform: skew(30deg, 20deg);

3维变换：
rotateX(deg)：绕 X 轴旋转，使元素在上下方向上旋转。
rotateY(deg)：绕 Y 轴旋转，使元素在左右方向上旋转。
rotateZ(deg)：绕 Z 轴旋转，效果与二维 rotate() 类似。
translateZ(px)：沿 Z 轴平移元素，使其前后移动。
scaleZ(n)：沿 Z 轴缩放元素的大小。

<!-- 拓展：CSS sprites，将大量小图标，或者背景图片等装饰元素集合在一张sprite.png图中，使用相对定位获取具体的图标，可以使用PxCook测量小图片的坐标。 -->

vertical-align垂直对齐方式
浏览器会将所有行内块默认按照文字进行处理,按照基线对齐.图片的基线在底部,并且基线下还会有小空白.
属性值:baseline(基线对齐,默认)只要不是基线对齐,图片底部就没有空白,将图片转变为display:block也会消除空白
top:顶部对齐
middle:居中对齐
bottom:底部对齐

图片底下之所以会有空白,还是因为浏览器会将所有行内块默认按照文字进行处理

transition过渡(复合属性,即有多个值,用空格隔开)只能实现两个状态之间的变化过程
可以为一个元素在不同状态之间切换的上海添加过渡效果
属性值:过渡的属性 花费时间(s)
过渡的属性可以是具体的css属性,也可以为all,transition设置给元素本身

opacity透明度,0-1之间的小数
cursor指针样式:default,pointer,text,move

SEO搜索要求优化,网站头部SEO标签:
title,description,keywords

animation动画可以实现多个状态间的变化过程,动画过程可控
定义动画：括号内容是当前状态的css
@keyframes 动画名称 {
  from {}
  to {}
}//只能完成两个状态的动画
 
/* 方式二 */
@keyframes 动画名称 {
  0% {}
  10% {}
  ......
  100% {}
}//能完成多个状态的动画

再使用动画
animation: 动画名称 动画花费时长（前面两项必须赋值） 速度曲线 延迟时间 重复次数 动画方向 执行完毕时状态（forwards终点位置和backwards默认停留在起始位置）。
（infinite无限循环，alternate反向，linear匀速变化）;
可以在.box：hover {//暂停
  animation-play-state:paused
}

steps(数字)，逐帧动画，配合精灵图实现精灵变化

less是css预处理器，VScode插件Easy LESS可以保存less文件后自动生成对应的css文件

less运算，加减乘直接写计算表达式，除法需要加小括号或者.（height：100./4px）

less嵌套，用&表示当前选择器，不会生成后代选择器，配合伪类或者伪元素使用

.father{
  color:red;
  &:hover{
    color:green;
  }
  .son{
    width:100px;
  }
}

less变量可以作为容器存储变量
定义变量：  @变量名：数据
使用变量：  CSS属性：@变量名；

less导入： @import"文件路径"；如果是less文件可以省略后缀
less导出：在less文件的第一行添加//out：存储URL
在文件名称后面添加/
less禁止导出：在第一行添加//out：false

less混合：可以将一组css样式封装在一个块中，在需要的地方引用模板复用
例如：
<!-- 
.border-radius() {
  border-radius: 5px;
  -webkit-border-radius: 5px; /* 兼容性处理 */
  -moz-border-radius: 5px;
}

/* 使用混合 */
.box {
  .border-radius(); /* 引用混合 */
  background: lightblue;
} -->
还可以带参数
<!-- /* 定义带参数的混合 */
.border-radius(@radius) {
  border-radius: @radius;
  -webkit-border-radius: @radius;
  -moz-border-radius: @radius;
}

/* 使用带参数的混合 */
.box1 {
  .border-radius(10px);
}
.box2 {
  .border-radius(20px);
} -->

less函数：对值进行操作的内置方法，可以进行数学计算，颜色操作，字符串处理等。
内置的颜色操作函数：lighten() 和 darken()
自定义函数：
<!-- 
.calc-width(@base, @factor) {
  @result: @base * @factor;
  width: @result;
}

.container {
  .calc-width(100px, 1.5); /* 宽度将变为 150px */
} -->

rem相对html字号来计算的，默认情况下1rem=16px
可以修改html{font-size:20px}来修改rem的值

em是相对最近的父元素的字体大小，em的计算会随着层级变化而变化

适配方案vw和vh：相对于视口宽高，可以直接实现适配
1vw等于1/100视口宽度
1vh等于1/100视口高度

在实际开发中，可能有设计稿图，可以从设计稿图推出具体是多少vh尺寸
vh=实际px/(1vh对应的px)
vh和vw不能混用，因为可能会导致盒子变形，因为不同设备的宽高比不一定一样。

媒体查询：
@media（媒体特性）{css代码}
媒体特性：
max-width当要设置小于等于某一个值时使用
min-width当要设置大于等于某一个值时使用
如果有多个媒体查询，使用min-width的话就从小到大，使用max-width的话就从大到小，要不然会覆盖

媒体类型：
屏幕：screen，带屏幕的设备
打印预览：print，打印预览模式
阅读器：speech，屏幕阅读模式
不区分类型：all

实际开发中可以通过在html中条件引入css文件
<link rel="stylesheet" media="(媒体特性)" href="xx.css">

bootstrap使用栅格模式，将宽度分成12等分