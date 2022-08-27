import { HomePage } from './home-page';
import { AboutPage } from './about-page';

export class MyApp {
    static routes = [
        {
            path: '',
            component: HomePage,
            title: 'Home'
        },
        {
            path: '/about',
            component: AboutPage,
            title: 'About'
        },
    ];
}