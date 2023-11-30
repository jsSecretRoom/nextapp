import React from "react";
import Link from "next/link";
export default function autoriaionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <h1>about us</h1>
        <ul>
            <li>
                <Link href='/autorization/contact'>Contacts</Link>
                <Link href='/autorization/team'>Team</Link>
            </li>
        </ul>
        {children}
    </div>
} 