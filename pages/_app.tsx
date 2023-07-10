import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import './signup.css'
import './login.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../components/Feed.css'
import AuthWrapper from '../context/AuthWrapper';
import '../components/profile.css'  

// export default function App({ Component, pageProps }: AppProps) {
//   return (
  
// <div className="bg-gray-500">
  
//   <Component {...pageProps} />
 //</div>
  
//   )
// }


function App({ Component, pageProps }) {
  return (
      <AuthWrapper>
     <Component {...pageProps}/>
     </AuthWrapper>
  );
 }

 export default App