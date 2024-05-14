//importing inter font
import {Inter, Lusitana} from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] }); //specifying the font subset-latin

 
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });