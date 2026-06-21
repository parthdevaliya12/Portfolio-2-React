/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                ink: {
                    DEFAULT: "#0A0E14",
                    panel: "#0F1420",
                    border: "#1C2333",
                    soft: "#161B29",
                },
                paper: "#E8E6E1",
                muted: "#8B93A7",
                amber: {
                    DEFAULT: "#F4B740",
                    dim: "#C99A3A",
                },
                teal: {
                    DEFAULT: "#5EEAD4",
                    dim: "#3FB8A6",
                },
            },
            fontFamily: {
                display: ["Space Grotesk", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"],
                body: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                "dot-grid":
                    "radial-gradient(circle, #1C2333 1px, transparent 1px)",
            },
            backgroundSize: {
                "dot-sm": "24px 24px",
            },
            keyframes: {
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                glow: {
                    "0%, 100%": { opacity: "0.5" },
                    "50%": { opacity: "1" },
                },
            },
            animation: {
                blink: "blink 1s step-end infinite",
                fadeUp: "fadeUp 0.7s ease-out forwards",
                float: "float 6s ease-in-out infinite",
                glow: "glow 3s ease-in-out infinite",
            },
        },
    },
    plugins: [],
};