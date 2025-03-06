// import { themeSettings } from "./theme";

export default defineAppConfig({
    ui: {
        card: {
            slots: {
                root: 'rounded-[calc(var(--ui-radius)*2)]',
                header: 'p-0 sm:px-0',
                body: 'p-4 sm:p-6',
                footer: 'p-4 sm:px-6'
            },
        },
    }
})