import { useReducer, useMemo } from "react";

/**
 * Custom React hook that creates a stateful proxy object. Mutations to this object's properties
 * will trigger component re-renders, making state management more reactive and efficient.
 *
 * @template T - The type of the object used for the state.
 * @param initialState - The initial state object.
 * @returns A proxy of the initial state object that triggers re-renders on mutations.
 */
function useProxyState<T extends object>(initialState: T): T {
  // Using useReducer to create a forceUpdate function by incrementing a state counter.
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  // useMemo to create and return a proxy only once per component instance.
  const proxy = useMemo(() => {
    // Define the handler with explicit ProxyHandler<T> type for better type checking.
    const handler: ProxyHandler<T> = {
      /**
       * Getter function for the proxy that returns the property's current value.
       *
       * @param target - The target state object.
       * @param property - The property being accessed.
       * @returns The current value of the property.
       */
      get: (target, property) => {
        return target[property];
      },

      /**
       * Setter function for the proxy that updates the property value and triggers a component re-render.
       *
       * @param target - The target state object.
       * @param property - The property to be set.
       * @param value - The new value for the property.
       * @returns Always returns true to indicate that the assignment was successful.
       */
      set: (target, property, value: unknown) => {
        target[property] = value;
        forceUpdate();
        return true;
      },
    };

    // Create the proxy with the initial state spread into a new object to ensure immutability.
    return new Proxy<T>({ ...initialState }, handler);
  }, []);

  return proxy;
}

export default useProxyState;
