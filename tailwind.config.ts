import type { Config } from "tailwindcss";

import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // ↓ 추가 // 추후 정리 필요
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pub-cms/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // ↓ 추가
        green: "#09BC71",
        red: "#F42B37",
        muted: "#7B808A",
        "cell-green": "#FFFDEF",
        "cell-red": "#FFF5F5",
        "cell-purple": "#F6F8FF",
        "cell-blue": "#E8F7FF",
        "h-red": "#FCE9EA",
        "h-green": "#DDF6E6",
        "h-blue": "#D9F0FC",
      },
    },
  },
  plugins: [
    daisyui,
  ],
} satisfies Config;
