"use client";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const BAUHAUS_WRAPPER_STYLES = `
@property --rotation {
  syntax: '<angle>';
  initial-value: 4.2rad;
  inherits: false;
}

.bauhaus-wrapper {
  position: relative;
  border-radius: var(--card-radius, 2.5rem);
  padding: var(--card-border-width, 2px); 
  background: rgba(255, 255, 255, 0.05); /* Default subtle border */
  transition: background 0.3s ease;
  overflow: hidden;
}

/* The rotating gradient layer */
.bauhaus-wrapper::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: var(--card-border-width, 2px); 
  background: linear-gradient(var(--rotation), var(--card-accent, #156ef6) 0, transparent 40%, transparent 100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 1;
  -webkit-mask: 
     linear-gradient(#fff 0 0) content-box, 
     linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Desktop: Hover Effect */
@media (hover: hover) {
  .bauhaus-wrapper:hover::before {
    opacity: 1;
  }
}

/* Mobile/Touch: Scroll Focus Effect */
@media (hover: none), (max-width: 768px) {
  .bauhaus-wrapper.in-view::before {
    opacity: 1;
    animation: auto-rotate 5s linear infinite; /* Add life to it */
  }
}

@keyframes auto-rotate {
  from { --rotation: 0rad; }
  to { --rotation: 6.28rad; }
}
`;

function injectBauhausWrapperStyles() {
    if (typeof window === "undefined") return;
    const styleId = "bauhaus-wrapper-styles";
    let style = document.getElementById(styleId) as HTMLStyleElement;

    if (!style) {
        style = document.createElement("style");
        style.id = styleId;
        document.head.appendChild(style);
    }

    // Always update the styles to ensure HMR/changes apply
    if (style.innerHTML !== BAUHAUS_WRAPPER_STYLES) {
        style.innerHTML = BAUHAUS_WRAPPER_STYLES;
    }
}

const BUTTON_SYNC_STYLES = `
@media (hover: none), (max-width: 768px) {
  .bauhaus-wrapper.in-view .bauhaus-button {
    background-color: var(--card-accent) !important;
    color: white !important;
  }
}
`;

function injectButtonSyncStyles() {
    if (typeof window === "undefined") return;
    const styleId = "bauhaus-button-sync-styles";
    let style = document.getElementById(styleId) as HTMLStyleElement;

    if (!style) {
        style = document.createElement("style");
        style.id = styleId;
        document.head.appendChild(style);
    }
    if (style.innerHTML !== BUTTON_SYNC_STYLES) {
        style.innerHTML = BUTTON_SYNC_STYLES;
    }
}

export interface BauhausWrapperProps {
    children: React.ReactNode;
    className?: string;
    accentColor?: string;
    borderRadius?: string;
    backgroundColor?: string;
    borderWidth?: string;
}

export const BauhausWrapper: React.FC<BauhausWrapperProps> = ({
    children,
    className = "",
    accentColor = "#156ef6",
    borderRadius = "2.5rem",
    backgroundColor = "#14141A",
    borderWidth = "2px",
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    // Relaxed margin: -15% means it activates when it's in the middle ~70% of the screen
    const isInView = useInView(cardRef, { margin: "-15% 0px -15% 0px" });

    useEffect(() => {
        injectBauhausWrapperStyles();
        injectButtonSyncStyles();
        const card = cardRef.current;

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (card) {
                const rect = card.getBoundingClientRect();
                let clientX, clientY;

                if (window.TouchEvent && e instanceof TouchEvent) {
                    // Don't track touch move for rotation on mobile to avoid jitter, 
                    // rely on auto-animation instead.
                    return;
                } else {
                    clientX = (e as MouseEvent).clientX;
                    clientY = (e as MouseEvent).clientY;
                }

                const x = clientX - rect.left - rect.width / 2;
                const y = clientY - rect.top - rect.height / 2;
                const angle = Math.atan2(-x, y);
                card.style.setProperty("--rotation", angle + "rad");
            }
        };

        if (card) {
            card.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (card) {
                card.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, []);

    return (
        <div
            className={`bauhaus-wrapper ${isInView ? "in-view" : ""} ${className}`}
            ref={cardRef}
            style={{
                '--card-bg': backgroundColor,
                '--card-accent': accentColor,
                '--card-radius': borderRadius,
                '--card-border-width': borderWidth,
            } as React.CSSProperties}
        >
            <div className="h-full w-full relative z-10 rounded-[calc(var(--card-radius)-var(--card-border-width))] overflow-hidden">
                {children}
            </div>
        </div>
    );
};
