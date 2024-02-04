import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

const GOOGLE_ID = process.env.GOOGLE_ID!
const GOOGLE_SECRET = process.env.GOOGLE_SECRET!

const authOption : NextAuthOptions = {
    session:{
        strategy:'jwt'
    },
    providers:[
        GoogleProvider({
            clientId: GOOGLE_ID,
            clientSecret:GOOGLE_SECRET
        })
    ],
    callbacks:{
        async signIn({account,profile}){
            if(!profile?.email){
                throw new Error('no profile bro')
            }
            return true
        }
    }
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}