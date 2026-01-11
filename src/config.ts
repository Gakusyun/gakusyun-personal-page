import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 站点配置
export const siteConfig: SiteConfig = {
	title: "Gakusyun", // 网站标题
	subtitle: "Blog", // 副标题
	lang: "zh_CN", // 语言设置：'en'（英语）、'zh_CN'（简体中文）、'zh_TW'（繁体中文）、'ja'（日语）、'ko'（韩语）、'es'（西班牙语）、'th'（泰语）、'vi'（越南语）
	themeColor: {
		hue: 250, // 主题色的色相值，范围从 0 到 360。例如：红色: 0，青绿色: 200，蓝绿色: 250，粉红色: 345
		fixed: true, // 是否隐藏主题色选择器（对访问者不可见）
	},
	banner: {
		enable: true, // 是否启用横幅图片
		src: "assets/images/cover.webp", // 横幅图片路径，相对于 /src 目录；若以 '/' 开头，则相对于 /public 目录
		position: "center", // 图片对齐方式，等同于 CSS 的 object-position，仅支持 'top'、'center'、'bottom'，默认为 'center'
		credit: {
			enable: true, // 是否显示横幅图片的署名信息
			text: "Espejo", // 要显示的署名文字
			url: "https://www.pixiv.net/artworks/82910218", // （可选）原始图片或作者页面的链接地址
		},
	},
	toc: {
		enable: true, // 是否在文章右侧显示目录
		depth: 2, // 目录中显示的最大标题层级，范围为 1 到 3
	},
	favicon: [
		{
			src: '/favicon/favicon.ico',    // favicon 路径，相对于 /public 目录
			//   theme: 'light',              // （可选）可选 'light' 或 'dark'，仅在亮色和暗色模式使用不同图标时设置
			//   sizes: '32x32',              // （可选）图标的尺寸，仅在使用不同尺寸图标时设置
		}
	],
};

// 导航栏配置
export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home, // 首页链接
		LinkPreset.Blog, // 博客页面链接
		LinkPreset.Archive, // 归档页面链接
		LinkPreset.About, // 关于页面链接
		{
			name: "GitHub",
			url: "https://github.com/Gakusyun", // 内部链接无需包含基础路径，系统会自动添加
			external: true, // 显示外部链接图标，并在新标签页中打开
		},
	],
};

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: [ // 头像数组，每次访问随机选择一张
		"assets/images/ao.jpg",
		"assets/images/aotomira.webp",
		"assets/images/bujishibou.webp",
	],
	name: "Gakusyun", // 姓名
	bio: "我要成为计算机Master!", // 个人简介
	links: [
		{
			name: "主页",
			icon: "material-symbols:house", // 图标代码，可访问 https://icones.js.org/ 查询
			// 如果图标集尚未安装，需要手动安装对应包，例如：
			// `pnpm add @iconify-json/<图标集名称>`
			url: "https://www.gxj62.cn",
		},
		{
			name: "邮箱",
			icon: "material-symbols:mail-rounded",
			url: "mailto:gxj@gxj62.cn",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Gakusyun",
		},
	],
};

// 许可证配置
export const licenseConfig: LicenseConfig = {
	enable: true, // 是否启用许可证信息
	name: "CC BY-NC-SA 4.0", // 使用的许可证名称
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可证链接
};

// 代码高亮显示配置（Expressive Code）
export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（如背景色）可能被覆盖，请参见 astro.config.mjs 文件中的设置。
	// 请选用一个深色主题，因为当前博客主题仅支持深色背景。
	theme: "github-dark",
};
