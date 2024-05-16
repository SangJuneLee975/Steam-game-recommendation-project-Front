import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { isLoggedInState, accessTokenState } from '../recoil/atoms';

const HandleSteamCallback = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const setAccessToken = useSetRecoilState(accessTokenState);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    //const claimedId = params.get('claimedId');
    const redirectUrl = params.get('redirectUrl');
    const steamNickname = params.get('steamNickname');

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      if (steamNickname) {
        localStorage.setItem('steamNickname', steamNickname);
      }
      setIsLoggedIn(true);
      setAccessToken(accessToken);
      navigate(redirectUrl || '/'); // 홈으로 리다이렉트
    } else {
      console.error('콜백 URL에 토큰이 없습니다');
    }
  }, [navigate, setIsLoggedIn, setAccessToken]);

  return <div>Loading...</div>;
};

export default HandleSteamCallback;
