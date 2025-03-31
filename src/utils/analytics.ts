type EventType = 'page_view' | 'feature_use' | 'error' | 'milestone';

interface AnalyticsEvent {
  type: EventType;
  data: Record<string, any>;
  timestamp: number;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];

  private constructor() {}

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  trackEvent(type: EventType, data: Record<string, any>) {
    const event: AnalyticsEvent = {
      type,
      data,
      timestamp: Date.now(),
    };
    this.events.push(event);
    this.sendToServer(event);
  }

  private async sendToServer(event: AnalyticsEvent) {
    // Implementation for sending to analytics server
    console.log('Analytics event:', event);
  }
}

export const analytics = Analytics.getInstance();