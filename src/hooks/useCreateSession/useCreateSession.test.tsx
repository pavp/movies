import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";
import { QueryClient, QueryClientProvider } from "react-query";

import { Session } from "_models/session";
import { SessionContext } from "_context/SessionContext";

import useCreateSession from "./useCreateSession";

const requestToken = "1234";

const session: Session = {
  session_id: "123",
  success: true,
};

jest.mock("_services/post-session", () => ({
  postSession: jest.fn().mockResolvedValue(session),
}));

describe("useCreateSession", () => {
  it("should set session", async () => {
    const setSessionMock = jest.fn();
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>
        <SessionContext.Provider
          value={{ session: "sessionTest", setSession: setSessionMock }}
        >
          {children}
        </SessionContext.Provider>
      </QueryClientProvider>
    );
    const { result } = renderHook(() => useCreateSession(requestToken), {
      wrapper,
    });
    await waitFor(() => result.current.createSession());
    expect(setSessionMock).toBeCalledWith(session.session_id);
  });

  it("should not set session when session_id is undefined", async () => {
    session.session_id = undefined;
    const setSessionMock = jest.fn();
    const queryClient = new QueryClient();
    const wrapper = ({ children }: any) => (
      <QueryClientProvider client={queryClient}>
        <SessionContext.Provider
          value={{ session: "sessionTest", setSession: setSessionMock }}
        >
          {children}
        </SessionContext.Provider>
      </QueryClientProvider>
    );
    const { result } = renderHook(() => useCreateSession(requestToken), {
      wrapper,
    });
    await waitFor(() => result.current.createSession());
    expect(setSessionMock).not.toBeCalled();
  });
});
