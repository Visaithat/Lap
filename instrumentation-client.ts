import posthog from 'posthog-js';

// PostHog client init (Next.js runs this once on the client before render).
// Session replay is toggled in the PostHog dashboard (Settings → Replay);
// the config below only controls capture + masking behavior.
posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  defaults: '2025-05-24', // auto-captures pageviews + pageleaves on SPA navigation
  capture_pageview: 'history_change',
  session_recording: {
    maskAllInputs: false, // record everything (no input masking)
    maskTextSelector: undefined, // no text masking
  },
});
