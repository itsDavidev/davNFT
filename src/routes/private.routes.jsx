import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import GridCollections from '../layouts/GridCollections';

const Collection = lazy(() => import('../pages/Collection.page'));

const RoutesPrivates = () => {
	return (
		<Routes>
			<Route path='/collections/' element={<GridCollections />} />
			<Route path='/collection/:address/:slug' element={<Collection />}></Route>
			// TODO: implemet a 404 page
			<Route path='*' element={<Navigate to='/collections' replace />} />
		</Routes>
	);
};

export default RoutesPrivates;
