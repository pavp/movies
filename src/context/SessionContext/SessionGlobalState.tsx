import React, { PropsWithChildren, useEffect, useState } from "react";

import { KEYS_STORAGE, getData } from "_utils/AsyncStorageManager";
import { useRequestSession } from "_hooks/useRequestSession";

import SessionContext from "./SessionContext";

const SessionGlobalState = ({ children }: PropsWithChildren) => {
  const [session, setSession] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { requestSession } = useRequestSession();

  useEffect(() => {
    const getSession = async () => {
      const sessionId = await getData(KEYS_STORAGE.SESSION_ID);

      if (sessionId) {
        setSession(sessionId);
        setIsLoading(false);
        return;
      }
      requestSession();
      setIsLoading(false);
    };
    getSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{ session: session, setSession: setSession }}
    >
      {!isLoading && children}
    </SessionContext.Provider>
  );
};

export default SessionGlobalState;
