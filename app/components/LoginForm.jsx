'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '../actions';

const LoginForm = () => {
    const [error, setError] = useState("");
    const router = useRouter();

    async function onSubmit(event) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const found = await login(formData)

            if (found) {
                router.push('/home');
            } else {
                setError('Please provide a valid login credential');
            }
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <>
            <div className="my-2 text-red-500">
                {error}
            </div>
            <form className="login-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>

                <button
                    type="submit"
                    className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
                >
                    Login
                </button>
            </form>
        </>
    );
};

export default LoginForm;