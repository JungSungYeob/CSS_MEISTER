export function getTheme(): boolean {
  if (typeof window !== 'undefined') {
    const dark = localStorage.getItem('dark');
    if (dark === 'true') return true;
    return false;
  }
  return false;
}

export function setTheme(checked: boolean) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('dark', checked ? 'true' : 'false');
  }
  return;
}
