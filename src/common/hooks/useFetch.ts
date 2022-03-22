import { useState, useCallback, useEffect } from 'react';

import defaultApi from 'src/base/service/mainApi.service';

export const useGet = <T>(initialUrl: string | undefined = undefined,
  onLoadRequest: boolean | undefined = undefined) => {
  const [state, setState] = useState<T | undefined>();

  useEffect(() => {
    if (onLoadRequest) {
      initialRequest();
    }
  }, []);

  const initialRequest = async () => {
    if (initialUrl) {
      const resp = await defaultApi.get<T>(initialUrl);
      setState(resp.data);
    }
  };

  const request = useCallback((url: string | undefined = undefined) => {
    if (!url) {
      if (initialUrl) {
        fetch(initialUrl, { method: 'GET' }).then((x) => x.json()).then((x) => setState(x));
      }
    } else {
      fetch(url, { method: 'GET' }).then((x) => x.json()).then((x) => setState(x));
    }
  }, []);

  return [state, request] as const;
};
