"use client"

import { useRouter } from 'next/navigation';
import { AiFillHome } from 'react-icons/ai'; 
import './HomeButton.css';

export default function HomeButton() {
    const router = useRouter();
    return (
        <button className="home-btn" onClick={() => router.push('/')}>
            <AiFillHome className="home-btn-icon" />
        </button>
    );
}