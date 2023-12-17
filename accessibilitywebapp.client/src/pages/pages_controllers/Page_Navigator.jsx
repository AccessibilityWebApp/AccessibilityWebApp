import React, { useState } from 'react';
import Login from '@/pages/screens/Login.jsx';
import ExpertSignUp from '@/pages/screens/ExpertSignUp.jsx';
import CompanySignUp from '@/pages/screens/CompanySignUp.jsx';
import PortaalKeuze from '@/pages/screens/Portal_Keuze.jsx';
import ExpertPortal from '@/pages/screens/ExpertPortal.jsx'

const PageNavigator = () => {
    const [currentPage, setCurrentPage] = useState('portal');
    const [userType, setUserType] = useState(null);

    const handleToLogin = () => {
        setCurrentPage('login');
    };

    const handleToAanmeld = () => {
        if (userType === 'expert') {
            setCurrentPage('expert_signup');
        } else if (userType === 'company') {
            setCurrentPage('company_signup');
        }
    };

    const handleToPortal = () => {
        setCurrentPage('portal');
    };
    const handleToExpertPortal = () => {
        setCurrentPage('ExpertPortal');
    };

    const handlePortalButtonClick = (selectedUserType) => {
        setUserType(selectedUserType);
        handleToLogin();
    };

    return (
        <>
            {currentPage === 'portal' && ( <PortaalKeuze handlePortalButtonClick={handlePortalButtonClick} />)}
            {currentPage === 'login' && ( <Login handleToAanmeldClick={handleToAanmeld} handleToPortalClick={handleToPortal} userType={userType} /> )}
            {currentPage === 'expert_signup' && <ExpertSignUp handleToLoginClick={handleToLogin} />}
            {currentPage === 'company_signup' && <CompanySignUp handleToLoginClick={handleToLogin} />}
            {currentPage === 'expert_portal' && <ExpertPortal handleToExpertPortal={handleToExpertPortal} />}
        </>
    );
};

export default PageNavigator;
