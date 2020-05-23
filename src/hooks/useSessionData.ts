interface SessionData {
  visited: boolean;
}

export const useSessionData = (): SessionData => {
  const visited = window.sessionStorage.getItem("visited") === "true";

  !visited &&
    setTimeout(() => {
      window.sessionStorage.setItem("visited", "true");
    });

  return { visited };
};
