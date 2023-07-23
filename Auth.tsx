import React, { useEffect } from 'react';

const Auth = (SpecificComponent, loginRequired, adminRequired = false) => {
	const AuthenticationCheck = (props) => {
    	useEffect(() => {
            //로그인한 유저가 없는 경우
            if (!props.user) {
            	//해당 컴포넌트가 로그인이 필요한경우
                if (loginRequired) {
                	props.navigation.replace('Login');
                } else {
                	//로그인이 필요하지 않은 컴포넌트의 경우 특별한 동작 수행이 필요하지 않음
                }
            } else {	//로그인한 유저가 있는 경우
            	//해당 컴포넌트가 로그인 하지 않은 유저만 허용하는 경우(ex : 로그인 페이지)
            	if (loginRequired === false) {
                	props.navigation.replace('Main');
                }
                //해당 컴포넌트가 관리자 권한이 필요한 경우
                if (adminRequired) {
                    if (Role.isAdmin(props.user)) {
                    	//관리자 권한이 필요하고, 사용자가 관리자 권한이 있는 경우 별다른 동작 수행이 필요하지 않음
                    } else {
                    	props.navigation.replace('Main');
                    }
                }
            }
        }, []);
        
        return <SpecificComponent {...props} />;
	};
    return AuthenticationCheck;
}

export default Auth;

// export default inject(Auth)