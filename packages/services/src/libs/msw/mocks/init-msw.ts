const setupMSW = async () => {
  if (typeof window === 'undefined') {
    const { server } = await import('./environments/node');
    server.listen({ onUnhandledRequest: 'bypass' });
  } else {
    const { worker } = await import('./environments/browser');
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};

export const initMSW = () => {
  if (process.env.NEXT_PUBLIC_MSW_ENABLED === 'true') {
    setupMSW();
  }
};
