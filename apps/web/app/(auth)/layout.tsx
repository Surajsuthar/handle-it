import React from "react"

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <section className="min-h-screen w-full flex fixed">
            <aside className="w-1/2 p-8 flex">
                <div className="flex flex-col justify-start items-center w-full">
                    <div className="">
                        
                    </div>
                </div>
            </aside>
            <aside className="w-1/2 flex flex-col my-12 p-8">
                {children}
            </aside>
        </section>
    )
}

export default AuthLayout