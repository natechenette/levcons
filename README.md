# levcons

Add new svgs to each folder

make sure this is installed: 
`npm install -g @svgr/cli`

run: 
```svgr --icon --typescript --out-dir src/components/icons/micro --ext tsx --filename-case kebab src/icons/micro
svgr --icon --typescript --out-dir src/components/icons/small --ext tsx --filename-case kebab src/icons/small
svgr --icon --typescript --out-dir src/components/icons/default --ext tsx --filename-case kebab src/icons/default```

or just run this instead: 
./scripts/generate_components.sh

update index.ts imports and exports

make sure there's no ems for heights and width on components

replace props: `SVGProps<SVGSVGElement>` with `{ color = "#000", ...props }: Props`

replace `props: SVGProps<SVGSVGElement>` with ``{ color = "#000", ...props }: Props`
replace `import type { SVGProps } from "react";` with: 
```import type { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  color?: string; // Define color prop
}```

replace `stroke="#000"` with `stroke={color}` and `fill={color}` with `fill={color}`

be sure to exclude .svgs

run `npm run build` 

publish

