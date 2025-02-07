import { Switch } from 'radix-ui';
import { cn } from '@/lib/utils';

export const ChangeThemeButton: React.FC<Switch.SwitchProps> = ({
  ...props
}) => {
  return (
    <>
      <Switch.Root
        className={cn(
          'w-28 h-12 rounded-full shrink-0 shadow-[inset_0px_4px_6px_rgba(0,0,0,0.3)] inline-flex items-center overflow-hidden relative duration-700 ring-0',
          'data-[state=checked]:bg-slate-900',
          'data-[state=unchecked]:bg-sky-400'
        )}
        {...props}
      >
        <Switch.Thumb
          className={cn(
            'h-14 w-14 rounded-full absolute duration-700',
            'data-[state=checked]:translate-x-[60px] data-[state=checked]:bg-slate-700/50',
            'data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        <Switch.Thumb
          className={cn(
            'h-[76px] w-[76px] rounded-full absolute duration-700',
            'data-[state=checked]:translate-x-[40px] data-[state=checked]:bg-slate-700/50',
            'data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        <Switch.Thumb
          className={cn(
            'h-24 w-24 rounded-full absolute duration-700',
            'data-[state=checked]:translate-x-[20px] data-[state=checked]:bg-slate-700/50',
            'data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-sky-300/50'
          )}
        />
        {/* cloud */}
        <Switch.Thumb
          className={cn(
            'absolute duration-700 delay-500 -right-4 top-6 cloud',
            'data-[state=checked]:animate-fadeOut',
            'data-[state=unchecked]:animate-fadeIn'
          )}
        />
        {/* sparkle */}
        <Switch.Thumb
          className={cn(
            'absolute duration-700 delay-500 left-4 top-6 sparkle',
            'data-[state=unchecked]:animate-fadeOut',
            'data-[state=checked]:animate-fadeIn'
          )}
        />
        <Switch.Thumb
          className={cn(
            'absolute duration-700 delay-500 left-8 top-2 sparkle',
            'data-[state=unchecked]:animate-fadeOut',
            'data-[state=checked]:animate-fadeIn'
          )}
        />
        <Switch.Thumb
          className={cn(
            'absolute duration-700 delay-500 left-12 top-4 sparkle',
            'data-[state=unchecked]:animate-fadeOut',
            'data-[state=checked]:animate-fadeIn'
          )}
        />
        <Switch.Thumb
          className={cn(
            'drop-shadow-lg h-9 w-9 rounded-full block transition-transform duration-700 relative',
            'data-[state=checked]:translate-x-[70px] data-[state=checked]:bg-slate-300 data-[state=checked]:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.3)]',
            'data-[state=unchecked]:translate-x-1.5 data-[state=unchecked]:bg-yellow-400 data-[state=unchecked]:shadow-[inset_2px_2px_3px_rgba(255,255,255,0.9)]'
          )}
        >
          <Switch.Thumb
            className={cn(
              'h-2 w-2 rounded-full absolute duration-1000 top-0.5 left-3',
              'data-[state=checked]:bg-slate-500',
              'data-[state=unchecked]:bg-slate-700/0'
            )}
          />
          <Switch.Thumb
            className={cn(
              'h-2 w-2 rounded-full absolute duration-1000 top-6 right-1.5',
              'data-[state=checked]:bg-slate-500',
              'data-[state=unchecked]:bg-slate-700/0'
            )}
          />
          <Switch.Thumb
            className={cn(
              'h-3.5 w-3.5 rounded-full absolute duration-1000 top-3 left-1',
              'data-[state=checked]:bg-slate-500',
              'data-[state=unchecked]:bg-slate-700/0'
            )}
          />
        </Switch.Thumb>
      </Switch.Root>
    </>
  );
};
