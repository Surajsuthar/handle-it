import React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"

interface CardWrapperProps {
    children: React.ReactNode
    title: string
    description: string
}

const CardWrapper = ({ 
    title, 
    description, 
    children 
}: CardWrapperProps) => {
    return (
        <Card className="min-h-[650px] min-w-96 p-8 justify-center">
            <CardHeader>
                <CardTitle className="text-2xl">
                    {title}
                </CardTitle>
                <CardDescription>
                   {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground">
                    {title === "Sign up" ? (
                        <>
                            Already have an account?{" "}
                            <Link href="/signin" className="!text-blue-600 underline hover:underline">
                                Sign in
                            </Link>
                        </>
                    ) : (
                        <>
                            Don't have an account?{" "}
                            <Link href="/signup" className="!text-blue-600 underline hover:underline">
                                Sign up
                            </Link>
                        </>
                    )}
                </p>
            </CardFooter>
        </Card>
    )
}

export { CardWrapper }