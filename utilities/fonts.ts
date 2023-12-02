import { DM_Sans, DM_Serif_Display } from 'next/font/google'
 
const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const DMSerif = DM_Serif_Display({
    subsets: ['latin'],
    variable: '--font-dm-serif',
    weight: '400'
});

export { DMSans, DMSerif }
   
 