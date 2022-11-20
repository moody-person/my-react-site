import rosetta from 'rosetta';
import { aboutI18N } from '../data/about';
import { adminI18N } from '../data/admin';
import { cvI18N } from '../data/cv';
import { footerI18N } from '../data/footer';
 
// TODO provide data
// about - about me page
// admin - info about me
// cv - resume data
// footer - text in footer
// projects - text in projects
// articles - text in articles
export const i18n = rosetta({
    ru: {
        admin: {
            ...adminI18N['ru']
        },
        about: {
            ...aboutI18N['ru']
        },
        cv: {
            ...cvI18N['ru']
        },
        footer: {
            ...footerI18N['ru']
        }
    }
});
 
i18n.locale('ru');
