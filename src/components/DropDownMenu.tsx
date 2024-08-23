"use client";
import { LogOut } from "lucide-react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="border-none" variant="outline">
          <UserCircleIcon className="h-8 w-8 border-none text-gray-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />

        <div className="overflow-hidden p-2">
          <Link
            href="/SignUp"
            className="bg-gray-500 hover:text-white font-bold p-2 m-2 overflow-hidden rounded-lg border-none"
          >
            <span>Sign up</span>
          </Link>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/" className="bg-none border-none">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
