"use client";
import { CardWrapper } from "@/components/auth/cardwrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, MoveRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { credentialsSchema } from "@/types";
import { signIn } from "next-auth/react";
import { InputOTPDemo } from "@/components/auth/otp-card";

const Signup = () => {
  const [error, setError] = useState<String>("");
  const [showPassword, setShowpassword] = useState<Boolean>(false);

  const form = useForm<z.infer<typeof credentialsSchema>>({
    resolver: zodResolver(credentialsSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof credentialsSchema>) => {
    console.log("=>", values.email, values.password);
  };

  const handlePasswordVisibilty = () => {
    setShowpassword(!showPassword);
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { 
        callbackUrl: "/dashboard", 
        redirect: true 
      });
    } catch (error) {
      // WIP
    } finally {
    }
  };

  return (
    <CardWrapper
      title={"Sign up"}
      description={"Create your account to get started."}
    >
      <section className="w-full space-y-3">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Email" {...field} />
                    </FormControl>
                    <FormDescription>
                      Please enter valid email to receive a OTP.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          placeholder="Enter your Password"
                          type={showPassword ? "text" : "password"}
                        />
                        <button
                          type="button"
                          onClick={handlePasswordVisibilty}
                          className="absolute right-3 top-1/4 cursor-pointer"
                          aria-label={
                            showPassword ? "Hide password" : "Show password"
                          }
                        >
                          {showPassword ? (
                            <EyeOff size={20} />
                          ) : (
                            <Eye size={20} />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full cursor-pointer">
                Sign up <MoveRight />
              </Button>
            </div>
          </form>
        </Form>
        <Separator className="w-2/3" />
        <Button 
          type="button" 
          className="w-full cursor-pointer"
          onClick={handleGoogleSignIn}
        >
          Sign up with google
          <Image src={"google.svg"} height={22} width={22} alt="google" />
        </Button>
      </section>
    </CardWrapper>
  );
};

export default Signup;
