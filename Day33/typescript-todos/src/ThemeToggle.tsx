import { useContext } from "react"
import ThemeContext, { ThemeContextType } from "./ThemeContext"

export const ThemeToggle = () => {
    const {theme, setTheme} = useContext<ThemeContextType>(ThemeContext)
    return (
        <button className={theme?"toggle-theme Dark":"toggle-theme"} onClick={()=>{
            setTheme(!theme);
        }}>
            {theme? "Light":"Dark"}
        </button>
    )
}
