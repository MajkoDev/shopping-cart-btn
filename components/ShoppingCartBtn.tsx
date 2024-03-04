'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Button } from './ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from './ui/drawer';

export default function ShoppingCartBtn() {
  const [isHovered, setIsHovered] = useState(false);

  let price = 15.95;
  let count = 3;

  return (
    <div>
      <Drawer>
        <Button
          variant="outline"
          className="hover:bg-white hover:text-white hover:border-none w-[12rem] h-[2rem] rounded-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <div className="flex flex-row justify-between rounded-sm">
              <DrawerTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 text-center 
              bg-pink-800 hover:bg-white text-white hover:text-pink-800 
              w-[6rem] h-[2rem] rounded-l-sm rounded-r-none overflow-hidden flex items-center justify-center hover:opacity-75"
                >
                  Review
                </Button>
              </DrawerTrigger>

              <Link href="/cart">
                <Button
                  variant="outline"
                  className="flex-1 text-center 
                bg-pink-800 hover:bg-white text-white hover:text-pink-800 
                w-[6rem] h-[2rem] rounded-r-sm rounded-l-none overflow-hidden flex items-center justify-center hover:opacity-75"
                >
                  Visit
                </Button>
              </Link>
            </div>
          ) : (
            <div className="text-xs">
              <span className="font-bold mr-2">Shopping Cart</span>
              <span>
                {count} ks | {price} €
              </span>
            </div>
          )}
        </Button>

        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Shopping Cart</DrawerTitle>
              <DrawerDescription>
                Review and manage your items in shopping cart.
              </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
