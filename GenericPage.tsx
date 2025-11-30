import React from 'react';
import { FadeIn } from '../components/Animations';

interface Props {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const GenericPage: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{title}</h1>
        <p className="text-xl text-gray-500 mb-16 leading-relaxed">{subtitle}</p>
        <div className="prose prose-invert prose-lg text-gray-300">
          {children || (
            <>
               <p>
                 At NEXUS, we believe that technology should be an extension of the self. 
                 Our philosophy is rooted in the seamless integration of hardware and software, 
                 creating devices that are not just tools, but companions in your journey through the digital age.
               </p>
               <p>
                 Founded in 2024, our mission has been to strip away the unnecessary, leaving only 
                 the essential. We use premium materials—titanium, sapphire, ceramic—to build 
                 products that last a lifetime.
               </p>
               <h3>Innovation without Compromise</h3>
               <p>
                 Every curve, every pixel, every interaction is obsessed over by our team of 
                 world-class engineers and designers. We don't just build electronics; we sculpt the future.
               </p>
            </>
          )}
        </div>
      </FadeIn>
    </div>
  );
};