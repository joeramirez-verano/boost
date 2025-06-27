import localFont from 'next/font/local'

export const jostHeading = localFont({
  src:[
    {path: './Jost-Black.ttf', style: 'normal', weight: '900'},
    {path: './Jost-ExtraBold.ttf', style: 'normal', weight: '800'},
    {path: './Jost-Bold.ttf', style: 'normal', weight: '700'},
    {path: './Jost-SemiBold.ttf', style: 'normal', weight: '600'},
    {path: './Jost-SemiBold.ttf', style: 'normal', weight: '600'},
    {path: './Jost-Medium.ttf', style: 'normal', weight: '500'},
    {path: './Jost-Regular.ttf', style: 'normal', weight: '400'},
    {path: './Jost-Light.ttf', style: 'normal', weight: '300'},
    {path: './Jost-ExtraLight.ttf', style: 'normal', weight: '200'},
    {path: './Jost-Thin.ttf', style: 'normal', weight: '100'},

    {path: './Jost-BlackItalic.ttf', style: 'italic', weight: '900'},
    {path: './Jost-ExtraBoldItalic.ttf', style: 'italic', weight: '800'},
    {path: './Jost-BoldItalic.ttf', style: 'italic', weight: '700'},
    {path: './Jost-SemiBoldItalic.ttf', style: 'italic', weight: '600'},
    {path: './Jost-SemiBoldItalic.ttf', style: 'italic', weight: '600'},
    {path: './Jost-MediumItalic.ttf', style: 'italic', weight: '500'},
    {path: './Jost-Italic.ttf', style: 'italic', weight: '400'},
    {path: './Jost-LightItalic.ttf', style: 'italic', weight: '300'},
    {path: './Jost-ExtraLightItalic.ttf', style: 'italic', weight: '200'},
    {path: './Jost-ThinItalic.ttf', style: 'italic', weight: '100'},
],
  variable: '--font-heading',
  fallback: ['Jost','san-serif'],
})

export const jostGraphic = localFont({
  src: './Jost-Black.ttf',
  style: 'normal',
  variable: '--font-graphic',
  fallback: ['Jost','san-serif'],
})

export const afacadBody = localFont({
  src: [
    {path: './Afacad-Regular.ttf', style: 'normal', weight: '400'},
    {path: './Afacad-Medium.ttf', style: 'normal', weight: '500'},
    {path: './Afacad-SemiBold.ttf', style: 'normal', weight: '600'},
    {path: './Afacad-Bold.ttf', style: 'normal', weight: '700'},

    {path: './Afacad-Italic.ttf', style: 'italic', weight: '400'},
    {path: './Afacad-MediumItalic.ttf', style: 'italic', weight: '500'},
    {path: './Afacad-SemiBoldItalic.ttf', style: 'italic', weight: '600'},
    {path: './Afacad-BoldItalic.ttf', style: 'italic', weight: '700'},
  ],
  variable: '--font-body',
  fallback: ['Afacad','san-serif']
})
