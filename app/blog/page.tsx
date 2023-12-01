
import { Metadata } from "next";
import Link from "next/link";

async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts",  {
        next: {
            revalidate: 60
        }
    })

    if(!response.ok) throw new Error('unabl to the feach posts!');

    return response.json();
}

export const metadata: Metadata = {
    title: "Блог | Next App",
};

export default async function Blog() {
    const posts = await getData();

    return (
        <>
            <h1>
                <p>Блог</p>
            </h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}