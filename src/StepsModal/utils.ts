export const saveToLocalStorage = (key: string, value: Record<string, any>) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  };