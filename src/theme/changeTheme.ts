export enum ThemeType {
    light,
    dark,
}

const themeVariations: object = {

    [ThemeType.light]: {
        /* Text Colors */
        "--primary-text-color": "black",
        "--secondary-text-color": "white",

        /*  background colors */
        "--primary-background-color": "white",
        "--secondary-background-color": "black",
    },
    [ThemeType.dark]: {
        "--primary-text-color": "white",
        "--secondary-text-color": "black",

        "--primary-background-color": "black",
        "--secondary-background-color": "white",

    }

}


export const changeTheme = (theme: ThemeType) => {

    const root = document.documentElement;
    const properties = themeVariations[theme];

    setTimeout(() => {
        for (const property in properties) {
            root.style.setProperty(property, properties[property]);
        }
    }, 200)

}
