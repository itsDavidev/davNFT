import { Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RoutesPrivates from './routes/private.routes';
import RoutesPublics from './routes/public.routes';

function App() {
	const [logged, setLogged] = useState(false);
	return (
		<div className='p-4  bg-black min-h-screen w-ful text-light font-manrope overflow-hidden'>
			<button
				onClick={() => setLogged(!logged)}
				className='bg-glow_gree px-4 py-2 rounded-2xl text-dark font-semibold relative z-10'>
				logged
			</button>
			<Suspense fallback={<p>loading ...</p>}>
				<BrowserRouter>
					{logged ? <RoutesPrivates /> : <RoutesPublics />}
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
