'use client';
export default function ErrorData({error} : {error : Error}) {
    return <h1>ooouuu...{error.message}</h1>
}