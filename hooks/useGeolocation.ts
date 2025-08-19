import { useState, useEffect } from 'react';

export interface GeolocationResult {
  location: string | null;
  loading: boolean;
  error: string | null;
}

export const useGeolocation = (): GeolocationResult => {
  const [location, setLocation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateLocation = () => {
    const testLocation = localStorage.getItem('testLocation');
    
    if (testLocation) {
      setLocation(testLocation);
      setLoading(false);
      return;
    }

    // Проверяем кэш геолокации
    const cachedLocation = localStorage.getItem('cachedLocation');
    const cacheTime = localStorage.getItem('cachedLocationTime');
    const now = Date.now();
    const cacheAge = cacheTime ? now - parseInt(cacheTime) : 0;
    
    // Кэш действителен 1 час
    if (cachedLocation && cacheAge < 3600000) {
      setLocation(cachedLocation);
      setLoading(false);
      return;
    }

    // Пытаемся определить реальную страну через IP
    const detectCountry = async () => {
      try {
        // Пробуем первый сервис
        let response = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code;
          
          // Кэшируем результат
          localStorage.setItem('cachedLocation', countryCode);
          localStorage.setItem('cachedLocationTime', now.toString());
          
          setLocation(countryCode);
          setLoading(false);
          return;
        }

        // Если первый сервис не сработал, пробуем альтернативный
        response = await fetch('https://api.ipify.org?format=json');
        
        if (response.ok) {
          const ipData = await response.json();
          const ip = ipData.ip;
          
          // Используем ip-api.com для определения страны по IP
          const geoResponse = await fetch(`http://ip-api.com/json/${ip}`);
          
          if (geoResponse.ok) {
            const geoData = await geoResponse.json();
            const countryCode = geoData.countryCode;
            
            // Кэшируем результат
            localStorage.setItem('cachedLocation', countryCode);
            localStorage.setItem('cachedLocationTime', now.toString());
            
            setLocation(countryCode);
            setLoading(false);
            return;
          }
        }

        throw new Error('All geolocation services failed');
      } catch (err) {
        console.warn('Failed to detect country, using fallback:', err);
        setLocation('US'); // Fallback для стран не UA/RU
        setLoading(false);
      }
    };

    detectCountry();
  };

  useEffect(() => {
    updateLocation();
  }, []);

  // Слушаем изменения localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      updateLocation();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { location, loading, error };
}; 