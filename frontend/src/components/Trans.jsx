import React from 'react';

/**
 * Lingo.dev Translation Component
 * Wraps text for translation to English, Hindi, and Kannada
 * This component marks strings for translation via Lingo.dev MCP
 */
export default function Trans({ id, children, ...props }) {
  // If children is a string, use it as the translation key
  const translationKey = id || (typeof children === 'string' ? children : 'translation_key');
  
  // For now, render the children directly
  // Lingo.dev MCP will process these tags during translation
  return <span data-lingo-id={translationKey} {...props}>{children}</span>;
}


