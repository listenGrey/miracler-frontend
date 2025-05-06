import { useEffect, useState } from 'react';

export type ThemeMode = 'light' | 'dark';

export function useTheme(): [ThemeMode, (mode: ThemeMode) => void] {
    const [theme, setTheme] = useState<ThemeMode>('light');

    // 初始化时从 localStorage 或系统偏好加载
    useEffect(() => {
        const saved = localStorage.getItem('theme') as ThemeMode | null;
        const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const initial = saved || system;
        setTheme(initial);
        document.documentElement.setAttribute('data-theme', initial);
    }, []);

    // 切换主题
    const toggle = (mode: ThemeMode) => {
        setTheme(mode);
        document.documentElement.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
    };

    return [theme, toggle];
}
