export default function Navbar() {
    return (
        <div className="w-full h-[10svh] flex items-center">
            <h1 className="text-lg md:text-3xl font-bold text-zinc-50">landing-boilerplate</h1>
            <ul className="hidden md:flex gap-6 ml-20 text-zinc-50">
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Faqs</a></li>
            </ul>
        </div>
    );
}
