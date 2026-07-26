"use client";

import React from "react";

interface ProductVectorProps {
  type: "monitor" | "keyboard" | "headphones" | "processor" | "key" | "dock";
  className?: string;
}

export default function ProductVector({ type, className = "" }: ProductVectorProps) {
  switch (type) {
    case "monitor":
      return (
        <svg
          viewBox="0 0 400 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Curved Ultra-wide Screen Outer Frame */}
          <rect x="20" y="30" width="360" height="170" rx="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          <rect x="28" y="38" width="344" height="154" rx="12" fill="#09090b" />
          
          {/* Screen Content Graphics */}
          <line x1="40" y1="70" x2="160" y2="70" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
          <line x1="40" y1="90" x2="120" y2="90" stroke="#52525b" strokeWidth="2" strokeLinecap="round" />
          
          {/* Audio Wave Visualizer */}
          <rect x="200" y="60" width="12" height="60" rx="4" fill="#fafafa" opacity="0.9" />
          <rect x="220" y="80" width="12" height="40" rx="4" fill="#a1a1aa" opacity="0.8" />
          <rect x="240" y="50" width="12" height="70" rx="4" fill="#e4e4e7" opacity="0.95" />
          <rect x="260" y="90" width="12" height="30" rx="4" fill="#71717a" opacity="0.7" />
          <rect x="280" y="70" width="12" height="50" rx="4" fill="#d4d4d8" opacity="0.85" />
          
          {/* Grid lines */}
          <path d="M40 140 H340" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="90" cy="140" r="14" fill="#27272a" stroke="#a1a1aa" strokeWidth="1.5" />
          <circle cx="150" cy="140" r="14" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />

          {/* Stand Stem & Base */}
          <path d="M185 200 L175 245 H225 L215 200 Z" fill="#27272a" stroke="#3f3f46" strokeWidth="1.5" />
          <ellipse cx="200" cy="248" rx="65" ry="12" fill="#18181b" stroke="#52525b" strokeWidth="2" />
        </svg>
      );

    case "keyboard":
      return (
        <svg
          viewBox="0 0 400 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Mechanical Keyboard Chassis */}
          <rect x="30" y="60" width="340" height="130" rx="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          
          {/* Key Switches Grid */}
          <g fill="#27272a" stroke="#52525b" strokeWidth="1">
            {/* Function Row */}
            <rect x="45" y="75" width="22" height="18" rx="4" fill="#fafafa" stroke="#ffffff" />
            <rect x="73" y="75" width="22" height="18" rx="4" />
            <rect x="101" y="75" width="22" height="18" rx="4" />
            <rect x="129" y="75" width="22" height="18" rx="4" />
            <rect x="157" y="75" width="22" height="18" rx="4" />
            <rect x="185" y="75" width="22" height="18" rx="4" />
            <rect x="213" y="75" width="22" height="18" rx="4" />
            <rect x="241" y="75" width="22" height="18" rx="4" />
            <rect x="269" y="75" width="22" height="18" rx="4" />
            <rect x="297" y="75" width="22" height="18" rx="4" />
            <rect x="325" y="75" width="30" height="18" rx="4" fill="#3f3f46" />

            {/* QWERTY Row */}
            <rect x="45" y="99" width="30" height="20" rx="4" fill="#3f3f46" />
            <rect x="81" y="99" width="22" height="20" rx="4" />
            <rect x="109" y="99" width="22" height="20" rx="4" />
            <rect x="137" y="99" width="22" height="20" rx="4" />
            <rect x="165" y="99" width="22" height="20" rx="4" />
            <rect x="193" y="99" width="22" height="20" rx="4" />
            <rect x="221" y="99" width="22" height="20" rx="4" />
            <rect x="249" y="99" width="22" height="20" rx="4" />
            <rect x="277" y="99" width="22" height="20" rx="4" />
            <rect x="305" y="99" width="50" height="20" rx="4" fill="#52525b" />

            {/* Spacebar Row */}
            <rect x="45" y="153" width="32" height="22" rx="4" />
            <rect x="83" y="153" width="32" height="22" rx="4" />
            <rect x="121" y="153" width="150" height="22" rx="6" fill="#fafafa" stroke="#ffffff" />
            <rect x="277" y="153" width="36" height="22" rx="4" />
            <rect x="319" y="153" width="36" height="22" rx="4" />
          </g>

          {/* Volume Knob */}
          <circle cx="340" cy="84" r="7" fill="#fafafa" stroke="#ffffff" strokeWidth="2" />
        </svg>
      );

    case "headphones":
      return (
        <svg
          viewBox="0 0 300 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Headband Arc */}
          <path
            d="M50 160 C50 60, 250 60, 250 160"
            stroke="#3f3f46"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M70 140 C70 80, 230 80, 230 140"
            stroke="#fafafa"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Left Ear Cup */}
          <rect x="30" y="140" width="40" height="85" rx="20" fill="#18181b" stroke="#52525b" strokeWidth="3" />
          <rect x="40" y="150" width="20" height="65" rx="10" fill="#27272a" />

          {/* Right Ear Cup */}
          <rect x="230" y="140" width="40" height="85" rx="20" fill="#18181b" stroke="#52525b" strokeWidth="3" />
          <rect x="240" y="150" width="20" height="65" rx="10" fill="#27272a" />

          {/* Metallic Hinge Accents */}
          <rect x="42" y="125" width="16" height="20" rx="4" fill="#fafafa" />
          <rect x="242" y="125" width="16" height="20" rx="4" fill="#fafafa" />
        </svg>
      );

    case "processor":
      return (
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Outer BGA Pin Frame */}
          <rect x="30" y="30" width="220" height="220" rx="24" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          
          {/* PCB Grid Circuit Traces */}
          <rect x="50" y="50" width="180" height="180" rx="16" fill="#09090b" stroke="#27272a" strokeWidth="2" />
          
          {/* Metallic Heat Spreader */}
          <rect x="75" y="75" width="130" height="130" rx="12" fill="#27272a" stroke="#fafafa" strokeWidth="2" />
          <rect x="90" y="90" width="100" height="100" rx="8" fill="#18181b" />
          
          {/* Core Chiplet Diagram */}
          <rect x="100" y="100" width="35" height="35" rx="4" fill="#fafafa" />
          <rect x="145" y="100" width="35" height="35" rx="4" fill="#71717a" />
          <rect x="100" y="145" width="35" height="35" rx="4" fill="#52525b" />
          <rect x="145" y="145" width="35" height="35" rx="4" fill="#e4e4e7" />
          
          {/* Corner Notch Pin 1 Indicator */}
          <circle cx="45" cy="45" r="4" fill="#fafafa" />
        </svg>
      );

    case "key":
      return (
        <svg
          viewBox="0 0 280 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Hardware Security Key Body */}
          <rect x="40" y="70" width="140" height="100" rx="20" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          
          {/* USB-C Connector */}
          <rect x="180" y="95" width="60" height="50" rx="10" fill="#27272a" stroke="#fafafa" strokeWidth="2" />
          <rect x="195" y="110" width="30" height="20" rx="4" fill="#09090b" />
          
          {/* Gold Capacitive Touch Ring */}
          <circle cx="100" cy="120" r="28" fill="#27272a" stroke="#fafafa" strokeWidth="3" />
          <circle cx="100" cy="120" r="16" fill="#fafafa" />

          {/* Lanyard Hole */}
          <circle cx="65" cy="120" r="8" fill="#09090b" stroke="#52525b" strokeWidth="2" />
        </svg>
      );

    case "dock":
    default:
      return (
        <svg
          viewBox="0 0 340 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`w-full h-full object-contain ${className}`}
        >
          {/* Thunderbolt Dock Body */}
          <rect x="30" y="60" width="280" height="100" rx="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
          
          {/* Front Ports */}
          <rect x="50" y="95" width="24" height="30" rx="6" fill="#27272a" stroke="#fafafa" strokeWidth="1.5" />
          <rect x="85" y="100" width="30" height="20" rx="6" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
          <rect x="125" y="100" width="30" height="20" rx="6" fill="#27272a" stroke="#52525b" strokeWidth="1.5" />
          
          {/* SD Card Slot */}
          <rect x="170" y="108" width="50" height="6" rx="2" fill="#fafafa" />

          {/* LED Power Ring */}
          <circle cx="280" cy="110" r="6" fill="#fafafa" />
        </svg>
      );
  }
}
