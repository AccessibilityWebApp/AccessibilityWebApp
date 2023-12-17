import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '@/pages/screens/Login.jsx';
import ExpertSignUp from '@/pages/screens/ExpertSignUp.jsx';
import CompanySignUp from '@/pages/screens/CompanySignUp.jsx';
import PortaalKeuze from '@/pages/screens/Portal_Keuze.jsx';
import ExpertPortal from '@/pages/screens/ExpertPortal.jsx'

const PageNavigator = () => {
    const [userType, setUserType] = useState(null);
    const navigate = useNavigate();

    const handleToLogin = () => {
        navigate('/login');
    };

    const handleToAanmeld = () => {
        if (userType === 'expert') {
            navigate('/expert_signup');
        } else if (userType === 'company') {
            navigate('/company_signup');
        }
    };

    const handleToPortal = () => {
        navigate('/portal');
    };

    const handleToExpertPortal = () => {
        navigate('/expert_portal');
    };

    const handlePortalButtonClick = (selectedUserType) => {
        setUserType(selectedUserType);
        handleToLogin();
    };

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login handleToAanmeld={handleToAanmeld} handleToPortal={handleToPortal} userType={userType} />} />
                <Route path="/expert_signup" element={<ExpertSignUp handleToLogin={handleToLogin} />} />
                <Route path="/company_signup" element={<CompanySignUp handleToLogin={handleToLogin} />} />
                <Route path="/portal" element={<PortaalKeuze handlePortalButtonClick={handlePortalButtonClick} />} />
                <Route path='/expert_portal' element={<ExpertPortal handleToExpertPortalClick={handleToExpertPortal} />} />
                <Route index element={<Navigate to="/portal" />} />
            </Routes>
        </div>
    );
};

export default PageNavigator;