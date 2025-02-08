'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Main() {
  const [haveUser, setHaveUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setHaveUser(user);
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    if (haveUser) {
      router.push('/home');
    } else {
      router.push('/login');
    }
  }, [haveUser, router]);

  return <div>Loading...</div>;
}
