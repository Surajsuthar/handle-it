"use client";

import { Home, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addToWaitList } from "@/modules/waitlist";

const waitListEmail = z.object({
  email: z.string().email(),
});

export const LandingPage = () => {
  
  const form = useForm<z.infer<typeof waitListEmail>>({
    resolver: zodResolver(waitListEmail),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof waitListEmail>) => {
      console.log("=>", values.email);
      await addToWaitList(values.email)
  };

  return (
    <main className="relative z-[10] min-h-screen overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
       */}
      <header className="fixed top-4 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl rounded-2xl py-2 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex space-x-3 items-center">
              <div className="p-2 rounded-xl">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-clip-text">Handle-it</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300"
              >
                Join Waitlist
              </Button>
              {/* <Button className="shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer  transition-all duration-300">
                Try Now !
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-8 animate-bounce">
            <Star className="w-4 h-4 mr-2" />
            Now in Beta - Join 10,000+ Early Users
          </div> */}

          <h1 className="text-5xl text-center md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            Handle Everything
            <br />
            <span className="text-blue-600">Effortlessly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI-powered tool to write, schedule content for social media to grow
            your social presence.
            <br />
            <span className="text-blue-600 font-semibold"> Handle-it</span>{" "}
            makes complexity simple.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Form {...form}
            >
              <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex space-x-2.5 items-center justify-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                        className="w-sm"
                        placeholder="Enter your Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  Join waitlist
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Form>

            {/* <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-4 text-lg border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button> */}
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              10,000+ Active Users
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              99.9% Uptime
            </div>
          </div> */}
        </div>
      </section>

      {/* ingration */}
      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Platform Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className=" grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Process tasks 10x faster with our intelligent automation and smart workflows"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee and data protection"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Team Collaboration",
                description: "Seamless collaboration tools that keep your team connected and productive"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Preview */}
      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Handle-it?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Lightning Fast",
                description: "Process tasks 10x faster with our intelligent automation and smart workflows"
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure & Reliable",
                description: "Enterprise-grade security with 99.9% uptime guarantee and data protection"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Team Collaboration",
                description: "Seamless collaboration tools that keep your team connected and productive"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Social Proof */}
      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Thousands of Happy Users
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Companies worldwide trust Handle-it to manage their most important work
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: "10,000+", label: "Active Users" },
              { metric: "99.9%", label: "Uptime" },
              { metric: "4.9/5", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.metric}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button 
            size="lg" 
            variant="outline"
            className="bg-white text-blue-600 border-white hover:bg-blue-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">Handle-it</span>
          </div>
          <p className="text-gray-400 mb-8">All by AI.</p>
          {/* <div className="flex justify-center space-x-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div> */}
          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            © 2025 Handle-it. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
};
