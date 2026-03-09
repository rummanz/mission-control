/**
 * API URL Helper
 *
 * Prepends the configured basePath (e.g. "/agent-dashboard") to any
 * relative API path so that client-side fetch(), EventSource, and
 * window.open() calls reach the correct Next.js route when the app is
 * served under a sub-path.
 *
 * Usage:
 *   import { apiUrl } from '@/lib/api';
 *   fetch(apiUrl('/api/tasks'));
 *   new EventSource(apiUrl('/api/events/stream'));
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function apiUrl(path: string): string {
  return `${BASE_PATH}${path}`;
}
