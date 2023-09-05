async function initMocks() {
  if (typeof window === "undefined") {
    return;
  }
  const { worker } = await import("./browser");
  worker.start({ onUnhandledRequest: "bypass" });
}

initMocks();

export {};
