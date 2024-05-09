import {auth,signIn,signOut} from '@/auth'
import Image from 'next/image';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Header = async() => {
    const session=await auth()
    console.log(session);
  return (
    <>
        {
            session?.user ? (
                <div className='flex'>
                    <p>{session?.user?.name}</p>
                    <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={32}
                    height={32}
                />
                <SignOut/>
                </div>
            ):(<SignIn/>)
        }
    </>
  )
}

export default Header