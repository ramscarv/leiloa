"use client";

import React from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const LogIn = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Log In</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email" value="Username or Email" />
            <TextInput
              id="email"
              required
              type="text"
              placeholder="Your username or email"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Password" />
            <TextInput
              id="password"
              required
              type="password"
              placeholder="Your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
          </div>
          <Button
            type="submit"
            color="yellow"
            className="w-full"
          >
            Log In
          </Button>
        </form>
        <div className="text-center mt-4">
          <p>Don't have an account? 
          </p>
        </div>
      </div>
    </div>
  );
};