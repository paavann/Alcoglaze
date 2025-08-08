import PersonIcon from '@mui/icons-material/Person';
import logo from "../assets/logo.png"

const navElements = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
]

export default function Header() {

    return (
        <header className="flex flex-row justify-between align-center w-[full] h-[9vh] pl-30 pr-30">
            <img src={logo} alt="alcoglaze company logo" className="h-20 self-center cursor-pointer" />

            <div className="flex gap-10">
                <nav className="flex text-[rgb(18,47,87)] text-lg">
                    <ul className="flex flex-row gap-8 align-center justify-center self-center">
                        {navElements.map(({ label, href }, index) => (
                            <li key={index}><a href={href} className="hover:underline self-center">{label}</a></li>
                        ))}
                    </ul>
                </nav>

                <div className="self-center">
                    <PersonIcon fontSize='large'/>
                </div>
            </div>
        </header>
    )
}