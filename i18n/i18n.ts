import rosetta from 'rosetta';
import { about } from '../data/about';
 
// TODO provide data
export const i18n = rosetta({
    ru: {
        about: {
            ...about['ru']
        }
    }
});
 
i18n.locale('ru');
