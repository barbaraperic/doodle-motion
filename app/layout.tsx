import type { Metadata } from 'next'
import { Baumans } from 'next/font/google'
import './globals.scss'

const baumas = Baumans({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-baumas',
})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={baumas.className}>{children}</body>
        </html>
    )
}
