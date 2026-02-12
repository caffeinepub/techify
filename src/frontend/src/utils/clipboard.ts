/**
 * Robust clipboard utility with modern API and legacy fallback.
 * Attempts to copy text to clipboard using multiple methods without throwing console errors.
 */

interface CopyResult {
  success: boolean;
  message?: string;
}

/**
 * Attempts to copy text using the modern Clipboard API
 */
async function modernCopy(text: string): Promise<boolean> {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    return false;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Fallback copy method using temporary textarea and execCommand
 */
function legacyCopy(text: string): boolean {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  textarea.style.top = '-9999px';
  textarea.setAttribute('readonly', '');
  
  document.body.appendChild(textarea);
  
  try {
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textarea);
    return successful;
  } catch {
    document.body.removeChild(textarea);
    return false;
  }
}

/**
 * Copies text to clipboard with automatic fallback.
 * Returns a result object indicating success/failure and an optional message.
 */
export async function copyToClipboard(text: string): Promise<CopyResult> {
  // Try modern API first
  const modernSuccess = await modernCopy(text);
  if (modernSuccess) {
    return { success: true };
  }
  
  // Try legacy method
  const legacySuccess = legacyCopy(text);
  if (legacySuccess) {
    return { success: true };
  }
  
  // Both methods failed
  return {
    success: false,
    message: 'Copy not supported on this browser. Please select the UPI ID and copy it manually.'
  };
}
