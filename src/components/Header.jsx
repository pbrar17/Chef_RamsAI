import chefLogo from "../../public/chefLogo.gif";
import Image  from "next/image";

export default function Header() {
    return (
        <header>
            {/* <img src={chefLogo}/> */}
            <Image src={chefLogo} alt="Logo" width={150} height={50} priority />
            <h1>Chef RamsAI</h1>
        </header>
    )
}