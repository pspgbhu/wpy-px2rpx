# px2rpx

目前只适用于 wpy 文件。可以按照一定的倍数将 style 标签内的 px 单位全部转换为 rpx

转换前：

```vue
<style lang="less">
  .demo {
    width: 50px;

    &::after {
      content: '';
      width: 100%;
      height: 0.5px;
    }
  }
</style>

<template>
  <view></view>
</template>

<script>
  export default {
  }
</script>
```

转换后

```vue
<style lang="less">
  .demo {
    width: 100rpx;

    &::after {
      content: '';
      width: 100%;
      height: 1rpx;
    }
  }
</style>

<template>
  <view></view>
</template>

<script>
  export default {
  }
</script>
```

## Quick Start


为了安全起见，默认不是覆盖原有文件，而是生成一个新的文件副本。

例如

```
px2rpx src/mycomponent.wpy
```

将会生成 src/mycomponent.rpx.wpy 文件。

增加 `--cover` 命令以开启覆盖源文件模式（胆大的可以先这么干）

```
px2rpx src/mycomponent.wpy --cover
```

## Options

```
px2rpx <filename> [options]
```

  - `-c, --cover`: 直接修改源文件，而不是创建新的文件副本。

  - `-r, --rate`: 设置数值的转换比率，默认是 2


## Test

时间匆忙，没有写测试，就简单的写了一个 demo，可以看看运行效果。

在终端执行 `npm test`，执行完成后会生成 `demo/demo.rpx.wpy` 文件，可以人工比较一下执行效果。
