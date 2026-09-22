'use client';

import { useEffect } from 'react';

type StayViewHelpChatProps = {
  audience: 'public' | 'subscriber';
  app: 'website' | 'pms' | 'outlet' | 'backoffice' | 'platform';
  side?: 'left' | 'right';
};

const SCRIPT_ID = 'stayview-copilot-script';

export function StayViewHelpChat({ audience, app, side = 'right' }: StayViewHelpChatProps) {
  useEffect(() => {
    const base = (process.env.NEXT_PUBLIC_STAYVIEW_AGENT_URL || 'http://127.0.0.1:8787').replace(
      /\/$/,
      '',
    );
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `${base}/widget.js`;
    script.async = true;
    script.dataset.audience = audience;
    script.dataset.app = app;
    script.dataset.side = side;
    script.dataset.base = base;
    document.body.appendChild(script);
    return () => {
      script.remove();
      document.getElementById('stayview-copilot-host')?.remove();
      window.__STAYVIEW_COPILOT__ = false;
    };
  }, [audience, app, side]);

  return null;
}

declare global {
  interface Window {
    __STAYVIEW_COPILOT__?: boolean;
  }
}
