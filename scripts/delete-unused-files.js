const fs = require('fs').promises;
const path = require('path');

const filesToDelete = [
  // Original UI components to delete
  'components/ui/accordion.tsx',
  'components/ui/aspect-ratio.tsx',
  'components/ui/avatar.tsx',
  'components/ui/badge.tsx',
  'components/ui/breadcrumb.tsx',
  'components/ui/chart.tsx',
  'components/ui/checkbox.tsx',
  'components/ui/collapsible.tsx',
  'components/ui/context-menu.tsx',
  'components/ui/drawer.tsx',
  'components/ui/hover-card.tsx',
  'components/ui/input-otp.tsx',
  'components/ui/menubar.tsx',
  'components/ui/navigation-menu.tsx',
  'components/ui/popover.tsx',
  'components/ui/progress.tsx',

  // Additional files from the list
  'components/atoms/Image/Image.jsx',
  'components/atoms/Image/index.jsx',
  'components/atoms/RichText/index.js',
  'components/atoms/RichText/RichText.js',
  'components/common/hooks/hookstate/storeSwitcherController/index.js',
  'components/common/hooks/hookstate/storeSwitcherController/initialstate.js',
  'components/common/hooks/hookstate/strainsFilterController.js',
  'components/common/hooks/hookstate/useIsMounted.js',
  'components/common/hooks/useGetPromos.js',
  'components/common/hooks/useOnRouteChange.js',
  'components/common/hooks/useQueryParams.js',
  'components/common/hooks/useRedirectQueryParams.js',
  'components/common/hooks/useSearchParamsObject.js',
  'components/common/hooks/useSetAroundLatLng.js',
  'components/common/hooks/useSetSelectedLocation.js',
  'components/common/hooks/useStoreTime.js',
  'components/footer.tsx',
  'components/header.tsx',
  'components/molecules/Chat/Chat.jsx',
  'components/molecules/Chat/index.js',
  'components/molecules/Footer/StoreCTA/index.js',
  'components/molecules/Footer/ZLD/StoreLocatorCTA.jsx',
  'components/molecules/Header/LocationBar/StoreTypeSwitcher.jsx',
  'components/molecules/Header/ZLD/getMenuUrl.js',
  'components/molecules/Header/ZLD/HeaderSearchBar.jsx',
  'components/organisms/BrandGallery/BrandGallery.js',
  'components/organisms/BrandGallery/index.js',
  'components/organisms/StoreLocator/Location/index.jsx',
  'components/organisms/StoreLocator/Location/StoreTime.jsx',
  'components/theme-provider.tsx',
  'components/ui/alert-dialog.tsx',
  'components/ui/alert.tsx',
  'components/ui/button.tsx',
  'components/ui/calendar.tsx',
  'components/ui/card.tsx',
  'components/ui/carousel.tsx',
  'components/ui/command.tsx',
  'components/ui/dialog.tsx',
  'components/ui/dropdown-menu.tsx',
  'components/ui/form.tsx',
  'components/ui/input.tsx',
  'components/ui/label.tsx',
  'components/ui/pagination.tsx',
  'components/ui/radio-group.tsx',
  'components/ui/resizable.tsx',
  'components/ui/scroll-area.tsx',
  'components/ui/select.tsx',
  'components/ui/separator.tsx',
  'components/ui/sheet.tsx',
  'components/ui/sidebar.tsx',
  'components/ui/skeleton.tsx',
  'components/ui/slider.tsx',
  'components/ui/sonner.tsx',
  'components/ui/switch.tsx',
  'components/ui/table.tsx',
  'components/ui/tabs.tsx',
  'components/ui/textarea.tsx',
  'components/ui/toast.tsx',
  'components/ui/toaster.tsx',
  'components/ui/toggle-group.tsx',
  'components/ui/toggle.tsx',
  'components/ui/tooltip.tsx',
  'components/ui/use-mobile.tsx',
  'components/ui/use-toast.ts',
  'config/deliveryAreasConfig/zldDeliveryAreasConfig.js',
  'functions/createMarkup.js',
  'functions/findDeliveryStore.js',
  'functions/getMenuType.js',
  'functions/sweed/generateSweedProductUrl.js',
  'functions/sweed/getDeliveryZones.js',
  'functions/sweed/getStoreInfoList.js',
  'functions/sweed/getSweedStoreProductList.js',
  'functions/sweed/index.js',
  'functions/useStoreTime.js',
  'hooks/use-mobile.tsx',
  'hooks/use-toast.ts',
  'lib/common/index.js',
  'lib/utils.ts',
  'src/age-gate.tsx',
  'src/context/VeranoContext.tsx'
];

async function deleteFiles() {
  console.log('Starting file deletion process...');
  let deletedCount = 0;
  let notFoundCount = 0;
  let errorCount = 0;
  
  for (const file of filesToDelete) {
    try {
      const filePath = path.join(process.cwd(), file);
      await fs.unlink(filePath);
      console.log(`✅ Successfully deleted: ${file}`);
      deletedCount++;
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️ File already deleted or not found: ${file}`);
        notFoundCount++;
      } else {
        console.error(`❌ Error deleting ${file}:`, error.message);
        errorCount++;
      }
    }
  }
  
  console.log('\nDeletion Summary:');
  console.log('----------------');
  console.log(`Total files processed: ${filesToDelete.length}`);
  console.log(`Successfully deleted: ${deletedCount}`);
  console.log(`Not found: ${notFoundCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log('----------------');
  console.log('File deletion process completed.');
}

deleteFiles().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
}); 