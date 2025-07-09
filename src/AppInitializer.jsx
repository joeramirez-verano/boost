import { useEffect } from 'react';
import { appController } from './store/appController';
import { BRAND,BRAND_DATA } from './config/constant';

const AppInitializer = () => {
  useEffect(() => {
    const initializeApp = async () => {
      try {
        const [_] = await Promise.all([  //getlocation is commented as depends on wordpress key which will expose on githubpages
          appController.initialize(),
          // getLocations(),
        ]);

        // const storeLocations = locationsData?.filter(hit => hit._geoloc);
        appController.updateState({ allStoreLocations: BRAND_DATA[BRAND.ZLD].allLocations });
      } catch (err) {
        console.error("App initialization failed:", err);
      }
    };

    //  Listen for ageGateCompleted event
    document.addEventListener('ageGateCompleted', initializeApp);

    // On mount: check if cookie already exists
    if (document.cookie.includes('resp-agev-age-verification-passed=true') || document.cookie.includes('swa_Common/isAgeChecked')) {
      initializeApp();
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('ageGateCompleted', initializeApp);
    };
  }, []);

  return null;
};

export default AppInitializer;
