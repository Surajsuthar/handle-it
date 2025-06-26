import { auth } from "@/auth"

export default async function Home() {
    const user = await auth()
    return (
        <div>
            settings
            {JSON.stringify(user)}
        </div>
    )
}   