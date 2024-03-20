import { Instagram, Mail, Phone } from "lucide-react";


export default function Footer() {
  return (
    <div className="p-4 bg-blue-800">
        <div>
            <h3 className="mb-2 text-3xl text-white">Fale Conosco</h3>
            <ul className="flex gap-5">
                <li className="text-white"> <Instagram className="hover:cursor-pointer" color="white"/></li>
                <li className="text-white"><Mail className="hover:cursor-pointer" color="white" /></li>
                <li className="text-white"><Phone className="hover:cursor-pointer" color="white" /></li>
            </ul>
        </div>
    </div>
  )
}
