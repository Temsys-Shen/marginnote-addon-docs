import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/src/lib/layout';
import type { ReactNode } from 'react';
import './global.css';

export const metadata: Metadata = {
	title: {
		default: 'MarginNote插件开发文档',
		template: '%s | MarginNote插件开发文档',
	},
	description: 'MarginNote插件开发的完整API参考与渐进式教程。',
	metadataBase: new URL('https://mn-docs.museday.top'),
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<body>
				<RootProvider
					search={{
						options: {
							type: 'static',
						},
					}}
				>
					<HomeLayout {...baseOptions}>{children}</HomeLayout>
				</RootProvider>
			</body>
		</html>
	);
}
