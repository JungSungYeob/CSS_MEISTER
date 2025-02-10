'use client';

import { Switch } from 'radix-ui';
import { useEffect, useState } from 'react';
import { getTheme, setTheme } from '@/lib/storage';
import { cn } from '@/lib/utils';

export const ChangeThemeSwitch: React.FC<Switch.SwitchProps> = ({
  ...props
}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>();

  useEffect(() => {
    const savedTheme = getTheme();
    if (savedTheme) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const changeTheme = (checked: boolean) => {
    setIsDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    setTheme(checked);
  };

  return (
    <>
      <Switch.Root
        className={cn(
          'group',
          'w-28 h-12 rounded-full shrink-0 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.5)] inline-flex items-center overflow-hidden relative duration-700 ring-0',
          'data-[state=checked]:bg-slate-900',
          'data-[state=unchecked]:bg-sky-400',
          isDarkMode === undefined ? 'hidden' : 'animate-fadeIn'
        )}
        {...props}
        checked={isDarkMode}
        onCheckedChange={changeTheme}
      >
        <span
          className={cn(
            'h-14 w-14 rounded-full absolute duration-700',
            'group-data-[state=checked]:translate-x-[60px] group-data-[state=checked]:bg-slate-700/50',
            'group-data-[state=unchecked]:translate-x-0 group-data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        <span
          className={cn(
            'h-[76px] w-[76px] rounded-full absolute duration-700',
            'group-data-[state=checked]:translate-x-[40px] group-data-[state=checked]:bg-slate-700/50',
            'group-data-[state=unchecked]:translate-x-0 group-data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        <span
          className={cn(
            'h-24 w-24 rounded-full absolute duration-700',
            'group-data-[state=checked]:translate-x-[20px] group-data-[state=checked]:bg-slate-700/50',
            'group-data-[state=unchecked]:translate-x-0 group-data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        {/* cloud */}
        <span
          className={cn(
            'absolute duration-700 delay-500 -right-4 top-6 cloud',
            'group-data-[state=checked]:animate-fadeOut',
            'group-data-[state=unchecked]:animate-fadeIn'
          )}
        />
        {/* sparkle */}
        <div>
          <span
            className={cn(
              'absolute duration-700 delay-500 left-4 top-6 sparkle',
              'group-data-[state=unchecked]:animate-fadeOut',
              'group-data-[state=checked]:animate-fadeIn'
            )}
          />
          <span
            className={cn(
              'absolute duration-700 delay-500 left-8 top-2 sparkle',
              'group-data-[state=unchecked]:animate-fadeOut',
              'group-data-[state=checked]:animate-fadeIn'
            )}
          />
          <span
            className={cn(
              'absolute duration-700 delay-500 left-12 top-4 sparkle',
              'group-data-[state=unchecked]:animate-fadeOut',
              'group-data-[state=checked]:animate-fadeIn'
            )}
          />
        </div>

        <Switch.Thumb
          className={cn(
            'drop-shadow-lg h-9 w-9 rounded-full block transition-transform duration-700 relative',
            'data-[state=checked]:translate-x-[70px] data-[state=checked]:bg-slate-300 data-[state=checked]:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.3)]',
            'data-[state=unchecked]:translate-x-1.5 data-[state=unchecked]:bg-yellow-400 data-[state=unchecked]:shadow-[inset_2px_2px_3px_rgba(255,255,255,0.9)]'
          )}
        >
          <span
            className={cn(
              'h-2 w-2 rounded-full absolute duration-1000 top-0.5 left-3',
              'group-data-[state=checked]:bg-slate-500',
              'group-data-[state=unchecked]:bg-slate-700/0'
            )}
          />
          <span
            className={cn(
              'h-2 w-2 rounded-full absolute duration-1000 top-6 right-1.5',
              'group-data-[state=checked]:bg-slate-500',
              'group-data-[state=unchecked]:bg-slate-700/0'
            )}
          />
          <span
            className={cn(
              'h-3.5 w-3.5 rounded-full absolute duration-1000 top-3 left-1',
              'group-data-[state=checked]:bg-slate-500',
              'group-data-[state=unchecked]:bg-slate-700/0'
            )}
          />
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};
