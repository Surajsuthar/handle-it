import { auth } from "@/auth"

export default async function Home() {
    const user = await auth()
    return (
        <div>
            profile
            {JSON.stringify(user)}
        </div>
    )
}   