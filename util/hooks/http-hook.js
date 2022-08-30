import { useState, useCallback, useRef, useEffect } from 'react';
import { useGlobalMsg } from './useGlobalMsg';

import Config from 'react-native-config';
import { REACT_APP_URL } from '@env';

export const useHttpClient = (url) => {
  const [isLoading, setIsLoading] = useState(false);

  const setGlobalMsg = useGlobalMsg();
  const activeHttpRequest = useRef([]);

  const sendRequest = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    // TRY CATCH BLOCK FOR SENDING REQUEST WITH THE METHOD, BODY, AND HEADERS WE GIVE IT
    setIsLoading(true);
    const httpAbortController = new AbortController();
    activeHttpRequest.current.push(httpAbortController);

    try {
      const response = await fetch(`${REACT_APP_URL}${url}`, {
        method,
        body,
        headers,
        signal: httpAbortController.signal,
        credentials: 'include',
      });
      const responseData = await response.json();

      activeHttpRequest.current = activeHttpRequest.current.filter(
        (reqCtrl) => reqCtrl !== httpAbortController
      );
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return responseData;
    } catch (err) {
      // CATCH
      setGlobalMsg(JSON.stringify(err.message), 'error');
      setTimeout(() => {
        setIsLoading(false);
      }, 500);

      throw err;
    }
  }, []);

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrll) => abortCtrll.abort());
    };
  }, []);

  return { isLoading, sendRequest };
};
