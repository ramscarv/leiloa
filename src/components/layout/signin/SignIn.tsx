"use client";

import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export const SignIn = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg mt-4 mb-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <h2 className="bg-blue-900 text-white text-xl font-semibold p-2">
              Personal Information
            </h2>
            <div>
              <Label htmlFor="name" value="Full Name" />
              <TextInput
                className="w-full"
                id="name"
                required
                type="text"
                placeholder="Your full name"
              />
            </div>
            <div>
              <Label htmlFor="email" value="Email" />
              <TextInput id="email" required type="email" placeholder="Your email" />
            </div>
            <div>
              <Label htmlFor="confirmEmail" value="Confirm Email" />
              <TextInput
                id="confirmEmail"
                required
                type="email"
                placeholder="Confirm your email"
              />
            </div>
            <div>
              <Label htmlFor="cpf" value="CPF" />
              <TextInput id="cpf" required type="text" placeholder="Your CPF" />
            </div>
          </div>

          <div>
            <h2 className="bg-blue-900 text-white text-xl font-semibold p-2">
              Site Access Information
            </h2>
            <div>
              <Label htmlFor="login" value="Username" />
              <TextInput id="login" required type="text" placeholder="Choose a username" />
            </div>
            <div>
              <Label htmlFor="passwordLogin" value="Password" />
              <TextInput
                id="passwordLogin"
                required
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div>
              <Label htmlFor="confirmPasswordLogin" value="Confirm Password" />
              <TextInput
                id="confirmPasswordLogin"
                required
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center mt-4">
              <Checkbox id="termsLogin" />
              <Label htmlFor="termsLogin">I have read and accept the terms and conditions.</Label>
            </div>
            <div className="flex items-center mt-4">
              <Checkbox id="newsletterLogin" />
              <Label htmlFor="newsletterLogin">I want to receive promotional emails.</Label>
            </div>
          </div>
          <Button type="submit" color="yellow" className="w-full">
            Create Account
          </Button>
        </form>
        <div className="text-center mt-4">
          <p>Already have an account? </p>
        </div>
      </div>
    </div>
  );
};