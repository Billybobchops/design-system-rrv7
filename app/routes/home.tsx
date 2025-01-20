import type { Route } from './+types/home';
import { Gallery } from '~/gallery/Gallery';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Starling UI Design System' },
        { name: 'description', content: 'Welcome to the Starling UI design system!' },
    ];
}

export default function Home() {
    return <Gallery />;
}
