import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import BottomBar from '@/components/shared/BottomBar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import TopBar from '@/components/shared/TopBar'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Threads',
	description: 'A Next.js 13 Meta Threads application',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<TopBar />
					<main className='flex flex-row'>
						<LeftSidebar />
						<section className='main-container'>
							<div className='w-full max-w-4xl'>{children}</div>
						</section>
						<RightSidebar />
					</main>
					<BottomBar />
				</body>
			</html>
		</ClerkProvider>
	)
}
