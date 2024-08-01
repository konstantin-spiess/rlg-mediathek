import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pathIsLogInOrLogOut(path: string) {
  return path === "/sign-in" || path === "/sign-out"
}
