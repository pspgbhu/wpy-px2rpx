# px2rpx

目前只适用于 wpy 文件。可以按照一定的倍数将 style 标签内的 px 单位全部转换为 rpx

## Usage

```
px2rpx src/mycomponent.wpy
```

为了安全起见，默认不是覆盖原有文件，而是生成一个新的文件副本。

上述命令将会生成 src/mycomponent.rpx.wpy 文件

增加 `--cover` 命令以开始覆盖源文件模式（为了防止未知的问题，暂时不推荐这么干）
```
px2rpx src/mycomponent.wpy --cover
```

## Test

时间匆忙，没有写测试，就简单的写了一个 demo，可以看看运行效果。

在终端执行 `npm test`，执行完成后会生成 `demo/demo.rpx.wpy` 文件，可以人工比较一下执行效果。
