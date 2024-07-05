// ///import React, { useEffect } from 'react';
// import { useClerk } from '@clerk/clerk-react';
// import { useRouter } from 'next/router';

// const OAuthCallback = () => {
//   const { handleRedirectCallback } = useClerk();
//   const router = useRouter();

//   useEffect(() => {
//     async function handleCallback() {
//       const params = new URLSearchParams(window.location.search);
//       const code = params.get('code');
//       const state = params.get('state');

//       if (code && state) {
//         try {
//           await handleRedirectCallback({
//             code,
//             state,
//           });
//         } catch (error) {
//           console.error('OAuth callback error:', error);
//         }
//         router.push('/'); // Redirect to the desired page after handling the callback
//       }
//     }

//     handleCallback();
//   }, [handleRedirectCallback, router]);

//   return <div>Processing OAuth callback...</div>;
// };

// export default OAuthCallback; 