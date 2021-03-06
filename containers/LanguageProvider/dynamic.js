import dynamic from 'next/dynamic';

const DynamicLanguageProvider = dynamic(() => import('./index'), {
  ssr: false,
});

export default DynamicLanguageProvider;
