/**
 * Fetch Shim
 * 
 * This shim prevents third-party libraries (like node-fetch polyfills) from crashing 
 * when they attempt to overwrite window.fetch in environments where it is defined 
 * as a read-only or getter-only property.
 */

export function initFetchShim() {
  if (typeof window === 'undefined') return;

  const originalFetch = window.fetch;
  if (!originalFetch) return;

  try {
    const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch');
    
    // If the property is not configurable, we can't redefine it.
    // However, if it's already defined with a setter, we're good.
    if (descriptor && !descriptor.configurable) {
      // If it's already a getter/setter pair, it might be fine.
      // If it's just a getter, we are stuck unless we can find another way.
      if (descriptor.set) {
        return;
      }
      console.debug('[FetchShim] window.fetch is not configurable. Cannot apply shim.');
      return;
    }

    Object.defineProperty(window, 'fetch', {
      get: () => originalFetch,
      set: (value) => {
        // If the value being set is the same as the original, just ignore it silently.
        if (value === originalFetch) return;
        
        // Some libraries try to wrap fetch. We allow it if it's a function,
        // but we log a warning to be aware of it.
        console.warn('[FetchShim] Prevented overwrite of window.fetch. Attempted value:', value);
      },
      configurable: true,
      enumerable: true,
    });
    
    console.debug('[FetchShim] Applied successfully.');
  } catch (error) {
    console.debug('[FetchShim] Failed to apply shim:', error);
  }
}

// Initialize immediately
initFetchShim();
