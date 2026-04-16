# upgradeclaude

一个参考 `upclaude.com` 内容结构制作的 Claude 代充落地页。

当前版本为纯静态页面，无后端依赖，适合先用于页面展示、文案确认和静态部署。

## 当前页面内容

- 首页定位：`Claude Pro 专业代充服务`
- 支付说明：支持支付宝 / 微信支付
- 客服方式：QQ 客服 `1002569303`
- 页面区块：首屏、核心优势、充值流程、套餐展示、使用建议、常见问题、客服引导

## 当前商品价格

- `ClaudePro 成品账号一个月（质保）`：`¥210.00`
- `ClaudePro 账号一个月（无质保）`：`¥150.00`
- `Claude Max 5X 礼品卡`：`¥599.00`
- `Claude Max 20X 礼品卡`：`¥1080.00`

## 文件结构

- `index.html`：页面主体结构和文案
- `styles.css`：页面视觉样式与响应式布局
- `script.js`：移动端菜单和 FAQ 交互
- `favicon.svg`：站点图标
- `grid.svg`：底部客服区背景纹理

## 本地预览

```bash
cd upgradeclaude
python3 -m http.server 8080
```

打开：

```bash
http://localhost:8080
```

## 还可以继续替换的内容

- 商品库存数量
- 实际下单链接
- 更完整的售后规则
- 订单查询或后台接口
- 自定义品牌名、Logo 和域名
