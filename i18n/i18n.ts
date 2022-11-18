import rosetta from 'rosetta';
import { aboutI18N } from '../data/about';
 
// TODO provide data
// about - about me page
// admin - info about me
// cv - resume data
// footer - text in footer
// projects - text in projects
// articles - text in articles
export const i18n = rosetta({
    ru: {
        about: {
            ...aboutI18N['ru']
        }
    }
});
 
i18n.locale('ru');
