import React from "react";
import { Skeleton } from "./ui/skeleton";

export const SkeletonFunc1= ()=> {
  return (
    <div className="space-x-0.5">
      <Skeleton className="h-145 w-18" />
    </div>
  );
}

export const SkeletonFunc2 = ()=>{
  return (
    <div className="space-y-1">
      <Skeleton className="h-18 w-[74.5rem]" />
    </div>
  )
}

export const SkeletonFunc3 = ()=>{
  return (
    <div className="space-y-2 space-x-2">
      <Skeleton className="h-18 w-[55rem]" />
      <Skeleton className="h-9 w-[12rem]" />
      <Skeleton className="h-10 w-[55rem]" />
      <Skeleton className="h-10 w-[55rem]" />
      <Skeleton className="h-10 w-[55rem]" />
      <div className="mt-5 space-y-2">

        <Skeleton className="ml-[22rem] h-10 w-[12rem]" />
        <Skeleton className="h-15 w-[54rem]" />
        <Skeleton className="ml-[23rem] h-10 w-[10rem]" />
        <Skeleton className="h-12 w-[54rem]" />
      </div>
    </div>
  )
}

export const SkeletonFunc4 = ()=>{
  return (
    <div className="space-y-2">
      <Skeleton className="h-[16rem] w-[19rem]" />
      <Skeleton className="h-[15rem] w-[19rem]" />
    </div>
  )
}
