import React from 'react';
import AccountMenu from './Details';
import { ServiceShow } from './Service';

export default function Admin() {
    const isAdmin = true;
    return (
        <>
            <AccountMenu isAdmin={isAdmin} />
            <ServiceShow isAdmin={isAdmin}/>
        </>

    );
}
