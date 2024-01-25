'use client';
import Link from 'next/link';
import './navigation.css'
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useUser } from "@/app/context/userContext";
import { usePathname } from "next/navigation";

const Separator: React.FC = () => <div className='separator'>|</div>
const Navigation: React.FC = () => {
    const pathname = usePathname();
    const { user } = useUser();
    const router = useRouter();

    const signOut = () => {
        console.log(`Signing out user: ${user.username}.`)
    }

    return (
        <>
            {user.isLogged ? (
                <div className='container'>
                    <div className='nav-wrapper'>

                        <div className='btn-container'>
                            <button className='signout-btn' onClick={signOut}>Sign Out</button>
                        </div>

                        <div className='navLinks'>
                            <Link href={'/'} className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                            <Separator/>
                            <Link href={'/instructions'}
                                  className={`link ${pathname === '/instructions' ? 'active' : ''}`}>Instructions</Link>
                            <Separator/>
                            <Link href={'/my-pets'} className={`link ${pathname === '/my-pets' ? 'active' : ''}`}>My
                                Pets</Link>
                        </div>


                    </div>

                </div>
            ) : null}
        </>
    );
}

export default Navigation;
