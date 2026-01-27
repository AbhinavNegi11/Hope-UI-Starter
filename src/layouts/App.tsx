import React , { useEffect } from "react";
// Redux Selector / Action
import {useDispatch } from 'react-redux';

// import state selectors
import { setSetting } from '@/store/setting/actions'

// layouts/Default.jsx
interface LayoutProps {
    children: React.ReactNode;
 }
 
const AppLayout = ({ children }: LayoutProps) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setSetting(''))
    })

    return <>{children}</>;
};
export default AppLayout;