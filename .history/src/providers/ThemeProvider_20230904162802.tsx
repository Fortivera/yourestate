import { ThemeContext } from "@/context/ThemeContex"
import { useState, useContext, ReactNode } from "react"

interface ComponentProps {
    children: ReactNode
}


export default function ThemeProvider({ children }: ComponentProps) {
    const { theme } = useContext(ThemeContext);
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={theme}>{children}</div>;
    }
    return <div className={theme}>{children}</div>
}

