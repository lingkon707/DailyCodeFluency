"use client";
import React, { useState } from "react";
import { XMarkIcon, Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const navLinks = [
  { name: "Products", href: "#products" },
  { name: "Templates", href: "#templates" },
  { name: "UI Kits", href: "#uikits" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-blue-600">UIPlaza</h1>
          <span className="text-gray-500 hidden sm:inline">— Marketplace for Premium UI</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search UI assets..."
              className="border border-gray-300 rounded-full pl-10 pr-4 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* CTA / Cart */}
          <button className="flex items-center bg-blue-600 text-white px-4 py-1 rounded-full hover:bg-blue-700 transition">
            <ShoppingCartIcon className="h-5 w-5 mr-2" />
            Cart
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-800" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-800" />
          )}
        </button>
      </div>

   {isOpen && (
  <div className="fixed inset-0 z-40 md:hidden">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black bg-opacity-30"
      onClick={() => setIsOpen(false)}
    />

    {/* Drawer Panel */}
    <div className="absolute inset-0 bg-white z-50 px-6 py-6 overflow-y-auto animate-slide-in">
      <div className="flex flex-col space-y-6">
        {/* Close Button */}
        <div className="flex justify-end">
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Search */}
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="Search UI assets..."
            className="border border-gray-300 rounded-full pl-10 pr-4 py-2 text-gray-700 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Cart Button */}
        <button className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition mt-6 w-full">
          <ShoppingCartIcon className="h-5 w-5 mr-2" />
          Cart
        </button>
      </div>
    </div>
  </div>
)}


    </header>
  );
}
