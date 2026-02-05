export const logger = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: (message: string, meta?: any) => {
    console.log(
      JSON.stringify({
        level: "info",
        message,
        meta,
        timestamp: new Date().toISOString(),
      })
    );
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (message: string, meta?: any) => {
    console.error(
      JSON.stringify({
        level: "error",
        message,
        meta,
        timestamp: new Date().toISOString(),
      })
    );
  },
};
