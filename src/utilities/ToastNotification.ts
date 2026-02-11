import Swal from 'sweetalert2';

// Keep track of active toasts
let toastContainer: HTMLElement | null = null;
let toastCounter = 0;

export function showToast(message: string, icon: 'success' | 'error' | 'warning' | 'info') {
  // Create container if it doesn't exist
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.right = '20px';
    toastContainer.style.zIndex = '9999';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '10px';
    document.body.appendChild(toastContainer);
  }

  // Create individual toast
  const toast = document.createElement('div');
  const toastId = `toast-${++toastCounter}`;
  toast.id = toastId;

  // Style the toast
  toast.style.background = getBackgroundColor(icon);
  toast.style.color = '#fff';
  toast.style.padding = '12px 16px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  toast.style.minWidth = '300px';
  toast.style.maxWidth = '400px';
  toast.style.position = 'relative';
  toast.style.display = 'flex';
  toast.style.alignItems = 'center';
  toast.style.gap = '10px';
  toast.style.animation = 'slideInRight 0.3s ease-out';

  // Add icon
  const iconElement = document.createElement('span');
  iconElement.innerHTML = getIconHTML(icon);
  iconElement.style.fontSize = '20px';

  // Add message
  const messageElement = document.createElement('span');
  messageElement.textContent = message;
  messageElement.style.flex = '1';

  // Add close button
  const closeButton = document.createElement('button');
  closeButton.innerHTML = '&times;';
  closeButton.style.background = 'transparent';
  closeButton.style.border = 'none';
  closeButton.style.color = '#fff';
  closeButton.style.fontSize = '18px';
  closeButton.style.cursor = 'pointer';
  closeButton.style.padding = '0';
  closeButton.style.marginLeft = '10px';

  // Assemble toast
  toast.appendChild(iconElement);
  toast.appendChild(messageElement);
  toast.appendChild(closeButton);

  // Add to container
  toastContainer.appendChild(toast);

  // Close functionality
  const closeToast = () => {
    toast.style.animation = 'slideOutRight 0.3s ease-in';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
      // Remove container if no toasts left
      if (toastContainer && toastContainer.children.length === 0) {
        document.body.removeChild(toastContainer);
        toastContainer = null;
      }
    }, 300);
  };

  // Auto close after 5 seconds
  setTimeout(closeToast, 5000);

  // Manual close
  closeButton.onclick = closeToast;
}

function getBackgroundColor(icon: 'success' | 'error' | 'warning' | 'info'): string {
  switch (icon) {
    case 'success':
      return '#10b981';
    case 'error':
      return '#ef4444';
    case 'warning':
      return '#f59e0b';
    case 'info':
      return '#3b82f6';
    default:
      return '#6b7280';
  }
}

function getIconHTML(icon: 'success' | 'error' | 'warning' | 'info'): string {
  switch (icon) {
    case 'success':
      return '✓';
    case 'error':
      return '✕';
    case 'warning':
      return '⚠';
    case 'info':
      return 'ℹ';
    default:
      return '•';
  }
}