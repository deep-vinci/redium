import Image from "next/image"
import Link from "next/link"

type Props = {
    className: string
}

export default function Nav() {
    return <div className="w-full h-fit flex items-center justify-end gap-5 p-5 font-bold text-md">
        <div className="mr-auto ml-0">
            <Image src="/icon.svg" className="invert light:invert-0"  width={200} height={20} alt="Logo"/>
        </div>

        <div>
            <Link href="/write" >Write</Link>
        </div>
        <div>
            <Link href="/login" >Login</Link>
        </div>
    </div>
}