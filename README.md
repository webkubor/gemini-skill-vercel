# 🚀 Gemini Vercel Expert Skill

[![Gemini CLI](https://img.shields.io/badge/Gemini--CLI-Skill-blueviolet)](https://github.com/google-gemini/gemini-cli)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Gemini Vercel Expert** 是一个为 [Gemini CLI](https://github.com/google-gemini/gemini-cli) 量身定制的自动化部署技能（Skill）。它能将您的项目从“本地代码”一键转化为“线上生产环境”，自动处理关联、构建、部署以及 Git 同步。

---

## ✨ 核心特性

- **📦 零配置关联**：自动检测 `.vercel` 状态。未关联项目？它会自动运行 `vercel link` 并引导您完成配置。
- **⚡️ 生产级部署**：默认使用 `--prod` 参数，确保您的代码直接发布到生产域名。
- **🔄 Git 自动同步**：部署成功后，自动执行 `git push`（支持自定义 Commit Message），保持本地与远程仓库完美同步。
- **🤖 AI 驱动流程**：Agent 会感知您的意图，在部署前确认环境，部署后报告在线 URL。

---

## 🛠 安装指南

确保您已安装 [Gemini CLI](https://github.com/google-gemini/gemini-cli)，然后在终端执行：

```bash
gemini skills install https://raw.githubusercontent.com/webkubor/gemini-skill-vercel/main/vercel-expert.skill --scope user
```

### 激活技能
安装完成后，在 Gemini CLI 会话中运行：
```bash
/skills reload
```

---

## 📖 使用方法

您可以像对待真实的运维专家一样向 Gemini 发指令：

- *"帮我把这个项目发布到 Vercel"*
- *"部署到生产环境并推送到 GitHub"*
- *"vercel deploy"*

技能会自动调用内置脚本 `scripts/deploy.cjs` 来处理所有复杂的 CLI 逻辑。

---

## 📋 要求

- **Vercel CLI**: 系统需安装 `vercel` (或通过 `npx` 访问)。
- **登录状态**: 需提前运行 `npx vercel login` 完成授权。

---

## 📄 开源协议

基于 [MIT License](LICENSE) 开源。

---
Created by [webkubor](https://github.com/webkubor)
