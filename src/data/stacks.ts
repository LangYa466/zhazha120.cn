// @unocss-include

interface Stack {
	readonly name: string
	readonly icon_class: string
	readonly website: string
}

export const website = [
	{
		name: 'Bun',
		icon_class: 'i-devicon:bun',
		website: 'https://bun.sh'
	},
	{
		name: 'TypeScript',
		icon_class: 'i-devicon:typescript',
		website: 'https://typescriptlang.org'
	},
	{
		name: 'UnoCSS',
		icon_class: 'i-logos:unocss',
		website: 'https://unocss.dev'
	},
	{
		name: 'Vue',
		icon_class: 'i-logos:vue',
		website: 'https://vuejs.org'
	},
	{
		name: 'Nuxt',
		icon_class: 'i-devicon:nuxtjs',
		website: 'https://nuxt.com'
	},
	{
		name: 'Naive UI',
		icon_class: 'i-logos:naiveui',
		website: 'https://naiveui.com'
	}
]

export default {
	'开发工具': [
		{
			name: 'IntelliJ IDEA',
			icon_class: 'i-logos:intellij-idea',
			website: 'https://www.jetbrains.com/idea'
		},
		{
			name: 'WebStorm',
			icon_class: 'i-logos:webstorm',
			website: 'https://www.jetbrains.com/webstorm'
		},
		{
			name: 'PhpStorm',
			icon_class: 'i-logos:phpstorm',
			website: 'https://www.jetbrains.com/phpstorm'
		},
		{
			name: 'GoLand',
			icon_class: 'i-logos:goland',
			website: 'https://www.jetbrains.com/goland'
		},
		{
			name: 'Rider',
			icon_class: 'i-logos:rider',
			website: 'https://www.jetbrains.com/rider'
		},
		{
			name: 'Visual Studio',
			icon_class: 'i-logos:visual-studio',
			website: 'https://visualstudio.com'
		},
		{
			name: 'Visual Studio Code',
			icon_class: 'i-logos:visual-studio-code',
			website: 'https://code.visualstudio.com'
		}
	],
	'前端': [
		{
			name: 'Yarn',
			icon_class: 'i-logos:yarn',
			website: 'https://yarnpkg.com'
		},
		{
			name: 'Pnpm',
			icon_class: 'i-logos:pnpm',
			website: 'https://pnpm.io'
		},
		{
			name: 'Bun',
			icon_class: 'i-devicon:bun',
			website: 'https://bun.sh'
		},
		{
			name: 'TypeScript',
			icon_class: 'i-devicon:typescript',
			website: 'https://typescriptlang.org'
		},
		{
			name: 'Vite',
			icon_class: 'i-logos:vitejs',
			website: 'https://vitejs.dev'
		},
		{
			name: 'Sass & Scss',
			icon_class: 'i-logos:sass',
			website: 'https://sass-lang.com'
		},
		{
			name: 'TailwindCSS',
			icon_class: 'i-devicon:tailwindcss',
			website: 'https://tailwindcss.com'
		},
		{
			name: 'UnoCSS',
			icon_class: 'i-logos:unocss',
			website: 'https://unocss.dev'
		},
		{
			name: 'Vue',
			icon_class: 'i-logos:vue',
			website: 'https://vuejs.org'
		},
		{
			name: 'Nuxt',
			icon_class: 'i-devicon:nuxtjs',
			website: 'https://nuxt.com'
		},
		{
			name: 'Naive UI',
			icon_class: 'i-logos:naiveui',
			website: 'https://naiveui.com'
		}
	],
	'后端': [
		{
			name: 'Node.js',
			icon_class: 'i-devicon:nodejs',
			website: 'https://nodejs.org'
		},
		{
			name: 'Python',
			icon_class: 'i-logos:python',
			website: 'https://python.org'
		},
		{
			name: 'C#',
			icon_class: 'i-devicon:csharp',
			website: 'https://learn.microsoft.com/zh-cn/dotnet/csharp'
		},
		{
			name: 'Java',
			icon_class: 'i-logos:java',
			website: 'https://java.com'
		},
		{
			name: 'PHP',
			icon_class: 'i-logos:php',
			website: 'https://php.net'
		},
		{
			name: 'Go',
			icon_class: 'i-logos:go',
			website: 'https://go.dev'
		},
		{
			name: 'Composer',
			icon_class: 'i-logos:composer',
			website: 'https://getcomposer.org'
		},
		{
			name: 'Laravel',
			icon_class: 'i-logos:laravel',
			website: 'https://laravel.com'
		},
		{
			name: 'MariaDB',
			icon_class: 'i-devicon:mariadb',
			website: 'https://mariadb.org'
		},
		{
			name: 'PostgreSQL',
			icon_class: 'i-logos:postgresql',
			website: 'https://postgresql.org'
		}
	],
	'运维': [
		{
			name: 'Docker',
			icon_class: 'i-devicon:docker',
			website: 'https://docker.com'
		},
		{
			name: 'Podman',
			icon_class: 'i-devicon:podman',
			website: 'https://podman.io'
		}
	]
} satisfies Record<string, Stack[]>