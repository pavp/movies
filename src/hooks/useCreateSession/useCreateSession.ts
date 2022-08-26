import { useContext } from "react";
import { useMutation } from "react-query";

import { postSession } from "_services/post-session";
import { Session } from "_models/session";
import { storeData, KEYS_STORAGE } from "_utils/AsyncStorageManager";
import { SessionContext } from "_context/SessionContext";

const useCreateSession = (requestToken: string) => {
  const { setSession } = useContext(SessionContext);

  const { mutate: createSession } = useMutation<Session, Error>(
    () => postSession(requestToken),
    {
      onSuccess: (data) => {
        if (data.success && data.session_id) {
          storeData(KEYS_STORAGE.SESSION_ID, data.session_id);
          setSession(data.session_id);
        }
      },
    }
  );

  return { createSession };
};

export default useCreateSession;
