import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-12 bg-foreground text-background border-t-4 border-black">
            <div className="container px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="font-bold text-lg">
                    © {new Date().getFullYear()} The Do Nothing Club. All rights reserved (eventually).
                </p>

                <div className="flex items-center gap-6">
                    <Link href="#" className="font-bold hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4">
                        Twitter (Inactive)
                    </Link>
                    <Link href="#" className="font-bold hover:text-primary transition-colors hover:underline decoration-wavy underline-offset-4">
                        Instagram (Empty)
                    </Link>
                </div>
            </div>
        </footer>
    );
}
