import { CardWrapper } from "@/components/auth/cardwrapper";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";


const Signup = () => {
  return (
    <CardWrapper
      title={"Sign up"}
      description={"Create your account to get started."}
    >
      <section className="w-full space-y-3">
        <div className="flex flex-col space-y-3">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input placeholder="Email" type="Email" id="email" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input placeholder="Enter your password" type="password" id="password" />
          </div>
          <Button>Enter</Button>
        </div>
        <Separator className="w-2/3" />
        <Button className="w-full cursor-pointer">Sign up with google</Button>
      </section>
    </CardWrapper>
  );
};

export default Signup;
