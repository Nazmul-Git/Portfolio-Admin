'use client';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-indigo-600 text-white py-6">
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
                {/* Footer Left Section: Copyright */}
                <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <p className="text-lg">
                        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
                    </p>
                </div>

                {/* Footer Right Section: Social Links */}
                <div className="flex space-x-6">
                    <Link href="https://www.linkedin.com/in/nazmul-hasan-sunny" target="_blank" className="text-white hover:text-teal-400">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/nazmulhasan" target="_blank" className="text-white hover:text-teal-400">
                        GitHub
                    </Link>
                    <Link href="mailto:nazmul@example.com" className="text-white hover:text-teal-400">
                        Email
                    </Link>
                </div>
            </div>
        </footer>
    );
}
