import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';
import Credentials from 'next-auth/providers/credentials';



export const {
    auth,
    signIn,
    signOut,
    handlers: { GET, POST },
} = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            name: 'credentials',
            credentials: {
                username: { label: 'username', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                console.log(credentials)
                
                const response = await fetch("http://localhost:3000/users/login", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                  });
                  console.log(response)
            
                  if (!response.ok) {
                    throw new Error('Invalid credentials');
                  };
                

                return null;
            },
        }),
    ],
});