import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className='flex gap-3 flex-1 md:flex-row flex-col'>
      <Button className='flex-1' variant={"outline"} asChild>
        <a href='/api/auth/login'>Sign up</a>
      </Button>
      <Button className='flex-1' asChild>
        <a href='/api/auth/login'>Login</a>
      </Button>
    </div>
  );
};
export default AuthButtons;
