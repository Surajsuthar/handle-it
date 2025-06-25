import { auth } from "@/auth"

export default async function Home() {
    const user = await auth()
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}   