import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Simple Nextjs Starter',
	description: 'Created by Ori',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}
