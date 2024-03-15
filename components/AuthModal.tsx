import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useMutation } from "@tanstack/react-query"
import React from 'react'
import { Mutation } from "./Mutation"
import { usePathname } from "next/navigation"





const AuthModal = () => {

  // const {data, mutate} = useMutation({ mutationKey : ["login"], mutationFn : Mutation,});


 

  // const handleLogin = async() => {
  //   mutate();
  //  localStorage.setItem("guest_session_id", data.guest_session_id);
    
  // }


  const handleLogout = async() => {
    localStorage.removeItem("guess_session_id");
  }

  return (
    <Dialog >
      <DialogTrigger  asChild>
        <Button variant="default" className="text-white bg-green-500 rounded-2xl">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-neutral-900 border-none">
        <DialogHeader>
          <DialogTitle className="bg-neutral-900 text-[1.6rem]" >Login</DialogTitle>
          <DialogDescription className="text-base">
            Welcome ! Login by registering as a Guest below.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="block m-auto">
            <button className=" py-2 rounded-2xl shadow-lg text-xl  w-[200px] font-medium hover:bg-neutral-600 text-white bg-green-700" >Login</button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AuthModal