import { useEffect, useState } from "react"
import { RotateCcw } from "lucide-react"

const rows = [
  "H   H   U   U   GGGG   OOO  ",
  "H   H   U   U  G      O   O ",
  "HHHHH   U   U  G  GG  O   O ",
  "H   H   U   U  G   G  O   O ",
  "H   H    UUU    GGGG   OOO  ",
]


export default function AsciiLogoTypewriter() {
    const [visibleChars, setVisibleChars] = useState(0)
    const [key, setKey] = useState(0) // to trigger remount
    const fullText = rows.join("\n")

    useEffect(() => {
        let current = 0
        const interval = setInterval(() => {
            setVisibleChars((prev) => {
                current = prev + 1
                if (current >= fullText.length) clearInterval(interval)
                return current
            })
        }, 50)

        return () => clearInterval(interval)
    }, [key])

    return (
        <div className="relative bg-black p-4 rounded-md border border-cyan-500 w-fit mx-auto overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="w-full h-full animate-scanlines bg-[repeating-linear-gradient(transparent_0px,transparent_1px,rgba(255,255,255,0.04)_2px)]" />
            </div>

            <pre className="relative z-20 font-mono text-cyan-400 text-[16px] leading-snug drop-shadow-[0_0_6px_#22d3ee] whitespace-pre-wrap">
                {fullText.slice(0, visibleChars)}
                <span className="animate-pulse text-cyan-500">▌</span>
            </pre>

            <button
                onClick={() => {
                    setVisibleChars(0)
                    setKey((k) => k + 1)
                }}
                className="absolute top-2 right-2 text-cyan-500 hover:text-cyan-300 transition"
                title="Reload animation"
            >
                <RotateCcw size={18} />
            </button>
        </div>
    )
}
