"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

import { IoIosArrowRoundBack } from "react-icons/io";


function page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      username: username,
      password: password,
      redirect: false
    });

    if (result?.error) {
      setError('Credenciais incorretas.');
    } else {
      router.push('/admin');
    }
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[80vh]">
      <div className="bg-writingLight p-8 w-96 border border-writingDark rounded-[8px] shadow-[-4px_4px_0px_#161616]">
        <h2 className="text-2xl font-semibold mb-4 w-full text-center">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-writingDark text-sm font-bold mb-2" htmlFor="username">
              Usuário:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-writingDark text-sm font-bold mb-2" htmlFor="password">
              Senha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 mb-4 w-full text-center">{error}</p>}
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="bg-secondary hover:bg-primary text-writingLight font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
      <Link
        href="/"
        className="inline-flex items-center justify-center mt-8 mr-[24px] hover:text-secondary"
      >
        <IoIosArrowRoundBack className="text-2xl mr-2" />
        Retornar ao site
      </Link>
    </div>
  );
}

export default page;