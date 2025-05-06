export type EventColor =
    | 'red'
    | 'orange'
    | 'yellow'
    | 'green'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'gray'
    | 'brown';

export type ThemeMode = 'light' | 'dark';

interface EventColorStyle {
    title: string;
    background: string;
    itemBg: string;
    itemText: string;
}

export const eventColorMap: Record<EventColor, Record<ThemeMode, EventColorStyle>> = {
    red: {
        light: {
            title: 'rgba(244, 171, 159, 0.4)',
            background: 'rgba(243, 136, 118, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(222, 85, 83, 0.45)',
            background: 'rgba(222, 85, 88, 0.1)',
            itemBg: 'rgba(222, 85, 85, 0.25)',
            itemText: '#ffffff',
        },
    },
    orange: {
        light: {
            title: 'rgba(224, 124, 57, 0.27)',
            background: 'rgba(224, 124, 57, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(233, 126, 35, 0.45)',
            background: 'rgba(233, 126, 40, 0.06)',
            itemBg: 'rgba(233, 126, 37, 0.2)',
            itemText: '#ffffff',
        },
    },
    yellow: {
        light: {
            title: 'rgba(236, 191, 66, 0.39)',
            background: 'rgba(215, 177, 24, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(250, 177, 67, 0.5)',
            background: 'rgba(162, 105, 50, 0.1)',
            itemBg: 'rgba(179, 129, 61, 0.2)',
            itemText: '#ffffff',
        },
    },
    green: {
        light: {
            title: 'rgba(123, 183, 129, 0.27)',
            background: 'rgba(123, 183, 129, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(45, 153, 100, 0.5)',
            background: 'rgba(45, 153, 100, 0.08)',
            itemBg: 'rgba(45, 153, 100, 0.2)',
            itemText: '#ffffff',
        },
    },
    blue: {
        light: {
            title: 'rgba(93, 165, 206, 0.27)',
            background: 'rgba(91, 166, 209, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(51, 126, 169, 0.5)',
            background: 'rgba(51, 126, 169, 0.08)',
            itemBg: 'rgba(51, 126, 169, 0.2)',
            itemText: '#ffffff',
        },
    },
    purple: {
        light: {
            title: 'rgba(168, 129, 197, 0.27)',
            background: 'rgba(206, 175, 229, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(168, 91, 242, 0.34)',
            background: 'rgba(155, 97, 211, 0.08)',
            itemBg: 'rgba(155, 97, 211, 0.18)',
            itemText: '#ffffff',
        },
    },
    pink: {
        light: {
            title: 'rgba(225, 136, 179, 0.27)',
            background: 'rgba(231, 147, 188, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(220, 76, 145, 0.4)',
            background: 'rgba(220, 76, 145, 0.06)',
            itemBg: 'rgba(220, 76, 145, 0.22)',
            itemText: '#ffffff',
        },
    },
    gray: {
        light: {
            title: 'rgba(84, 72, 49, 0.15)',
            background: 'rgba(84, 72, 49, 0.04)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(255, 255, 255, 0.13)',
            background: 'rgba(255, 255, 255, 0.055)',
            itemBg: 'rgba(255, 255, 255, 0.094)',
            itemText: '#ffffff',
        },
    },
    brown: {
        light: {
            title: 'rgba(210, 162, 141, 0.35)',
            background: 'rgba(210, 162, 141, 0.07)',
            itemBg: '#ffffff',
            itemText: '#000000',
        },
        dark: {
            title: 'rgba(184, 101, 67, 0.45)',
            background: 'rgba(184, 101, 72, 0.08)',
            itemBg: 'rgba(184, 101, 69, 0.25)',
            itemText: '#ffffff',
        },
    },
};
/*
红：
   白天-标题：rgba(244, 171, 159, 0.4)
   白天-背景：rgba(243, 136, 118, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(222, 85, 83, 0.45)
   黑夜-背景：rgba(222, 85, 88, 0.1)
   黑夜-事项背景：rgba(222, 85, 85, 0.25)
   黑夜-事项文字颜色：白色
橙：
   白天-标题：rgba(224, 124, 57, 0.27)
   白天-背景：rgba(224, 124, 57, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(233, 126, 35, 0.45)
   黑夜-背景：rgba(233, 126, 40, 0.06)
   黑夜-事项背景：rgba(233, 126, 37, 0.2)
   黑夜-事项文字颜色：白色
黄：
   白天-标题：rgba(236, 191, 66, 0.39)
   白天-背景：rgba(215, 177, 24, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(250, 177, 67, 0.5)
   黑夜-背景：rgba(162, 105, 50, 0.1)
   黑夜-事项背景：rgba(179, 129, 61, 0.2)
   黑夜-事项文字颜色：白色
绿：
   白天-标题：rgba(123, 183, 129, 0.27)
   白天-背景：rgba(123, 183, 129, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(45, 153, 100, 0.5)
   黑夜-背景：rgba(45, 153, 100, 0.08)
   黑夜-事项背景：rgba(45, 153, 100, 0.2)
   黑夜-事项文字颜色：白色
蓝：
   白天-标题：rgba(93, 165, 206, 0.27)
   白天-背景：rgba(91, 166, 209, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(51, 126, 169, 0.5)
   黑夜-背景：rgba(51, 126, 169, 0.08)
   黑夜-事项背景：rgba(51, 126, 169, 0.2)
   黑夜-事项文字颜色：白色
紫：
   白天-标题：rgba(168, 129, 197, 0.27)
   白天-背景：rgba(206, 175, 229, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(168, 91, 242, 0.34)
   黑夜-背景：rgba(155, 97, 211, 0.08)
   黑夜-事项背景：rgba(155, 97, 211, 0.18)
   黑夜-事项文字颜色：白色
粉：
   白天-标题：rgba(225, 136, 179, 0.27)
   白天-背景：rgba(231, 147, 188, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(220, 76, 145, 0.4)
   黑夜-背景：rgba(220, 76, 145, 0.06)
   黑夜-事项背景：rgba(220, 76, 145, 0.22)
   黑夜-事项文字颜色：白色
灰：
   白天-标题：rgba(84, 72, 49, 0.15)
   白天-背景：rgba(84, 72, 49, 0.04)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(255, 255, 255, 0.13)
   黑夜-背景：rgba(255, 255, 255, 0.055)
   黑夜-事项背景：rgba(255, 255, 255, 0.094)
   黑夜-事项文字颜色：白色
棕：
   白天-标题：rgba(210, 162, 141, 0.35)
   白天-背景：rgba(210, 162, 141, 0.07)
   白天-事项背景：白色
   白天-事项文字颜色：黑色
   黑夜-标题：rgba(184, 101, 67, 0.45)
   黑夜-背景：rgba(184, 101, 72, 0.08)
   黑夜-事项背景：rgba(184, 101, 69, 0.25)
   黑夜-事项文字颜色：白色
*/
